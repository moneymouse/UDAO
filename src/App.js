import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import ErrorNotFound from "./ErrorNotFound";
import Detail from "./Detail";
import VoteBoard from "./VoteBoard";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact={true} path={"(/home|/)"} component={Home} />
				<Route path={"/detail"} component={Detail} />
				<Route path={"/test/1234123"} render={()=>{
					return (<VoteBoard voted={true} endTime={"2021/10/12"} votedTitle={"助养老兵#1"} color={"#F59B40"} startTime={"2021/4/16"} votedMoney={"31,000"} />)
				}} />
				<Route component={ErrorNotFound} />
			</Switch>
		</Router>
	);
}

export default App;
