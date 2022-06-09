import { Typography, Divider } from 'antd';
import React from 'react';
import ExploreSearchBar from './ExploreSearchBar';
import comic from "../types/comicType";
import { useLocation } from 'react-router-dom';

interface myProps {
  comics: comic[],
}

const ExploreSuggestionsPage: React.FC<myProps> = (props: myProps) => {
  const {comics} = props;

  const location = useLocation()
  const state = location.state as {value: string}
  const value = state.value;

  return (
    <div className="site-layout-content">
      <Typography>Explore Any and All Comic Book TLDRs</Typography>
      <ExploreSearchBar comics={comics} defaultVal={value} ></ExploreSearchBar>
      <Typography>RES 1</Typography>
      <Typography>RES 2</Typography>
      <Typography>RES 3</Typography>
    </div>
  );
}

export default ExploreSuggestionsPage;