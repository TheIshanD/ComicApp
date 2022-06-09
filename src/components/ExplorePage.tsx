import { Typography, Divider } from 'antd';
import React from 'react';
import ExploreSearchBar from './ExploreSearchBar';
import Comic from "../types/comicType";

interface myProps {
  comics: Comic[],
}

const ExplorePage: React.FC<myProps> = (props: myProps) => {
  const {comics} = props;

  return (
    <div className="site-layout-content">
      <Typography>Explore Any and All Comic Book TLDRs</Typography>
      <ExploreSearchBar comics={comics} defaultVal={""}></ExploreSearchBar>
    </div>
  );
}

export default ExplorePage;