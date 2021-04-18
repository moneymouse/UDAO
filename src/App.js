import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import ErrorNotFound from "./ErrorNotFound";
import Detail from "./Detail";
import VotePage from "./VotePage";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact={true} path={"(/home|/)"} component={Home} />
				<Route path={"/detail"} exact={true} component={Detail} />
				<Route path={"/detail/vote"} component={VotePage} />
				<Route component={ErrorNotFound} />
			</Switch>
		</Router>
	);
}

export default App;
