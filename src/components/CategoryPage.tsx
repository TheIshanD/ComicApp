import { Card, List, Typography } from 'antd';
import React from 'react';
import { Col, Row } from 'antd';
import Comic from "../types/comicType";
import { useNavigate } from "react-router-dom";

interface myProps {
  comics: Comic[],
  category: string,
}



const CategoryPage: React.FC<myProps> = (props: myProps) => {
  const {comics, category} = props;

  const navigate = useNavigate();

  console.log(comics)
  const ofCategory = comics.filter((comic:Comic) : boolean => {
      return comic.tags.includes(category)
  })
  console.log(ofCategory)

  return (
    <div className="site-layout-content">
      <Typography>{category}</Typography>
      <Row gutter={[0, 16]}>
          {
              ofCategory.map((comic: Comic, index: number)=>{
                    return (<Col key={index} span={24}>
                        <Card hoverable={true} onClick={()=>{navigate("/read-comic", {state: {comic: comic}})}}>
                            <Typography>{comic.title}</Typography>
                        </Card>
                    </Col>)
                  }
              )
            }
      </Row>
    </div>
  );
}

export default CategoryPage;