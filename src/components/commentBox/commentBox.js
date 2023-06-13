import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';
import { useParams } from 'react-router-dom';
import { AddCommentRequest } from '../../redux/comments/actions';
import './commentBox.scss';

const { TextArea } = Input;

const CommentBox = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleOnChange,
  value,
  isTextareaDisabled,
  handleCancel,
  initialText = ""
}) => {

  const { _id } = useParams();

  const initialValue = {
    productId: _id,
    comment: ''
  };

  const dispatch = useDispatch();
  const [postComment, setPostComment] = useState(initialValue);
  //const isTextareaDisabled = postComment?.comment?.length === 0;

  /*const handleOnChange = (e) => {
    setPostComment({ ...postComment, comment: e.target.value });
  };*/

  const onSubmit = async (event) => {
    event.preventDefault();
    await dispatch(AddCommentRequest(postComment));
  };

  const enableCommentButton = () => {
    return (!postComment?.comment);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="comment-box-main">
          <TextArea
            showCount
            maxLength={200}
            className="text-area"
            value={value || initialText}
            onChange={handleOnChange}
            placeholder="Add a comment..."
          />

          <button className="comment-form-button" disabled={isTextareaDisabled}>
            {submitLabel}
          </button>
          {hasCancelButton && (
            <button
              type="button"
              className="comment-form-button comment-form-cancel-button"
              //onClick={onSubmit}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </>
  )
};

export default CommentBox;
