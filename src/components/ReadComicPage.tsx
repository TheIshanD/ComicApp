import { Typography } from 'antd';
import React, { useEffect } from 'react';
import Comic from "../types/comicType";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

interface myProps {
  comics: Comic[],
}

const ReadComicPage: React.FC<myProps> = (props: myProps) => {
    const location = useLocation()
    const state = location.state as {comic: Comic}

    const navigate = useNavigate();

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    if(state===null) {
        navigate("/")
        return <div></div>
    } else {
        const comic = state.comic;
        return (
            <div className="site-layout-content">
                <Typography>{comic.title}</Typography>
                <Typography>{comic.company}</Typography>
                <Typography>{comic.tldr}</Typography>
            </div>
        );
    }
}

export default ReadComicPage;