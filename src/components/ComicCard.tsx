import { Card, Divider, List, Space, Tag, Typography } from 'antd';
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
            <Space style={{
                display: "flex",
                justifyContent: "space-between",
            }} align="center">
                <Title style={{marginTop: "auto", marginBottom: "auto"}} level={5}>{comic.title}</Title>
                    <Space>
                        {
                            tagList.map((tag, index)=>{
                                return (
                                    <div key={index}>
                                        {tag === "Action" &&
                                            <Tag color="#f50">{tag}</Tag>
                                        }
                                        {tag === "Romance" &&
                                            <Tag color="#108ee9">{tag}</Tag>
                                        }
                                        {tag === "Comedy" &&
                                            <Tag color="#87d068">{tag}</Tag>
                                        }
                                    </div>
                                )
                            })
                        }
                    </Space>
                </Space>
            <Divider />
            <Text>TLDR^2: {comic.tldr2}</Text>
        </Card>
    );
}

export default ComicCard;