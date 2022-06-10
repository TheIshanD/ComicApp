import { Typography, Row, Col, Card, Empty, Divider, List } from 'antd';
import React from 'react';
import ExploreSearchBar from './ExploreSearchBar';
import Comic from "../types/comicType";
import { useLocation, useNavigate } from 'react-router-dom';
import ComicCard from './ComicCard';

interface myProps {
  comics: Comic[],
}

const ExploreSuggestionsPage: React.FC<myProps> = (props: myProps) => {
  const {comics} = props;

  const { Title } = Typography;

  const location = useLocation()
  const state = location.state as {value: string}
  const navigate = useNavigate();
  
  if(state==null) {
      navigate("/")
      return <div></div>
  } else {
    const value = state.value;

    const optionSorter = (comics: Comic[]) : Comic[] => {
        // sort by title --> alphabetical
        const lowerVal  = value.toLowerCase();
        const filteredArr = comics.filter((comic)=>{
            var keep = false;
            if(comic.title.toLowerCase().includes(lowerVal)) {
                keep = true;
            }
  
            comic.keywords.forEach((keyword)=>{
                if(lowerVal.includes(keyword.toLowerCase())){
                    keep = true
                }
            })
  
            return keep;
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
          <Title level={1}>Explore All Comic Book TLDRs:</Title>
  
          {/* idk im questioning this divider too */}
          <Divider /> 
          
          <ExploreSearchBar comics={comics} defaultVal={value} placeholder={"Search for your Favorite Comic Book"}></ExploreSearchBar>
  
          <Divider />
  
          <List grid={{ gutter: 16, column: 4 }} style={{
              overflow: "auto",
              height: "80vh",
              paddingRight: "25px"
          }}>
              {comicSuggestions.length > 0 &&
                  comicSuggestions.map((comic: Comic, index: number)=>{
                      return (<List.Item key={index}>
                          <ComicCard comic={comic} />
                      </List.Item>)
                  })
              }
              {comicSuggestions.length === 0 &&
                  <Empty 
                      description={
                          <Title level={1}>No comics found. Try seaching something else!</Title>
                      }
                  />
              }
          </List>
      </div>
    );
  }

}

export default ExploreSuggestionsPage;