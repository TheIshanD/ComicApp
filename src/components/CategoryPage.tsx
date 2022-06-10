import { Card, List, PageHeader, Typography } from 'antd';
import React from 'react';
import { Col, Row } from 'antd';
import Comic from "../types/comicType";
import { useNavigate } from "react-router-dom";
import ComicCard from './ComicCard';

import QueueAnim from 'rc-queue-anim';
import CustomPageHeader from './CustomPageHeader';

interface myProps {
  comics: Comic[],
  category: string,
}

const CategoryPage: React.FC<myProps> = (props: myProps) => {
  const {comics, category} = props;

  const { Title } = Typography;

  const navigate = useNavigate();

  const ofCategory = comics.filter((comic:Comic) : boolean => {
      return comic.tags.includes(category)
  })

  return (
    <div>
      <CustomPageHeader titleString={category} />
    <div className="site-layout-content">
      <List grid={{ gutter: 16, column: 4 }}>
        <QueueAnim>
          {
              ofCategory.map((comic: Comic, index: number)=>{
                    return (<List.Item key={index}>
                        <ComicCard comic={comic} />
                    </List.Item>)
                  }
              )
            }
          </QueueAnim>
      </List>
    </div>
    </div>
  );
}

export default CategoryPage;