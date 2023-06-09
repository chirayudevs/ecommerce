/*
import React from 'react';
import CommentBox from './commentBox';
import { Avatar, Card } from 'antd';
import './comment.scss';
import {useSelector} from "react-redux";
*/

/*
const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
*/

/*
  const comments = useSelector(state => state.singleProduct.getProduct.comment);

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
*/

/*
  return (
    <div key={comment.id} className="comments-card-main">
      <Card>
        { comments?.length > 0 && comments?.map((comment) =>
          <>
            <div className="comment-image-container">
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              {/!*<img src="/user-icon.png" alt="test" />*!/}
            </div>
            <div className="comment-right-part">
              <div className="comment-content">
                <div className="comment-author"> Test user name</div>
                <div>{createdAt}</div>
              </div>
              {!isEditing && <div className="comment-text">{comment.comment} body comment.comment</div>}
              {isEditing && (
                <CommentBox
                  submitLabel="Update"
                  hasCancelButton
                  initialText={comment.comment}
                  handleSubmit={(text) => updateComment(text, comment._id)}
                  handleCancel={() => {
                    setActiveComment(null);
                  }}
                />
              )}
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
                    onClick={() => deleteComment(comment._id)}
                  >
                    Delete
                  </div>
                )}
              </div>
              {isReplying && (
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
                      key={reply._id}
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
              )}
            </div>
          </>
          )
        }
      </Card>
    </div>
  )

};

export default Comment;
*/
