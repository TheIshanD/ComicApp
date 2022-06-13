import React from "react";
import ReactDOM from "react-dom";
import { FaDiscord, FaInstagram } from "react-icons/fa";

interface myProps {
	url: string;
	type: string;
	text: string;
}

const SocialMediaButton = (props: myProps) => {
	const { url, type, text } = props;

	const color = "";
	return (
		<div
			style={{
				display: "inline-block",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{type === "discord" && (
				<a
					href={url}
					className="socialMediaButton discordButton"
					target={"_blank"}
					rel="noreferrer"
				>
					<div style={{ width: 25, height: 25, marginRight: 15 }}>
						<FaDiscord size={25} />
					</div>
					<span>{text}</span>
				</a>
			)}
			{type == "instagram" && (
				<a
					href={url}
					className="socialMediaButton instagramButton"
					target={"_blank"}
					rel="noreferrer"
				>
					<div style={{ width: 25, height: 25, marginRight: 15 }}>
						<FaInstagram size={25} />
					</div>
					<span>{text}</span>
				</a>
			)}
		</div>
	);
};

export default SocialMediaButton;
