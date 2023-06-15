import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Card } from 'antd';
import CommentForm from "./commentForm";
import {EditCommentRequest} from "../../redux/comments/actions";

const CommentNew = ({
                   comment,
                   replies,
                   setActiveComment,
                   activeComment,
                   /*updateComment,*/
                   deleteComment,
                   addComment,
                   parentId = null,
                   currentUserId,
                 }) => {

  const initialComment = {
    comment: ''
  }

  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();

  const comments = useSelector(state => state.singleProduct.getProduct.comment);
  const [editComment, setEditComment] = useState(initialComment);
  const dispatch = useDispatch();

  const updateComment = async (e, commentId) => {

    e.preventDefault();
    console.log('comment Id', commentId)

    comments?.length && comments?.map(i => {
      if(i._id === commentId) {
        return ([
          { ...editComment, comment: e.target.value},
          dispatch(EditCommentRequest(i._id, editComment)),
        ]);
      }
    })
  };
  console.log('editComment', editComment)


  return (
    /*<div key={comment.id} className="comment">*/
    <div>
      {comments?.length > 0 && comments?.map((comment) =>
        <Card>
          <div className="comment-image-container">
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            {/*<img src="/user-icon.png" />*/}
          </div>
          <div className="comment-right-part">
            <div className="comment-content">
              <div className="comment-author">{comment.username}</div>
              <div>{createdAt}</div>
            </div>
            {!isEditing && <div className="comment-text">{comment.comment}</div>}
            {/*{isEditing && (*/}
              <form>
                <textarea
                  className="comment-form-textarea"
                  value={editComment.comment || comment.comment}
                  onChange={(e) => setEditComment({comment: e.target.value})}
                />
                <button onClick={(e) => updateComment(e, comment._id)}>Update</button>
                <button onClick={() => {
                  setActiveComment(null);
                }}>Cancel</button>
              </form>
            {/*)}*/}
            <div className="comment-actions">
              {canReply && (
                <div
                  className="comment-action"
                  onClick={() =>
                    setActiveComment({ id: comment._id, type: "replying" })
                  }
                >
                  Reply
                </div>
              )}
              {canEdit && (
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
                  onClick={() => deleteComment(comment.id)}
                >
                  Delete
                </div>
              )}
            </div>
            {isReplying && (
              <CommentForm
                submitLabel="Reply"
                handleSubmit={(text) => addComment(text, replyId)}
              />
            )}
            {replies.length > 0 && (
              <div className="replies">
                {replies.map((reply) => (
                  <CommentNew
                    comment={reply}
                    key={reply.id}
                    setActiveComment={setActiveComment}
                    activeComment={activeComment}
                    updateComment={updateComment}
                    deleteComment={deleteComment}
                    addComment={addComment}
                    parentId={comment.id}
                    replies={[]}
                    currentUserId={currentUserId}
                  />
                ))}
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
    /*</div>*/
  );
};

export default CommentNew;