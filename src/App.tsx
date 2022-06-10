import { Image, Layout, Menu } from 'antd';
import React, { useState, useEffect } from 'react';
import './App.less';
import ExplorePage from './pages/ExplorePage';

import { collection, getDocs } from 'firebase/firestore';
import {db} from "./firebase-config";
import Comic from "./types/comicType"

import { Routes, Route, useNavigate, Navigate, Link } from "react-router-dom";
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';
import ReadComicPage from './pages/ReadComicPage';
import CompanyComicsPage from "./pages/CompanyCharactersPage"
import ExploreSuggestionsPage from './pages/ExploreSuggestionsPage';
import Character from './types/characterType';
import CharacterPage from './pages/CharacterPage';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const [currMenuKeys, setCurrMenuKeys] = useState<string[]>([""]);

  const [comics, setComics] = useState<Comic[]>([])
  const comicsCollectionRef = collection(db, "comics");

  const navigate = useNavigate();

  const getComics = async () => {
    const data = await getDocs(comicsCollectionRef);
    setComics(data.docs.map((doc)=> {
      const tempTagArr = doc.data().tags.map((tag: string) : string =>{
        return (tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase())
      })
      return {
        title: doc.data().title, 
        company: doc.data().company,
        characters: doc.data().characters,
        tags: tempTagArr,
        tldr: doc.data().tldr,
        tldr2: doc.data().tldr2,
        keywords: doc.data().keywords,
        id: doc.id,
      }
    }));
  }

  const [characters, setCharacters] = useState<Character[]>([])
  const characterCollectionRef = collection(db, "characters");


  const getCharacters = async () => {
    const data = await getDocs(characterCollectionRef);
    setCharacters(data.docs.map((doc)=> {
      return {
        company: doc.data().company,
        name: doc.data().name,
        longDesc: doc.data().longDesc,
        smallDesc: doc.data().smallDesc,
        id: doc.id,
      }
    }));
  }

  useEffect(()=>{
    getComics();
    getCharacters();
  }, []) 

  const menuItems = [
    { label: 'Explore', key: 'explore' },
    { label: 'Catagories', key: 'catagories' },
    { label: 'DC', key: 'dc' },
    { label: 'Marvel', key: 'marvel' },
  ]

  const onMenuItemClicked = (props : {item: any, key: String, keyPath: String[], domEvent: any}) => {
    const {key} = props;

    if(key === "explore") {
      navigate("/")
      setCurrMenuKeys(["explore"])
    } else if(key === "catagories") {
      navigate("/catagories")
      setCurrMenuKeys(["catagories"])
    } else if(key === "dc") {
      navigate("/DC")
      setCurrMenuKeys(["dc"])
    } else if(key === "marvel") {
      navigate("/Marvel")
      setCurrMenuKeys(["marvel"])
    }
    
  }

  return (
    <Layout className="layout">
      <Header style={{
        backgroundColor: "black",
      }}>

        <Link to="/" onClick={()=>{setCurrMenuKeys(["explore"])}}>
          <img
            className='logo'
            src="/logo.png"
            height="64"
            />
        </Link>
        <Menu
          style={{backgroundColor: "black", border: "5px", fontWeight: "bold", fontStyle: "Comic Sans MS"}}
          theme="dark"
          mode="horizontal"
          selectedKeys={currMenuKeys}
          items={menuItems}
          onClick={onMenuItemClicked}
        />
      </Header>

      <Content >
        <Routes>
          <Route path="/" element={<ExplorePage comics={comics}/>} />
          <Route path="/explore" element={<ExploreSuggestionsPage comics={comics} />}/>
          <Route path="catagories" element={<CategoriesPage comics={comics} />} />
          <Route path="catagories/action" element={<CategoryPage comics={comics} category={"Action"} />} />
          <Route path="catagories/romance" element={<CategoryPage comics={comics} category={"Romance"} />} />
          <Route path="catagories/comedy" element={<CategoryPage comics={comics} category={"Comedy"} />} />
          <Route path="read-comic" element={<ReadComicPage comics={comics} />} />
          <Route path="Marvel" element={<CompanyComicsPage comics={comics} company={"Marvel"} characters={characters}/>} />
          <Route path="DC" element={<CompanyComicsPage comics={comics} company={"DC"} characters={characters}/>} />
          <Route path="Marvel/character-info" element={<CharacterPage comics={comics} company={"Marvel"}/>} />
          <Route path="DC/character-info" element={<CharacterPage comics={comics} company={"DC"}/>} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </Content>
      <Footer className='footer'>TLDR© Copyright 2022 Founded by Ishan Dasgupta and Aaditya Ganesan</Footer>
    </Layout>
  );
}

export default App;