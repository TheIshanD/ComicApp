import { Affix, Card, Divider, List, PageHeader, Space, Tag, Typography } from 'antd';
import React from 'react';
import { Col, Row } from 'antd';
import Comic from "../types/comicType";
import { useNavigate } from "react-router-dom";

interface myProps {
  titleString: string
}

const CustomPageHeader: React.FC<myProps> = (props: myProps) => {
  const { Title, Text } = Typography;
  const { titleString } = props;

  return (
    <Affix>
      <div 
        className='header'
        >
        <h4 className='headerString' >{titleString}</h4>
      </div>
      </Affix>
    );
}

export default CustomPageHeader;