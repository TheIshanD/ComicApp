import { Typography, Row, Col, Card, Empty, Divider, List } from "antd";
import React from "react";
import ExploreSearchBar from "../components/ExploreSearchBar";
import Comic from "../types/comicType";
import { useLocation, useNavigate } from "react-router-dom";
import ComicCard from "../components/ComicCard";

import QueueAnim from "rc-queue-anim";
import CustomPageHeader from "../components/CustomPageHeader";
import Character from "../types/characterType";

interface myProps {
	comics: Comic[];
	characters: Character[];
}

const ExploreSuggestionsPage: React.FC<myProps> = (props: myProps) => {
	const { comics, characters } = props;

	const { Title } = Typography;

	const location = useLocation();
	const state = location.state as { value: string };
	const navigate = useNavigate();

	if (state == null) {
		navigate("/");
		return <div></div>;
	} else {
		const value = state.value;

		const optionSorter = (comics: Comic[]): Comic[] => {
			// sort by title --> alphabetical
			const lowerVal = value.toLowerCase();
			const wordsArr = lowerVal.split(" ");

			const filteredArr = comics.filter((comic) => {
				comic.ranking = 0;

				var keep = false;
				if (comic.title.toLowerCase().includes(lowerVal)) {
					keep = true;
					comic.ranking += 50;
				}

				comic.keywords.forEach((keyword) => {
					if (lowerVal.includes(keyword.toLowerCase())) {
						keep = true;
						comic.ranking += 5;
					}
				});

				comic.characters.forEach((tempChar) => {
					if (lowerVal.includes(tempChar.toLowerCase())) {
						keep = true;
						comic.ranking += 10;
					}
				});

				comic.tags.forEach((tag) => {
					// Can only work since all tags are one letter
					wordsArr.map((word) => {
						if (word === tag.toLowerCase()) {
							keep = true;
							comic.ranking += 2;
						}
					});
				});

				if (lowerVal.includes(comic.company.toLowerCase())) {
					keep = true;
					comic.ranking += 3;
				}

				comic.characters.forEach((tempChar) => {

					if(tempChar != "") {
						const char = characters.filter((char) => {
							return char.name.toLowerCase() === tempChar.toLowerCase();
						})[0];		
	
						const misspellingsArr = char.misspellings;
	
	
						misspellingsArr.forEach((misspelling) => {
							if (lowerVal.includes(misspelling)) {
								keep = true;
								comic.ranking += 3;
							}
						});
					}
				});

				return keep;
			});

			// Alphabetic Sort
			// filteredArr.sort((a, b): number => {
			// 	const aTitle = a.title;
			// 	const bTitle = b.title;

			// 	if (bTitle > aTitle) {
			// 		return -1;
			// 	}
			// 	return 1;
			// });

			//Ranking-based sort
			filteredArr.sort((a, b): number => {
				const aRanking = a.ranking;
				const bRanking = b.ranking;

				if (bRanking > aRanking) {
					return 1;
				}
				return -1;
			});

			return filteredArr;
		};

		const comicSuggestions = optionSorter(comics);

		return (
			<div>
				<CustomPageHeader titleString={"Explore All Comic Book TLDRs!"} />
				<div className="site-wrapper">
					<div className="site-layout-content transition">
						<ExploreSearchBar
							comics={comics}
							defaultVal={value}
							placeholder={"Search for A Comic Book!!!"}
						></ExploreSearchBar>

						<Divider className="largeDiv" />

						<List
							grid={{ gutter: 200, column: 4 }}
							style={
								{
									//   overflow: "auto",
									//   height: "80vh",
									//   paddingRight: "25px"
								}
							}
						>
							{comicSuggestions.length === 0 && (
								<Empty
									description={
										<Title level={1}>
											No comics found. Try seaching something else!
										</Title>
									}
								/>
							)}
							<QueueAnim duration={1500} interval={0}>
								{comicSuggestions.length > 0
									? comicSuggestions.map((comic: Comic, index: number) => {
											return (
												<List.Item key={index}>
													<ComicCard comic={comic} />
												</List.Item>
											);
									  })
									: null}
							</QueueAnim>
						</List>
					</div>
				</div>
			</div>
		);
	}
};

export default ExploreSuggestionsPage;
