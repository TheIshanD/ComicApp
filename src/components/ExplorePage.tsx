import React, { useState } from 'react';
import ExploreSearchBar from './ExploreSearchBar';

const ExplorePage: React.FC = () => {

  return (
    <div className="site-layout-content">
      <p>Explore Any and All Comic Book TLDRs</p>
      <ExploreSearchBar></ExploreSearchBar>
    </div>
  );
}

export default ExplorePage;