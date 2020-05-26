import React from "react"
import { socialMediaSites } from "../data/socialMediaData"

import SocialMediaCard from "../components/SocialMediaCard"
import ToggleSwitch from "../components/ToggleSwitch"

export default function DashboardContainer() {
	const renderSites = () => {
		return socialMediaSites.map((site) => <SocialMediaCard {...site} />)
	}

	return (
		<div className="social-media-container">
			<header>
				<div className="header-content">
					<h1>Social Media Dashboard</h1>
					<h4>Total Followers: 23,004</h4>
				</div>
				<div className="toggle-group">
					Dark Mode <ToggleSwitch />
				</div>
			</header>

			<div className="card-group">{renderSites()}</div>
		</div>
	)
}
