import style from "./VotePage.module.css"
import React from "react"
import VoteBoard from "./VoteBoard";
import Nav from "./Nav";
import {BASE_URL} from "./utils/setting";
import {getData} from "./utils/fun_utils";

export default class VotePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			voteMessage:[{}]
		}
	}

	componentDidMount() {

		getData('/item/getSubItem','item_id='+this.props.match.params.item_id).then(res=>{
			if(res.code==200){
				this.setState({
					voteMessage:res.result
				})
			}
			// else window.location.href = '/login'
		})

	}

	render() {
		return (
			<React.Fragment>
				<Nav histories={this.props.history} onBack={this.props.history.goBack} couldback={true}>投票列表</Nav>
				<div className={style.votedPage}>{this.state.voteMessage.map((e,i)=><VoteBoard {...e} key={i} votedTitle={e.votedTitle+'#'+(i+1)} onClick={e.voted?()=>this.props.history.push('/dis/'+e.id):()=>{}} />)}</div>
			</React.Fragment>
		);
	}
}


