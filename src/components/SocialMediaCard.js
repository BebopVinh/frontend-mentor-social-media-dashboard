import React from "react"

import GrowthNumber from "./GrowthNumber"

export default function SocialMediaCard({
	title,
	icon,
	username,
	following,
	growth,
}) {
	return (
		<div className={`social-media-card ${title}`}>
			<p className="flex-center">
				<img
					className="original-size"
					src={icon}
					alt="icon"
					style={{ padding: "0px 8px" }}
				/>
				{username}
			</p>
			<div style={{ textAlign: "center" }}>
				<p className="bigger-text">{following.amount}</p>
				<p className="spread-text">{following.type}</p>
			</div>
			<GrowthNumber displayPercentSymbol={false} {...growth} />
		</div>
	)
}
