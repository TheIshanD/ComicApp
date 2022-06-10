import { Card, Divider, List, Typography } from 'antd';
import React from 'react';
import { Col, Row } from 'antd';
import Comic from "../types/comicType";
import { useNavigate } from "react-router-dom";
import Character from '../types/characterType';
import CustomPageHeader from '../components/CustomPageHeader';

interface myProps {
  comics: Comic[],
  company: string,
  characters: Character[]
}

const CompanyCharacterPage: React.FC<myProps> = (props: myProps) => {
  const {comics, company, characters} = props;

  const { Title, Text } = Typography;

  const navigate = useNavigate();

  const ofCompany = characters.filter((character:Character) : boolean => {
          return character.company.toLowerCase() === company.toLowerCase()
  })

  ofCompany.sort((a, b) => {
    if(b.name > a.name) {
      return -1;
    }
    return 1;
  })

  return (
    <div>
      <CustomPageHeader titleString={company}/>
      <div className='site-wrapper'>
        <div className="site-layout-content">
          <Row gutter={[16, 16]}>
              {
                  ofCompany.map((character: Character, index: number)=>{
                        return (<Col key={index} span={12}>
                            <Card className="card" hoverable={true} onClick={()=>{navigate("character-info", {state: {character: character}})}}>
                              <Title level={3}>{character.name}</Title>
                              <Divider orientation="left" plain={true} orientationMargin={0}>
                                <Text type="secondary">Persona</Text>
                              </Divider>
                              <Text>{character.smallDesc}</Text>
                            </Card>
                        </Col>)
                      }
                  )
                }
          </Row>
        </div>
      </div>
    </div>
  );
}

export default CompanyCharacterPage;