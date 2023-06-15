import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentForm from "./commentBox";
import Comment from "./comment";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "./commentsApi";
import {AddCommentRequest, CommentsRequest, EditCommentRequest} from '../../redux/comments/actions';
import {RequestProduct} from "../../redux/selectProduct/actions";
import {Avatar, Card} from "antd";
import CommentBox from "./commentBox";
import './comment.scss';

/*
const initialValue = {
  comment: ''
}
*/

const Comments = ({
  currentUserId,
  //comment,
  replies,
  /*setActiveComment,*/
  /*activeComment,*/
  /*updateComment,*/
  deleteComment,
  addComment,
  parentId = null,
}) => {
  const { _id } = useParams();

  const initialValue = {
    productId: _id,
    comment: ''
  };

  const initialComment = {
    comment: ''
  }

  const dispatch = useDispatch();
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const [postComment, setPostComment] = useState(initialValue);
  const [editComment, setEditComment] = useState(initialComment);
  const [selectedValue, setSelectedValue] = useState('')
  const comments = useSelector(state => state.singleProduct.getProduct.comment);
 /* const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );*/

  //const { _id } = useParams();

  //const dispatch = useDispatch();
  //const [postComment, setPostComment] = useState(initialValue);
  const isTextareaDisabled = postComment?.comment?.length === 0;

  const handleOnChange = (e) => {
    setPostComment({ ...postComment, comment: e.target.value });
  };

  const onSubmit = async (event) => {
    console.log('submit comment')
    event.preventDefault();
    await dispatch(AddCommentRequest(postComment));
  };

  console.log('comment', postComment)
  console.log('comments on comments page', comments);

  const addNewComment = async (e) => {
    setSelectedValue(e.target.value);
    setPostComment({...postComment, comment: e.target.value});

    console.log('comment add')
    await dispatch(AddCommentRequest(postComment));
  };

  /*const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );*/

  /*const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
      console.log('comment')
    });
  }; */

  const updateCommentOnChange = (e) => {
    setEditComment({ ...editComment, comment: e.target.value});
  };

  console.log('edit comment', editComment)
  const updateComment = async (e, commentId) => {
    console.log('test')
    e.preventDefault();
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

  /*const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };*/

/*
  useEffect(() => {
    console.log('use effect comments')
    dispatch(RequestProduct(_id))
  }, [dispatch]);
*/

/*
  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);
*/

/*
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
*/
  /*const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";*/

/*
  const fiveMinutes = 300000;
  //const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  //const canDelete =
    //currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  //const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
*/

  //const canEdit = currentUserId === comment.userId;

  return (
    <div className="comments">
      <h3 className="comments-title">Product Reviews</h3>
      <div className="comment-form-title">Write comment</div>
      <CommentForm
        submitLabel="Write"
        isTextareaDisabled={isTextareaDisabled}
        value={postComment.comment}
        handleOnChange={handleOnChange}
        handleSubmit={onSubmit}
      />
      <div className="comments-container">

        <div>
          { comments?.length > 0 && comments?.map((comment) =>
            <Card>
              <div className="comment-image-container">
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                {/*<img src="/user-icon.png" alt="test" />*/}
              </div>
              <div className="comment-right-part">
                <div className="comment-content">
                  <div className="comment-author"> Test user name {comment._id}</div>
                </div>
                { <div className="comment-text">{comment.comment}</div>}
                {
                  <div>
                    <CommentBox
                      submitLabel="Update"
                      hasCancelButton
                      initialText={comment.comment}
                      value={editComment.comment}
                      /*handleOnChange={updateCommentOnChange}*/
                      handleOnChange={(e) => setEditComment({comment: e.target.value})}
                      handleSubmit={(e) => updateComment(e, comment._id)}
                      /*handleSubmit={(text) => updateComment(text, comment._id)}*/
                      handleCancel={() => {
                        setActiveComment(null);
                      }}
                    />
                  </div>
                }
                <div className="comment-actions">
                  {
                    <div
                      className="comment-action"
                      onClick={() =>
                        setActiveComment({ id: comment._id, type: "replying" })
                      }
                    >
                      Reply
                    </div>
                  }
                  {/*{canEdit && (
                    <div
                      className="comment-action"
                      onClick={() =>
                        setActiveComment({ id: comment._id, type: "editing" })
                      }
                    >
                      Edit
                    </div>
                  )}
                  {canDelete && (
                    <div
                      className="comment-action"
                      onClick={() => deleteComment(comment._id)}
                    >
                      Delete
                    </div>
                  )}*/}
                </div>
                {/*{isReplying && (
                  <CommentBox
                    submitLabel="Reply"
                    handleSubmit={(text) => addComment(text, replyId)}
                  />
                )}
                {replies.length > 0 && (
                  <div className="replies">
                    {replies.map((reply) => (
                      <Comment
                        comment={reply}
                        key={reply.id}
                        setActiveComment={setActiveComment}
                        activeComment={activeComment}
                        updateComment={updateComment}
                        deleteComment={deleteComment}
                        addComment={addComment}
                        parentId={comment._id}
                        replies={[]}
                        currentUserId={currentUserId}
                      />
                    ))}
                  </div>
                )}*/}
              </div>
            </Card>
          )
          }
        </div>

        {/*{
          comments?.length > 0 && comments?.map((rootComment) => (
          <Comment
            key={rootComment._id}
            comment={rootComment.comment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}*/}
      </div>
    </div>
  );
};

export default Comments;
