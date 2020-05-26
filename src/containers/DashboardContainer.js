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
					<h1 className="static-text">Social Media Dashboard</h1>
					<p>Total Followers: 23,004</p>
				</div>
				<div className="toggle-group">
					Dark Mode <ToggleSwitch />
				</div>
			</header>

			<div className="card-group">{renderSites()}</div>
		</div>
	)
}
