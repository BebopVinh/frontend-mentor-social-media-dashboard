import React from "react"

export default function SocialMediaCard({
	title,
	icon,
	username,
	following,
	growth,
}) {
	const renderGrowth = () => {
		return growth.positive ? (
			<p className="positive-following flex-center">
				<img src="/images/icon-up.svg" alt="up arrow icon" />
				{growth.amount} Today
			</p>
		) : (
			<p className="negative-following flex-center">
				<img src="/images/icon-down.svg" alt="down arrow icon" />
				{growth.amount} Today
			</p>
		)
	}

	return (
		<div className={`social-media-card ${title}`}>
			<p className="flex-center">
				<img src={icon} alt="icon" style={{ padding: "0px 8px" }} />
				{username}
			</p>
			<div style={{ textAlign: "center" }}>
				<p>{following.amount}</p>
				<p>{following.type}</p>
			</div>
			{renderGrowth()}
		</div>
	)
}
