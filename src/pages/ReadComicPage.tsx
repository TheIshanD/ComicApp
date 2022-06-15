import { Typography } from "antd";
import React, { useEffect } from "react";
import Comic from "../types/comicType";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import CustomPageHeader from "../components/CustomPageHeader";

interface myProps {
	comic: Comic;
}

const ReadComicPage: React.FC<myProps> = (props: myProps) => {
	const { Text, Title } = Typography;
	const { comic } = props;
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<CustomPageHeader titleString={"TLDR: ".concat(comic.title)} />
			<div className="site-wrapper">
				<div className="site-layout-content transition">
					<Text className="tldrText">{comic.tldr}</Text>
				</div>
			</div>
		</div>
	);
};

export default ReadComicPage;
