import { Card, List, Tag, Typography } from 'antd';
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

    const tagList = comic.tags;
    tagList.sort((a,b)=>{
        if(b > a) {
            return -1;
        }
        return 1;
    }) 

    return (
        <Card hoverable={true} onClick={()=>{navigate("/read-comic", {state: {comic: comic}})}}>
            <Typography>{comic.title}</Typography>
            {
                tagList.map((tag, index)=>{
                    return (
                        <Tag key={index}>{tag}</Tag>
                    )
                })
            }
            <Typography>TLDR^2: {comic.tldr2}</Typography>
        </Card>
    );
}

export default ComicCard;