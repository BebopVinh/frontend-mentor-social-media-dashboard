import React from "react"
import { socialMediaSites } from "../data/socialMediaData"

import SocialMediaCard from "../components/SocialMediaCard"

export default function DashboardContainer() {
	const containerStyles = {
		padding: 150,
	}

	const renderSites = () => {
		return socialMediaSites.map((site) => <SocialMediaCard {...site} />)
	}

	return (
		<div className="social-media-container" style={containerStyles}>
			{renderSites()}
		</div>
	)
}
