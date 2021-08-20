import style from "./VoteDetail.module.css"
import React from "react"
import Nav from "./Nav";
import {ButtonBar, NormalBoard, PicDetBoard} from "./tempComponent";
import photo from "./img/photo.svg";
import DefaultBoard from "./defaultBoard";
import {postData} from "./utils/fun_utils";

function ProofBoard(props) {
	const {title, money, approve, object} = props;
	let _a = approve == 0 && object == 0 ? 1 : approve;
	let _o = approve == 0 && object == 0 ? 1 : object;
	return (
		<NormalBoard className={style.proofBoard}>
			<div className={style.title}>{title}</div>
			<div className={style.money}><span style={{fontSize: "2rem"}}>{money}</span> 元</div>
			<div className={style.proofRate}>
				<div style={{flex: _o}} className={style.object}>{object}%</div>
				<div style={{flex: _a}} className={style.approve}>{approve}%</div>
			</div>
			<div style={{paddingBottom: "1rem", marginTop: "1rem"}}>
				<div className={style.objectLegend + ' ' + style.Legend}></div>
				<div className={style.approveLegend + ' ' + style.Legend}></div>
			</div>
		</NormalBoard>
	);
}

function Outcome(props) {
	const {title, money} = props;
	return (
		<DefaultBoard style={{
			padding: "1rem",
			width: "calc(88% - 2rem)",
			marginLeft: "6%",
			height: "1rem",
			marginBottom: "12px"
		}}>
			<div style={{float: "left", lineHeight: "1rem"}}>{title}</div>
			<div style={{float: "right", lineHeight: "1rem"}}>{money}元</div>
		</DefaultBoard>
	)
}

export default class VoteDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			detail: [{}],
			provement: 0,
			opposition: 0,
			votedTitle: '',
			ticket: 0,
			ur_ticket_weight: 0,
			voted: true,
			itemTitle: '',
			itemId: ''
		}
		this.prove = this.prove.bind(this)
		this.oppose = this.oppose.bind(this)
	}

	componentDidMount() {
		postData('/item/getSubItemDetail', {vote_id: this.props.match.params.vote_id}).then(res => {
			if (res.code == 200) {
				let detail = []
				res.result.detail.map((v, i) => {
					detail.push({title: "#" + (i + 1) + ' ' + v[0] + v[1] + '公斤', money: v[2]})
				})
				this.setState((e) => ({...e, ...res.result, detail}))
			} else window.location.href = '/login'
		})
	}

	p(state) {
		if (state != 'prove' && state != 'oppose') return false;
		postData('/item/' + state, {voted_id: this.props.match.params.vote_id}).then(res => {
			if (res.code == 200) {
				this.props.history.push('/success/' + this.state.itemId)
			} else if (res.code == 401) {
				alert('尚未捐赠此项目，因此无法进行投票')
				this.props.history.goBack()
			} else {
				alert('投票失败，请确认投票尚未过期，并且已登录')
			}
		})
	}

	prove() {
		this.p('prove')
	}

	oppose() {
		this.p('oppose')
	}

	render() {
		const {history} = this.props;
		let {
			votedMoney,
			votedTitle,
			provement,
			opposition,
			ticket,
			ur_ticket_weight,
			voted,
			detail,
			itemId
		} = this.state
		return (
			<React.Fragment>
				<Nav histories={history} onBack={() => history.push('/detail/vote/' + itemId)}
				     couldback={true}>{votedTitle}</Nav>
				<ProofBoard title={votedTitle} money={votedMoney} approve={provement} object={opposition}/>
				<PicDetBoard style={{alignItems: "center"}}>
					<div className={style.photo}>
						<img src={photo} style={{}}/>
					</div>
					<div className={style.data}>
						<div>总票数: {ticket}</div>
						<div>我的票数: {ur_ticket_weight}</div>
						<a style={{color: "#43A1FF"}}>获取更多票数</a>
					</div>
				</PicDetBoard>
				<div style={{margin: "6%", fontWeight: 700}}>具体支出</div>
				{detail.map((v, i) => <Outcome {...v} key={i}/>)}
				<div style={{height: "5rem"}}/>
				<ButtonBar onRightClick={voted ? this.prove : ()=>{}} onLeftClick={voted ? this.oppose : ()=>{}} leftContent={"拒绝"}
				           rightContent={"通过"} leftColor={"#E56862"} rightColor={"#77C285"}/>
			</React.Fragment>
		);
	}
}

