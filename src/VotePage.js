import style from "./VotePage.module.css"
import React from "react"
import VoteBoard from "./VoteBoard";
import Nav from "./Nav";

export default class VotePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			voteMessage:[{}]
		}
	}

	componentDidMount() {
		let voteM = []
		for(let i=0;i<7;i++){
			voteM.push({
				voted:true,
				endTime:"2021/10/12",
				startTime:"2021/4/16",
				color:"#F59B40",
				votedMoney:"31,000",
				votedTitle:"助养老兵#1"
			})
		}
		this.setState({
			voteMessage:voteM
		})
	}

	render() {
		return (
			<React.Fragment>
				<Nav onBack={this.props.history.goBack} couldback={true}>投票列表</Nav>
				<div className={style.votedPage}>{this.state.voteMessage.map((e,i)=><VoteBoard {...e} />)}</div>
			</React.Fragment>
		);
	}
}


