import { Card, Typography } from 'antd';
import React from 'react';
import { Col, Row } from 'antd';
import Comic from "../types/comicType";
import { useNavigate } from "react-router-dom";

interface myProps {
  comics: Comic[],
}

const CategoriesPage: React.FC<myProps> = (props: myProps) => {
  const {comics} = props;
  const navigate = useNavigate();
  return (
    <div className="site-layout-content">
      <Typography>Find Your Favorite Categories!</Typography>
      <Row justify="space-between" gutter={[8, 16]}>
        <Col span={12}>
          <Card title="Action/Adventure" hoverable={true} onClick={()=>{navigate("action")}}>
            <p>Juicy Stuff</p>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Romance" hoverable={true} onClick={()=>{navigate("romance")}}>
            <p>Juicy Stuff</p>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Comedy" hoverable={true} onClick={()=>{navigate("comedy")}}>
            <p>Juicy Stuff</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CategoriesPage;