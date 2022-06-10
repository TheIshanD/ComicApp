import { Card, Divider, Typography } from 'antd';
import React from 'react';
import { Col, Row } from 'antd';
import Comic from "../types/comicType";
import { useNavigate } from "react-router-dom";

import QueueAnim from 'rc-queue-anim';
import CustomPageHeader from '../components/CustomPageHeader';

interface myProps {
  comics: Comic[],
}

const CategoriesPage: React.FC<myProps> = (props: myProps) => {
  const { Title, Text } = Typography;

  const navigate = useNavigate();
  return (
    <div>
      <CustomPageHeader titleString={"Find Your Favorite Categories!"}/>
      <div className='site-wrapper'>
        <div className="site-layout-content">
          <Row justify="space-between" gutter={[16, 16]}>

            {/* KEEP IN ALPHABETICAL ORDER PLEASE */}

              <Col span={12} key={"1"}>
                <Card className="card" hoverable={true} onClick={()=>{navigate("action")}}>
                  <Title level={3}>Action</Title>
                  <Divider orientation="left" plain={true} orientationMargin={0}>
                    <Text type="secondary">Catagory TLDR</Text>
                  </Divider>
                  <Text>Juicy Stuff</Text>
                </Card>
              </Col>

              <Col span={12} key={"3"}>
                <Card className="card" hoverable={true} onClick={()=>{navigate("comedy")}}>
                  <Title level={3}>Comedy</Title>
                  <Divider orientation="left" plain={true} orientationMargin={0}>
                    <Text type="secondary">Catagory TLDR</Text>
                  </Divider>
                  <Text>Juicy Stuff</Text>
                </Card>
              </Col>

              <Col span={12} key={"2"}>
                <Card className="card" hoverable={true} onClick={()=>{navigate("romance")}}>
                  <Title level={3}>Romance</Title>
                  <Divider orientation="left" plain={true} orientationMargin={0}>
                    <Text type="secondary">Catagory TLDR</Text>
                  </Divider>
                  <Text>Juicy Stuff</Text>
                </Card>
              </Col>
            {/* </QueueAnim> */}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;