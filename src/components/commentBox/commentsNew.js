import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CommentForm from "./commentForm";
import Comment from "./commentNew";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "./commentsApi";
import {AddCommentRequest, EditCommentRequest} from '../../redux/comments/actions';

const CommentsNew = ({ currentUserId }) => {
  const { _id } = useParams();

  const initialValue = {
    productId: _id,
    comment: ''
  };

  const initialComment = {
    comment: ''
  };

  const [backendComments, setBackendComments] = useState([]);
  const [postComment, setPostComment] = useState(initialValue);
  const [editComment, setEditComment] = useState(initialComment);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const comments = useSelector(state => state.singleProduct.getProduct.comment);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setPostComment({...postComment, comment: e.target.value});
  }

  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

  const updateComment = async (e, commentId) => {
    //e.preventDefault();
    console.log('comment Id', commentId)
    /*event.preventDefault();*/
    comments?.length && comments?.map(i => {
      if(i._id === commentId) {
        return ([
          { ...editComment, comment: e.target.value},
          dispatch(EditCommentRequest(i._id, editComment)),
        ]);
      }
    })
  };


  /*const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };*/

  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  const isTextareaDisabled = postComment?.comment?.length === 0;

  const AddComment = async (event) => {
    event.preventDefault();

    await dispatch(AddCommentRequest(postComment));
    setPostComment({comment: ""});
  };

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write comment</div>

      <form onSubmit={AddComment}>
      <textarea
        className="comment-form-textarea"
        value={postComment.comment || initialValue.comment}
        onChange={handleOnChange}
      />
        <button className="comment-form-button" disabled={isTextareaDisabled}>
          Write
        </button>

          <button
            type="button"
            className="comment-form-button comment-form-cancel-button"
            /*onClick={handleCancel}*/
          >
            Cancel
          </button>

      </form>

      <div className="comments-container">

        <div>
          {/*{ comments?.length > 0 && comments?.map((comment) =>
            <>
              <textarea
                value={comment.comment}

              />
              <button>Update</button>
              <button>Cancel</button>
            </>
          )}*/}
        </div>

        {comments?.map((rootComment) => (
          <Comment
            key={rootComment._id}
            comment={rootComment}
            replies={getReplies(rootComment._id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={AddComment}
            deleteComment={deleteComment}
            /*updateComment={(e) => updateComment(e, rootComment._id)}*/
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsNew;
