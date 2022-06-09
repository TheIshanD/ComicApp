import { Layout, Menu } from 'antd';
import React, { useState, useEffect } from 'react';
import './App.less';
import ExplorePage from './components/ExplorePage';

import { collection, getDocs } from 'firebase/firestore';
import {db} from "./firebase-config";
import comic from "./types/comicType"

import { Routes, Route, useNavigate } from "react-router-dom";
import CategoriesPage from './components/CategoriesPage';
import CategoryPage from './components/CategoryPage';
import ReadComicPage from './components/ReadComicPage';
import CompanyComicsPage from "./components/CompanyComicsPage"
import ExploreSuggestionsPage from './components/ExploreSuggestionsPage';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  //Get comics
  const [comics, setComics] = useState<comic[]>([])
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
        superheros: doc.data().superheros,
        tags: tempTagArr,
        tldr: doc.data().tldr,
        id: doc.id,
      }
    }));
  }

  useEffect(()=>{
    getComics();
  }, []) 

  const menuItems = [
    { label: 'Explore', key: 'item-1' },
    { label: 'Categories', key: 'item-2' },
    { label: 'DC', key: 'item-3' },
    { label: 'Marvel', key: 'item-4' },
  ]

  const onMenuItemClicked = (props : {item: any, key: String, keyPath: String[], domEvent: any}) => {
    const {key} = props;

    if(key === "item-1") {
      navigate("/")
    } else if(key === "item-2") {
      navigate("/categories")
    } else if(key === "item-3") {
      navigate("/DC")
    } else if(key === "item-4") {
      navigate("/Marvel")
    }
    
  }

  return (
    <Layout className="layout">
      <Header style={{
        backgroundColor: "white",
      }}>
        <div className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={menuItems}
          onClick={onMenuItemClicked}
        />
      </Header>
      <Content >
        <Routes>
          <Route path="/" element={<ExplorePage comics={comics}/>} />
          <Route path="/explore" element={<ExploreSuggestionsPage comics={comics} />}/>
          <Route path="categories" element={<CategoriesPage comics={comics} />} />
          <Route path="categories/action" element={<CategoryPage comics={comics} category={"Action/adventure"} />} />
          <Route path="categories/romance" element={<CategoryPage comics={comics} category={"Romance"} />} />
          <Route path="categories/comedy" element={<CategoryPage comics={comics} category={"Comedy"} />} />
          <Route path="read-comic" element={<ReadComicPage comics={comics} />} />
          <Route path="Marvel" element={<CompanyComicsPage comics={comics} company={"Marvel"}/>} />
          <Route path="DC" element={<CompanyComicsPage comics={comics} company={"DC"}/>} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>TLDR ©2022 Created by Ishan Dasgupta and Aaditya Ganesan</Footer>
    </Layout>
  );
}

export default App;