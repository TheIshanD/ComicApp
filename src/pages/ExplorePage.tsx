import { Typography, Divider, PageHeader } from 'antd';
import React from 'react';
import ExploreSearchBar from '../components/ExploreSearchBar';
import Comic from "../types/comicType";
import CustomPageHeader from '../components/CustomPageHeader';

interface myProps {
  comics: Comic[],
}

const ExplorePage: React.FC<myProps> = (props: myProps) => {
  const {comics} = props;
  const { Title } = Typography;

  return (
    <div>
        <CustomPageHeader titleString={"Explore All Comic Book TLDRs!"}/>
        <div className='site-wrapper'>
          <div className="site-layout-content">


          <ExploreSearchBar comics={comics} defaultVal={""} placeholder={"Search for your Favorite Comic Book"}></ExploreSearchBar>

          <Divider />
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;