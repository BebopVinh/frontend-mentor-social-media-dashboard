import React from "react"

export default function GrowthNumber(props) {
	return props.positive ? (
		<p className="positive-following flex-center">
			<img
				src="/images/icon-up.svg"
				alt="up arrow icon"
				style={{ padding: "0 4px" }}
			/>
			{props.amount + (props.displayPercentSymbol ? "%" : " Today")}
		</p>
	) : (
		<p className="negative-following flex-center">
			<img
				src="/images/icon-down.svg"
				alt="down arrow icon"
				style={{ padding: "0 4px" }}
			/>
			{props.amount + (props.displayPercentSymbol ? "%" : " Today")}
		</p>
	)
}
