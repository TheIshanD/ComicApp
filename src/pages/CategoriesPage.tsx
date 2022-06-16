import { Card, Divider, Typography } from "antd";
import React from "react";
import { Col, Row } from "antd";
import Comic from "../types/comicType";
import { useNavigate } from "react-router-dom";

import QueueAnim from "rc-queue-anim";
import CustomPageHeader from "../components/CustomPageHeader";
import Category from "../types/categoryType";

interface myProps {
	comics: Comic[];
	categories: Category[];
}

const CategoriesPage: React.FC<myProps> = (props: myProps) => {
	const { Title, Text } = Typography;

	const { categories } = props;

	const navigate = useNavigate();
	return (
		<div>
			<CustomPageHeader titleString={"Find Your Favorite Categories!"} />
			<div className="site-wrapper">
				<div className="site-layout-content transition">
					<Row justify="space-between" gutter={[16, 16]}>
						{categories.map((category, index) => {
							const loc = category.title.toLowerCase();
							return (
								<Col span={12} key={index}>
									<QueueAnim type={"bottom"} duration={2000} interval={0}>
										<Card
											className="card"
											hoverable={true}
											onClick={() => {
												navigate(loc);
											}}
											key={"1"}
										>
											<Title level={3}>{category.title}</Title>
											<Divider
												orientation="left"
												plain={true}
												orientationMargin={0}
											>
												<Text type="secondary">Category TLDR</Text>
											</Divider>
											<Text>{category.description}</Text>
										</Card>
									</QueueAnim>
								</Col>
							);
						})}
					</Row>
				</div>
			</div>
		</div>
	);
};

export default CategoriesPage;
