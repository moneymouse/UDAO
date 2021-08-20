import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "./Home";
import ErrorNotFound from "./ErrorNotFound";
import Detail from "./Detail";
import VotePage from "./VotePage";
import VoteDetail from "./VoteDetail";
import Success from "./Success";
import PCenter from "./PCenter";
import {BASE_URL, DEBUG} from "./utils/setting";

function CheckLogin(props) {
	const [loading, toggleLoading] = useState(true)
	if (DEBUG) {
		localStorage.setItem('key', 'eyJ0eXBlIjogIkpXVCIsICJhbGciOiAic2hhMjU2IiwgInNhbHQiOiAwfQ==.eyJuYW1lIjogIlRlc3RfVXNlciIsICJ0aXRsZSI6ICJcdTcyMzFcdTVmYzNcdTU5MjdcdTRmN2YiLCAiaWQiOiAxfQ==.a883edb5618d4af5716b495a1e8527f50c1f7040f40b17a5c43a272300fe6141')
		return props.children
	}
	let key = localStorage.getItem("key")
	if (!key) return (<Redirect to={"/login"}/>)
	fetch(BASE_URL + "/user/check?key=" + key).then(res => res.json()).then(res => {
		console.log(res)
		if (res.code == 200) {
			toggleLoading(false)
		} else window.location.href = '/login'
	}).catch(error => {
		console.error(error);
		window.location.href = '/login'
	})
	return (<React.Fragment>
		{loading ? <div>Loading...</div> : props.children}
	</React.Fragment>)
}

function App() {
	return (
		<CheckLogin>
			<Switch>
				<Route exact={true} path={"(/home|/)"} component={Home}/>
				<Route path={"/detail/:item_id"} exact={true} component={Detail}/>
				{/*Vote List Page*/}
				<Route path={"/detail/vote/:item_id"} component={VotePage}/>
				<Route path={"/dis/:vote_id"} component={VoteDetail}/>
				<Route path={"/success/:item_id"} component={Success}/>
				<Route path={"/PCenter"} component={PCenter}/>
				<Route component={ErrorNotFound}/>
			</Switch>
		</CheckLogin>
	);
}

export default App;
