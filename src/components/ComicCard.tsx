import { Card, Divider, List, Tag, Typography } from 'antd';
import React from 'react';
import { Col, Row } from 'antd';
import Comic from "../types/comicType";
import { useNavigate } from "react-router-dom";

interface myProps {
  comic: Comic,
}

const ComicCard: React.FC<myProps> = (props: myProps) => {
    const { comic } = props;
    const navigate = useNavigate();

    const { Title, Text } = Typography;

    const tagList = comic.tags;
    tagList.sort((a,b)=>{
        if(b > a) {
            return -1;
        }
        return 1;
    }) 

    return (
        <Card hoverable={true} onClick={()=>{navigate("/read-comic", {state: {comic: comic}})}}>
            <Title level={5}>{comic.title}</Title>
            {
                tagList.map((tag, index)=>{
                    return (
                        <Tag key={index}>{tag}</Tag>
                    )
                })
            }
            <Divider />
            <Text>TLDR^2: {comic.tldr2}</Text>
        </Card>
    );
}

export default ComicCard;