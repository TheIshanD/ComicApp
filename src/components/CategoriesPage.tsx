import { Card, Divider, Typography } from 'antd';
import React from 'react';
import { Col, Row } from 'antd';
import Comic from "../types/comicType";
import { useNavigate } from "react-router-dom";

interface myProps {
  comics: Comic[],
}

const CategoriesPage: React.FC<myProps> = (props: myProps) => {
  const { Title, Text } = Typography;

  const navigate = useNavigate();
  return (
    <div className="site-layout-content">
      <Title level={1}>Find Your Favorite Categories!</Title>
      <Divider />
      <Row justify="space-between" gutter={[8, 16]}>
        <Col span={12}>
          <Card hoverable={true} onClick={()=>{navigate("action")}}>
            <Title level={4}>Action</Title>
            <Divider />
            <Text>Juicy Stuff</Text>
          </Card>
        </Col>

        <Col span={12}>
          <Card hoverable={true} onClick={()=>{navigate("romance")}}>
            <Title level={4}>Romance</Title>
            <Divider />
            <Text>Juicy Stuff</Text>
          </Card>
        </Col>

        <Col span={12}>
          <Card hoverable={true} onClick={()=>{navigate("comedy")}}>
            <Title level={4}>Comedy</Title>
            <Divider />
            <Text>Juicy Stuff</Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CategoriesPage;