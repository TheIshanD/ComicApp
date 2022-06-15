import { Card, Divider, List, Typography } from "antd";
import React, { useEffect } from "react";
import { Col, Row } from "antd";
import Comic from "../types/comicType";
import { useLocation, useNavigate } from "react-router-dom";
import Character from "../types/characterType";
import ComicCard from "../components/ComicCard";

import QueueAnim from "rc-queue-anim";
import CustomPageHeader from "../components/CustomPageHeader";

interface myProps {
	comics: Comic[];
	company: string;
	character: Character;
}

const CharacterPage: React.FC<myProps> = (props: myProps) => {
	const { comics, company, character } = props;

	const { Title } = Typography;

	const navigate = useNavigate();

	const hasCharacter = comics.filter((comic: Comic): boolean => {
		var works = false;
		const lowerCharName = character.name.toLowerCase();
		for (var i = 0; i < comic.characters.length; i++) {
			const testCharacter = comic.characters[i];
			if (testCharacter.toLowerCase() === lowerCharName) {
				works = true;
				break;
			}
		}
		return works;
	});

	useEffect(() => {
		if (hasCharacter.length == 0) navigate(-1);
	}, []);

	return (
		<div>
			<CustomPageHeader titleString={character.name} />
			<div className="site-wrapper">
				<div className="pageTopper charDesc transition">
					<h4 className="characterLongDescString">{character.longDesc}</h4>
				</div>
				<div className="site-layout-content transition">
					<div className="pageTopper exploreSub transition">
						<h2 className="randomComicsString">{"Start with this!"}</h2>
						<List grid={{ gutter: 200, column: 4 }}>
							<QueueAnim duration={1500}>
								<List.Item key={0}>
									{comics.length > 0 && (
										<ComicCard comic={comics[character.starterInt - 1]} />
									)}
								</List.Item>
							</QueueAnim>
						</List>
					</div>
					<List
						grid={{ gutter: 0, column: 16 }}
						style={
							{
								// overflow: "auto",
								// height: "80vh",
							}
						}
					>
						<QueueAnim duration={1500}>
							{hasCharacter.map((comic: Comic, index: number) => {
								if (comic.id == character.starterInt) return null;
								else {
									return (
										<List.Item key={index}>
											<ComicCard comic={comic} />
										</List.Item>
									);
								}
							})}
						</QueueAnim>
					</List>
				</div>
			</div>
		</div>
	);
};

export default CharacterPage;
