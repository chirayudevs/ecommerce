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
import {AddCommentRequest, CommentsRequest} from '../../redux/comments/actions';
import {RequestProduct} from "../../redux/selectProduct/actions";
import {Avatar, Card} from "antd";
import CommentBox from "./commentBox";
import './comment.scss';

const initialValue = {
  comment: ''
}

const Comments = ({
  currentUserId,
  comment,
  replies,
  /*setActiveComment,*/
  /*activeComment,*/
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
}) => {

  const dispatch = useDispatch();
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const [postComment, setPostComment] = useState(initialValue);
  const [selectedValue, setSelectedValue] = useState('')
  const comments = useSelector(state => state.singleProduct.getProduct.comment);
 /* const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );*/
  const { _id } = useParams();
  debugger

  console.log('comments on comments page', comments);

  const addNewComment = async (e) => {
    setSelectedValue(e.target.value);
    setPostComment({...postComment, comment: e.target.value});

    console.log('comment add')
    await dispatch(AddCommentRequest(postComment));
  };

  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

  /*const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
      console.log('comment')
    });
  };

  const updateComment = (text, commentId) => {
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
  };

  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };*/

  useEffect(() => {
    console.log('use effect comments')
    dispatch(RequestProduct(_id))
  }, [dispatch]);

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

  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
*/

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

  return (
    <div className="comments">
      <h3 className="comments-title">Product Reviews</h3>
      <div className="comment-form-title">Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addNewComment} />
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
                  <div className="comment-author"> Test user name</div>
                  <div>createdAt</div>
                </div>
                { <div className="comment-text">{comment.comment}</div>}
                {
                  <CommentBox
                    submitLabel="Update"
                    hasCancelButton
                    initialText={comment.comment}
                    /*handleSubmit={(text) => updateComment(text, comment._id)}*/
                    handleCancel={() => {
                      setActiveComment(null);
                    }}
                  />
                }
                <div className="comment-actions">
                  {/*{canReply && (
                    <div
                      className="comment-action"
                      onClick={() =>
                        setActiveComment({ id: comment.id, type: "replying" })
                      }
                    >
                      Reply
                    </div>
                  )}*/}
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
