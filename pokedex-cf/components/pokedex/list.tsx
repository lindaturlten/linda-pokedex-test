import React from 'react';
import {
  Row,
  Col,
  Space,
  Card,
} from 'antd';
import {IPokedexList} from './pokedex.types';
import SkeletonComponent from '../pokedex/skeletonBar';

const PokedexContentComponent: React.FC<IPokedexList> = ({
    data,
    loading,
}) => {
  const textTitle = (data: string | any) => {
    return (
      <span className="text-color-red">{data || "-"}</span>
    )
  };

  const findID = (data: string | any) => {
    const url = data;
    const n = url.split('/');
    const result = n[6];
    return (
      <span>{result || "-"}</span>
    )
  };
  const onSubmit = () => {
    console.log('sukses klik');
  };

  return (
    <Row justify="center" align="middle" className="margin20">
        <Col span={24}>
            <Space size={[8, 16]} wrap>
              {loading ? 
                <SkeletonComponent /> : 
                data?.results?.map((item: any) => (
                    <Card 
                      key={item?.name}
                      style={{width: "200px"}}
                      onClick={() => onSubmit()}
                      hoverable
                    >
                      <div>{findID(item?.url)}</div>
                      <div>{textTitle(item?.name)}</div>
                    </Card>
                  ))
              }
            </Space>
        </Col>
    </Row>
  );
};

export default PokedexContentComponent;