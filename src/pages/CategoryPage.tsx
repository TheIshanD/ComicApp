import { Card, List, PageHeader, Typography } from "antd";
import React, { useEffect } from "react";
import { Col, Row } from "antd";
import Comic from "../types/comicType";
import { useNavigate } from "react-router-dom";
import ComicCard from "../components/ComicCard";

import QueueAnim from "rc-queue-anim";
import CustomPageHeader from "../components/CustomPageHeader";
import Category from "../types/categoryType";

interface myProps {
	comics: Comic[];
	category: Category;
}

const CategoryPage: React.FC<myProps> = (props: myProps) => {
	const { comics, category } = props;
	const { Title } = Typography;

	const navigate = useNavigate();

	const tempCategoryTitle = category.title;
	const capitalizedTitle = tempCategoryTitle
		.substring(0, 1)
		.toUpperCase()
		.concat(tempCategoryTitle.substring(1).toLowerCase());

	const ofCategory = comics.filter((comic: Comic): boolean => {
		return comic.tags.includes(capitalizedTitle);
	});

	// useEffect(() => {
	// 	if (ofCategory.length == 0) navigate(-1);
	// }, []);

	return (
		<div>
			<CustomPageHeader titleString={capitalizedTitle} />
			<div className="site-wrapper">
				<div className="site-layout-content transition">
					<List grid={{ gutter: 16, column: 4 }}>
						<QueueAnim duration={2000} interval={0}>
							{ofCategory.map((comic: Comic, index: number) => {
								return (
									<List.Item key={index}>
										<ComicCard comic={comic} />
									</List.Item>
								);
							})}
						</QueueAnim>
					</List>
				</div>
			</div>
		</div>
	);
};

export default CategoryPage;
