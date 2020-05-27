import React from "react"
import "./App.css"
import DashboardContainer from "./containers/DashboardContainer"
import OverviewContainer from "./containers/OverviewContainer"

function App() {
	return (
		<div className="app-wrapper">
			<div className="App">
				<DashboardContainer />
				<OverviewContainer />
			</div>
		</div>
	)
}

export default App
