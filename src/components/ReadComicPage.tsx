import { Typography, Divider } from 'antd';
import React from 'react';
import ExploreSearchBar from './ExploreSearchBar';
import Comic from "../types/comicType";
import { useLocation } from 'react-router-dom';

interface myProps {
  comics: Comic[],
}

const ReadComicPage: React.FC<myProps> = (props: myProps) => {
    const location = useLocation()
    const state = location.state as {comic: Comic}
    const comic = state.comic;

    return (
        <div className="site-layout-content">
            <Typography>{comic.title}</Typography>
            <Typography>{comic.company}</Typography>
            <Typography>{comic.tldr}</Typography>
        </div>
    );
}

export default ReadComicPage;