import { Typography, Divider } from 'antd';
import React from 'react';
import ExploreSearchBar from './ExploreSearchBar';
import Comic from "../types/comicType";

interface myProps {
  comics: Comic[],
}

const ExplorePage: React.FC<myProps> = (props: myProps) => {
  const {comics} = props;
  const { Title } = Typography;

  return (
    <div className="site-layout-content">
      <Title level={1}>Explore All Comic Book TLDRs:</Title>

      {/* idk im questioning this divider too */}
      <Divider /> 
      
      <ExploreSearchBar comics={comics} defaultVal={""} placeholder={"Search for your Favorite Comic Book"}></ExploreSearchBar>
    </div>
  );
}

export default ExplorePage;