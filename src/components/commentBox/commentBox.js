import React, { useState } from 'react';
import { Input } from 'antd';
import SendOutlined from '@ant-design/icons/lib/icons/SendOutlined';
import './commentBox.scss'

const {TextArea} = Input;

const CommentBox = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = ""
}) => {

  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  const enableCommentButton = () => {
    return (!text);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="comment-box-main">
          <TextArea
            showCount
            maxLength={200}
            className="text-area"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a comment..."
          />

          <button className="comment-form-button" disabled={isTextareaDisabled}>
            {submitLabel}
          </button>
          {hasCancelButton && (
            <button
              type="button"
              className="comment-form-button comment-form-cancel-button"
              onClick={onSubmit}
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
