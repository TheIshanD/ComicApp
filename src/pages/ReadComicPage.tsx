import { Typography } from 'antd';
import React, { useEffect } from 'react';
import Comic from "../types/comicType";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import CustomPageHeader from '../components/CustomPageHeader';

interface myProps {
  comics: Comic[],
}

const ReadComicPage: React.FC<myProps> = (props: myProps) => {
    const location = useLocation()
    const state = location.state as {comic: Comic}
    const {Text, Title} = Typography

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
            <div>
                <CustomPageHeader titleString={"TLDR: ".concat(comic.title)} />
                <div className='site-wrapper'>
                    <div className="site-layout-content transition">
                        <Title level={3}>{comic.tldr}</Title>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReadComicPage;