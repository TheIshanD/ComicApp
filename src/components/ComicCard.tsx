import { Card, List, Typography } from 'antd';
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
    
    return (
        <Card hoverable={true} onClick={()=>{navigate("/read-comic", {state: {comic: comic}})}}>
            <Typography>{comic.title}</Typography>
            {
                comic.tags.map((tag, index)=>{
                    return (
                        <Typography key={index}>{tag}</Typography>
                    )
                })
            }
            <Typography>2x tldr goes here</Typography>
        </Card>
    );
}

export default ComicCard;