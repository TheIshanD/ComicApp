import { Image, Layout, Menu } from "antd";
import React, { useState, useEffect } from "react";
import "./App.css";
import ExplorePage from "./pages/ExplorePage";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import Comic from "./types/comicType";

import { Routes, Route, useNavigate, Navigate, Link } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import ReadComicPage from "./pages/ReadComicPage";
import CompanyComicsPage from "./pages/CompanyCharactersPage";
import ExploreSuggestionsPage from "./pages/ExploreSuggestionsPage";
import Character from "./types/characterType";
import CharacterPage from "./pages/CharacterPage";
import Category from "./types/categoryType";
import TheMission from "./pages/TheMissionPage";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
	const [currMenuKeys, setCurrMenuKeys] = useState<string[]>([""]);

	const [comics, setComics] = useState<Comic[]>([]);
	const comicsCollectionRef = collection(db, "comics");

	const navigate = useNavigate();

	const getComics = async () => {
		const data = await getDocs(comicsCollectionRef);
		setComics(
			data.docs.map((doc) => {
				const tempTagArr = doc.data().tags.map((tag: string): string => {
					return tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase();
				});
				return {
					title: doc.data().title,
					company: doc.data().company,
					characters: doc.data().characters,
					tags: tempTagArr,
					tldr: doc.data().tldr,
					tldr2: doc.data().tldr2,
					keywords: doc.data().keywords,
					id: doc.data().id,
					ranking: 0,
				};
			})
		);
	};

	const [characters, setCharacters] = useState<Character[]>([]);
	const characterCollectionRef = collection(db, "characters");

	const getCharacters = async () => {
		const data = await getDocs(characterCollectionRef);
		setCharacters(
			data.docs.map((doc) => {
				return {
					company: doc.data().company,
					name: doc.data().name,
					longDesc: doc.data().longDesc,
					smallDesc: doc.data().smallDesc,
					id: doc.id,
					starterInt: doc.data().starterInt,
				};
			})
		);
	};

	const [categories, setCategories] = useState<Category[]>([]);
	const categoryCollectionRef = collection(db, "categories");

	const getCategories = async () => {
		const data = await getDocs(categoryCollectionRef);
		const tempCategories = data.docs.map((doc) => {
			return {
				title: doc.data().title,
				description: doc.data().description,
				id: doc.id,
			};
		});

		tempCategories.sort((a, b) => {
			if (b.title > a.title) return -1;
			return 1;
		});

		setCategories(tempCategories);
	};

	useEffect(() => {
		getComics();
		getCharacters();
		getCategories();
	}, []);

	// useEffect(() => {
	// 	console.log(comics);
	// }, [comics]);

	const menuItems = [
		{ label: "Explore", key: "explore" },
		{ label: "Categories", key: "categories" },
		{ label: "DC", key: "dc" },
		{ label: "Marvel", key: "marvel" },
		{ label: "The Mission", key: "the mission" },
	];

	const onMenuItemClicked = (props: {
		item: any;
		key: String;
		keyPath: String[];
		domEvent: any;
	}) => {
		const { key } = props;

		if (key === "explore") {
			navigate("/");
			setCurrMenuKeys(["explore"]);
		} else if (key === "categories") {
			navigate("/categories");
			setCurrMenuKeys(["categories"]);
		} else if (key === "dc") {
			navigate("/dc");
			setCurrMenuKeys(["dc"]);
		} else if (key === "marvel") {
			navigate("/marvel");
			setCurrMenuKeys(["marvel"]);
		} else if (key === "the mission") {
			navigate("/the-mission");
			setCurrMenuKeys(["the mission"]);
		}
	};

	const theMissionText =
		document.querySelector(".ant-menu")?.lastElementChild
			?.previousElementSibling?.firstElementChild;
	theMissionText?.classList.add("specialMenuText");

	return (
		<Layout className="layout app">
			<Header
				style={{
					backgroundColor: "black",
				}}
			>
				<Link
					to="/"
					onClick={() => {
						setCurrMenuKeys(["explore"]);
					}}
				>
					<img className="logo" src="/logo.png" height="64" />
				</Link>
				<Menu
					style={{
						backgroundColor: "black",
						border: "5px",
						fontWeight: "bold",
					}}
					className={"menu"}
					theme="dark"
					mode="horizontal"
					selectedKeys={currMenuKeys}
					items={menuItems}
					onClick={onMenuItemClicked}
				/>
			</Header>

			<Content>
				<Routes>
					<Route path="/" element={<ExplorePage comics={comics} />} />
					<Route
						path="/explore"
						element={<ExploreSuggestionsPage comics={comics} />}
					/>
					<Route
						path="categories"
						element={<CategoriesPage comics={comics} categories={categories} />}
					/>
					{categories.map((category, index) => {
						return (
							<Route
								key={index}
								path={"/categories/".concat(
									category.title.toString().toLowerCase().replaceAll(" ", "-")
								)}
								element={<CategoryPage comics={comics} category={category} />}
							/>
						);
					})}
					{comics.map((comic, index) => {
						return (
							<Route
								key={index}
								path={"/".concat(
									comic.title.toString().toLowerCase().replaceAll(" ", "-")
								)}
								element={<ReadComicPage comic={comic} />}
							/>
						);
					})}
					<Route
						path="marvel"
						element={
							<CompanyComicsPage
								comics={comics}
								company={"Marvel"}
								characters={characters}
							/>
						}
					/>
					<Route
						path="dc"
						element={
							<CompanyComicsPage
								comics={comics}
								company={"DC"}
								characters={characters}
							/>
						}
					/>
					{characters.map((character, index) => {
						return (
							<Route
								key={index}
								path={character.company
									.concat("/")
									.concat(
										character.name.toString().toLowerCase().replaceAll(" ", "-")
									)}
								element={
									<CharacterPage
										character={character}
										comics={comics}
										company={character.company}
									/>
								}
							/>
						);
					})}
					<Route path="/the-mission" element={<TheMission />} />
					{/* <Route path="*" element={<Navigate to="/" replace />} /> */}
				</Routes>
			</Content>
			<Footer className="footer">
				TLDR Founded by Ishan Dasgupta and Aaditya Ganesan
			</Footer>
		</Layout>
	);
};

export default App;
