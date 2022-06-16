import { Typography, Divider } from "antd";
import React from "react";
import CustomPageHeader from "../components/CustomPageHeader";
import SocialMediaButton from "../components/SocialMediaButton";

interface myProps {}

const TheMission: React.FC<myProps> = (props: myProps) => {
	const { Text } = Typography;

	return (
		<div>
			<CustomPageHeader titleString={"Join The Mission!"} />
			<div className="site-wrapper">
				<div className="mid-site-layout-content transition">
					<div className="whiteContent site-layout-content transition">
						<Text className="tldrText">
							We founded TLDR to share our passion for comic books with other
							people. We recognized the barrier to entry to reading comic books
							was high, at times very confusing, and esoteric. TLDR is a
							mechanism for comic book readers to fully understand comics
							quickly. If you have any recommended comics we should add or want
							to add a TLDR yourself, join the Discord. If you want to follow
							along with our journey, follow our instagram! Thank you!
						</Text>

						<div className="socialMediaButtonsWrapper">
							<SocialMediaButton
								url={"https://www.instagram.com/"}
								type={"instagram"}
								text={"Follow Us!"}
							/>
							<SocialMediaButton
								url={"https://discord.gg/6RN4VeTCgH"}
								type={"discord"}
								text={"Join Us!"}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TheMission;
