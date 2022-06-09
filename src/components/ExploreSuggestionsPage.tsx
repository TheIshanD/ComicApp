import { Typography, Row, Col, Card, Empty } from 'antd';
import React from 'react';
import ExploreSearchBar from './ExploreSearchBar';
import Comic from "../types/comicType";
import { useLocation, useNavigate } from 'react-router-dom';

interface myProps {
  comics: Comic[],
}

const ExploreSuggestionsPage: React.FC<myProps> = (props: myProps) => {
  const {comics} = props;

  const location = useLocation()
  const state = location.state as {value: string}
  const value = state.value;

  const navigate = useNavigate();

  const optionSorter = (comics: Comic[]) : Comic[] => {
      // sort by title --> alphabetical
      const lowerVal  = value.toLowerCase();
      const filteredArr = comics.filter((comic)=>{
          if(comic.title.toLowerCase().includes(lowerVal)) {
              return true;
          }
          return false;
      })
      filteredArr.sort((a, b) : number =>{
          const aTitle = a.title;
          const bTitle = b.title;

          if(bTitle > aTitle) {
              return -1;
          }
          return 1;
      })
      return (filteredArr);
  }

  const comicSuggestions = optionSorter(comics);

  return (
    <div className="site-layout-content">
        <Typography>Explore Any and All Comic Book TLDRs</Typography>
        <ExploreSearchBar comics={comics} defaultVal={value} ></ExploreSearchBar>
        <div className="site-layout-content">
            <Row gutter={[0, 16]}>
                {comicSuggestions.length > 0 &&
                    comicSuggestions.map((comic: Comic, index: number)=>{
                        return (<Col key={index} span={24}>
                            <Card hoverable={true} onClick={()=>{navigate("/read-comic", {state: {comic: comic}})}}>
                                <Typography>{comic.title}</Typography>
                            </Card>
                        </Col>)
                    })
                }
                {comicSuggestions.length === 0 &&
                    <Empty 
                        description={
                            <Typography>No such comics found. Try seaching something else!</Typography>
                        }
                    />
                }
            </Row>
        </div>
    </div>
  );
}

export default ExploreSuggestionsPage;