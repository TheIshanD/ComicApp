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
        <Card className="card" hoverable={true} onClick={()=>{navigate("/read-comic", {state: {comic: comic}})}}>
            <Space style={{
                display: "flex",
                justifyContent: "space-between",
            }} align="center">
                <Title style={{marginTop: "auto", marginBottom: "auto"}} level={4}>{comic.title}</Title>
                    <Space>
                        {
                            tagList.map((tag, index)=>{
                                return (
                                    <div key={index}> 
                                        {tag === "Action" &&
                                            <Tag className="tag" color="#f50">{tag}</Tag>
                                        }
                                        {tag === "Comedy" &&
                                            <Tag className="tag" color="#87d068">{tag}</Tag>
                                        }
                                        {tag === "Romance" &&
                                            <Tag className="tag" color="#108ee9">{tag}</Tag>
                                        }
                                    </div>
                                )
                            })
                        }
                    </Space>
                </Space>
            <Divider orientation="left" plain={true} orientationMargin={0}>
                <Text type="secondary">TLDR^2</Text>
            </Divider>
            <Text>{comic.tldr2}</Text>
        </Card>
    );
}

export default ComicCard;