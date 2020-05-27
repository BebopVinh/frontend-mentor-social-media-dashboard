import React from "react"

import GrowthNumber from "./GrowthNumber"

export default function OverviewCard(props) {
	return (
		<div className="overview-card">
			<div>
				<p>{props.name}</p>{" "}
				<img className="original-size" src={props.icon} alt="" />
			</div>
			<div>
				<p className="bigger-text">{props.amount} </p>
				<GrowthNumber
					displayPercentSymbol={true}
					amount={props.percentageAmount}
					positive={props.positive}
				/>
			</div>
		</div>
	)
}
