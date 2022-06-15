import { Card, Divider, List, Typography } from "antd";
import React from "react";
import { Col, Row } from "antd";
import Comic from "../types/comicType";
import { useNavigate } from "react-router-dom";
import Character from "../types/characterType";
import CustomPageHeader from "../components/CustomPageHeader";
import QueueAnim from "rc-queue-anim";

interface myProps {
	comics: Comic[];
	company: string;
	characters: Character[];
}

const CompanyCharacterPage: React.FC<myProps> = (props: myProps) => {
	const { comics, company, characters } = props;

	const { Title, Text } = Typography;

	const navigate = useNavigate();

	const ofCompany = characters.filter((character: Character): boolean => {
		return character.company.toLowerCase() === company.toLowerCase();
	});

	ofCompany.sort((a, b) => {
		if (b.name > a.name) {
			return -1;
		}
		return 1;
	});

	return (
		<div>
			<CustomPageHeader titleString={company.concat(" Characters")} />
			<div className="site-wrapper">
				<div className="site-layout-content transition">
					<Row gutter={[16, 16]}>
						{ofCompany.map((character: Character, index: number) => {
							return (
								<Col key={index} span={12}>
									<QueueAnim type={"bottom"} duration={1500}>
										<Card
											className="card"
											hoverable={true}
											key={"1"}
											onClick={() => {
												navigate(
													character.name.toLowerCase().replaceAll(" ", "-")
												);
											}}
										>
											<Title level={3}>{character.name}</Title>
											<Divider
												orientation="left"
												plain={true}
												orientationMargin={0}
											>
												<Text type="secondary">Persona</Text>
											</Divider>
											<Text>{character.smallDesc}</Text>
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

export default CompanyCharacterPage;
