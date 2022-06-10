import { Typography, Divider } from 'antd';
import React from 'react';
import ExploreSearchBar from './ExploreSearchBar';
import Comic from "../types/comicType";

interface myProps {
  comics: Comic[],
}

const NotFound: React.FC<myProps> = (props: myProps) => {
  const {comics} = props;

  return (
    <div className="site-layout-content">
        <Typography>404 Page Not Found</Typography>
        <ExploreSearchBar comics={comics} defaultVal={""} placeholder={"Search for your Favorite Comic Book"}></ExploreSearchBar>
    </div>
  );
}

export default NotFound;