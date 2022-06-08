import { Layout, Menu } from 'antd';
import React, { useState, useEffect } from 'react';
import './App.less';
import ExplorePage from './components/ExplorePage';

import { collection, getDocs } from 'firebase/firestore';
import {db} from "./firebase-config";
import comic from "./types/comicType"

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  //Get comics
  const [comics, setComics] = useState<comic[]>([])
  const comicsCollectionRef = collection(db, "comics");

  useEffect(()=>{
    const getComics = async () => {
      const data = await getDocs(comicsCollectionRef);
      setComics(data.docs.map((doc)=> ({
        title: doc.data().title, 
        company: doc.data().company,
        superheros: doc.data().superheros,
        tags: doc.data().tags,
        tldr: doc.data().tldr,
        id: doc.id,
      })));
    }
 
    getComics();
  }, [comicsCollectionRef]) 

  const [currPage, setCurrPage] = useState(1);

  const menuItems = [
    { label: 'Explore', key: 'item-1' },
    { label: 'Genres', key: 'item-2' },
  ]

  const onMenuItemClicked = (props : {item: any, key: String, keyPath: String[], domEvent: any}) => {
    const {key} = props;

    if(key === "item-1") {
      setCurrPage(1);
    } else {
      setCurrPage(2);
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
        {currPage === 1 &&
          <ExplorePage comics={comics}></ExplorePage>
        }
        {currPage === 2 &&
          <div className="site-layout-content">Content Page 2</div>
        }
      </Content>
      <Footer style={{ textAlign: 'center' }}>TLDR ©2022 Created by Ishan Dasgupta and Aaditya Ganesan</Footer>
    </Layout>
  );
}

export default App;