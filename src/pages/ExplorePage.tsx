import { Typography, Divider, PageHeader, List, Statistic } from "antd";
import React from "react";
import ExploreSearchBar from "../components/ExploreSearchBar";
import Comic from "../types/comicType";
import CustomPageHeader from "../components/CustomPageHeader";
import QueueAnim from "rc-queue-anim";
import ComicCard from "../components/ComicCard";

interface myProps {
	comics: Comic[];
}

const ExplorePage: React.FC<myProps> = (props: myProps) => {
	const { comics } = props;
	const { Title } = Typography;

	const numComics = comics.length;
	const indexes: number[] = [];

	while (indexes.length < 3 && comics.length >= 3) {
		const randomIndex = Math.floor(Math.random() * numComics);
		if (indexes.indexOf(randomIndex) === -1) indexes.push(randomIndex);
	}

	return (
		<div>
			<CustomPageHeader titleString={"Explore All Comic Book TLDRs!"} />
			<div className="site-wrapper">
				<div className="site-layout-content transition">
					<ExploreSearchBar
						comics={comics}
						defaultVal={""}
						placeholder={"Search for A Comic Book!!!"}
					></ExploreSearchBar>
					<Divider className="largeDiv" />
					<div className="pageTopper transition">
						<h2 className="randomComicsString">{"Random Comics:"}</h2>
						<List grid={{ gutter: 200, column: 4 }}>
							<QueueAnim duration={2000} interval={0}>
								{indexes.map((index, ind: number) => {
									return (
										<List.Item key={ind}>
											<ComicCard comic={comics[index]} />
										</List.Item>
									);
								})}
							</QueueAnim>
						</List>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExplorePage;
