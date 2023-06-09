import React from 'react';
import {Alert, message, Space} from 'antd';

export const ValidationError = () => {
  return (
    <Space direction="vertical">
      <Alert message="Add username" type="error" showIcon />
    </Space>
  )
}

export const error = (content) => {
  const [messageApi, contextHolder] = message.useMessage();

  messageApi.open({
    type: 'error',
    content: {content},
  });
};
