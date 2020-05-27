import React from "react"
import OverviewCard from "../components/OverviewCard.js"

import { overViewData as data } from "../data/overviewData"

export default function OverviewContainer() {
	const renderOverviews = () => {
		return data.map((overview) => {
			return (
				<>
					<OverviewCard icon={overview.icon} {...overview.views} />
					<OverviewCard icon={overview.icon} {...overview.likes} />
				</>
			)
		})
	}

	return <div className="overview-container">{renderOverviews()}</div>
}
