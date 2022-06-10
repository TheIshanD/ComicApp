import { Card, Divider, List, Typography } from 'antd';
import React from 'react';
import { Col, Row } from 'antd';
import Comic from "../types/comicType";
import { useLocation, useNavigate } from "react-router-dom";
import Character from '../types/characterType';
import ComicCard from './ComicCard';

interface myProps {
  comics: Comic[],
  company: string
}

const CharacterPage: React.FC<myProps> = (props: myProps) => {
  const {comics, company } = props;

  const { Title } = Typography;

  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { character: Character }

  if(state === null) {
      navigate("/")
      return <div></div>
  } else {
    const character = state.character;

    //@TODO: need to switch superhero to character in database
    const hasCharacter = comics.filter((comic:Comic) : boolean => {
      var works = false;
      const lowerCharName = character.name.toLowerCase();
      for (var i = 0; i < comic.characters.length; i++) {
        const testCharacter = comic.characters[i];
        if(testCharacter.toLowerCase() === lowerCharName) {
          works = true;
          break;
        }
      }
      return works;
    })

    return (
      <div className="site-layout-content">
        <Title level={1}>{character.name}</Title>
        <Title level={3}>Created by: {company}</Title>
        <Title level={4}>{character.longDesc}</Title>

        <Divider />

        <List 
          grid={{ gutter: 0, column: 16 }}
          style={{
              overflow: "auto",
              height: "80vh",
              paddingRight: "25px"
          }}
        >
            {
                hasCharacter.map((comic: Comic, index: number)=>{
                      return (<List.Item key={index}>
                          <ComicCard comic={comic} />
                      </List.Item>)
                    }
                )
              }
        </List>
      </div>
    ); 
  }
}

export default CharacterPage;