import { Affix, Card, Divider, List, PageHeader, Space, Tag, Typography } from 'antd';
import React from 'react';
import { Col, Row } from 'antd';
import Comic from "../types/comicType";
import { useNavigate } from "react-router-dom";

interface myProps {
  titleString: string
}

const CustomPageHeader: React.FC<myProps> = (props: myProps) => {
  const { Title } = Typography;
  const { titleString } = props;

  return (
    <Affix>
      <PageHeader
        style={{
          backgroundColor:  "#111",
          color: 'white',
        }}
        title={<Title style={{marginTop: "auto", marginBottom: "auto", color: 'white', fontFamily: "Comic Sans MS",}} level={1}>{titleString}</Title>}
      />
      </Affix>
    );
}

export default CustomPageHeader;