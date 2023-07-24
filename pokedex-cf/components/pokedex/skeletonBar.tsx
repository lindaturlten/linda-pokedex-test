import React from 'react';
import {
  Card,
  Avatar,
  Skeleton,
  Space,
} from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';

const SkeletonComponent: React.FC = () => {
  return (
    <Space size={[8, 16]} wrap>
    <Card 
      size="small"
      style={{width: "400px"}}
    >
      <Skeleton />
    </Card>
    <Card 
      size="small"
      style={{width: "400px"}}
    >
      <Skeleton />
    </Card>
    <Card 
      size="small"
      style={{width: "400px"}}
    >
      <Skeleton />
    </Card>
    <Card 
      size="small"
      style={{width: "400px"}}
    >
      <Skeleton />
    </Card>
    <Card 
      size="small"
      style={{width: "400px"}}
    >
      <Skeleton />
    </Card>
  </Space>
  );
};

export default SkeletonComponent;