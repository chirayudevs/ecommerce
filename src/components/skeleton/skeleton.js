import React from 'react';
import { Card, Skeleton, Avatar } from 'antd';

const { Meta } = Card;


const SkeletonLoader = () => {
  return (
    <>
      <Skeleton avatar active>
        <Meta
          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
          title="Card title"
          description="This is the description"
        />
      </Skeleton>
    </>
  )
};

export default SkeletonLoader;
