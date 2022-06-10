import { Card, Divider, List, Typography } from 'antd';
import React from 'react';
import { Col, Row } from 'antd';
import Comic from "../types/comicType";
import { useNavigate } from "react-router-dom";
import Character from '../types/characterType';

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
    <div className="site-layout-content">
      <Title level={1}>{company}</Title>
      <Divider />
      <Row gutter={[8, 16]}>
          {
              ofCompany.map((character: Character, index: number)=>{
                    return (<Col key={index} span={12}>
                        <Card hoverable={true} onClick={()=>{navigate("character-info", {state: {character: character}})}}>
                        <Title level={4}>{character.name}</Title>
                        <Divider />
                        <Text>{character.smallDesc}</Text>
                        </Card>
                    </Col>)
                  }
              )
            }
      </Row>
    </div>
  );
}

export default CompanyCharacterPage;