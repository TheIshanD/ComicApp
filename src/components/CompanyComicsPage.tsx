import { Card, List, Typography } from 'antd';
import React from 'react';
import { Col, Row } from 'antd';
import comic from "../types/comicType";
import { useNavigate } from "react-router-dom";

interface myProps {
  comics: comic[],
  company: string,
}

const CompanyComicsPage: React.FC<myProps> = (props: myProps) => {
  const {comics, company} = props;

  const navigate = useNavigate();

  const ofCompany = comics.filter((comic:comic) : boolean => {
      return comic.company === company
  })

  return (
    <div className="site-layout-content">
      <Typography>{company}</Typography>
      <Row gutter={[0, 16]}>
          {
              ofCompany.map((comic: comic, index: number)=>{
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

export default CompanyComicsPage;