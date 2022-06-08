import { Typography, Divider } from 'antd';
import React from 'react';
import ExploreSearchBar from './ExploreSearchBar';
import comic from "../types/comicType";

interface myProps {
  comics: comic[],
}

const ExplorePage: React.FC<myProps> = (props: myProps) => {
  const {comics} = props;

  return (
    <div className="site-layout-content">
      <Typography>Explore Any and All Comic Book TLDRs</Typography>
      <ExploreSearchBar comics={comics}></ExploreSearchBar>
      {
        comics.map((comic: any, key: number)=>{
          return(<div key={comic.title}>
            <Typography>Title: {comic.title}</Typography>
            <Typography>Company: {comic.company}</Typography>
            <Typography>TLDR: {comic.tldr}</Typography>
            <Divider />
          </div>)
        })
      }
    </div>
  );
}

export default ExplorePage;