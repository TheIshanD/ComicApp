import { Card, List, Typography } from 'antd';
import React from 'react';
import { Col, Row } from 'antd';
import Comic from "../types/comicType";
import { useLocation, useNavigate } from "react-router-dom";
import Character from '../types/characterType';

interface myProps {
  comics: Comic[],
  company: string
}

const CharacterPage: React.FC<myProps> = (props: myProps) => {
  const {comics, company } = props;

  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state as { character: Character }
  const character = state.character;

  //@TODO: need to switch superhero to character in database
  const hasCharacter = comics.filter((comic:Comic) : boolean => {
    var works = false;
    const lowerCharName = character.name.toLowerCase();
    console.log(comic)
    console.log(comic.superheros)
    for (var i = 0; i < comic.superheros.length; i++) {
      const testCharacter = comic.superheros[i];
      if(testCharacter.toLowerCase() === lowerCharName) {
        works = true;
        break;
      }
    }
    return works;
  })

  return (
    <div className="site-layout-content">
      <Typography>{character.name}</Typography>
      <Typography>Made by: {company}</Typography>
      <Typography>{character.longDesc}</Typography>
      <Row gutter={[0, 16]}>
          {
              hasCharacter.map((comic: Comic, index: number)=>{
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

export default CharacterPage;