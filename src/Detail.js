import style from "./Detail.module.css"
import Gy from "./img/ninja161787932432540.jpg"
import React from "react"
import Nav from "./Nav";
import DefaultBoard from "./defaultBoard";
import {PicDetBoard, ButtonBar} from "./tempComponent";

function combine(...a) {
	return Object.assign(...a);
}

export default class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			itemName: "",
			itemTarget: 1,
			itemNow: 0,
			itemDetail: "",
			itemInvolve: "",
			itemImg: "",
		}
	}

	componentDidMount() {
		const state = {
			itemName: "幸存老兵助养行动",
			itemTarget: 1000,
			itemNow: 0,
			itemDetail: "美国发起了一场针对中国的地缘政治竞争，但没有预先制定协调一致的战略。在中国承受一个世纪的屈辱时，美国则享受了一个世纪的胜利。中国人在思考上是非常谨慎、实用主义而且非常具有战略性的。鉴于美国人130年来赢得了所有竞争，他们本着不可能失败的原则出发而让自己处于危险境地。我这里引用格雷厄姆·艾利森的话，他说美国希望中国跟它一样。一定要注意你所希望的东西啊！当美国在19世纪90年代成为一个强大国家，面对类似中国在今天的局面时，美国人做的第一件事就是向其他国家宣战，比如从西班牙手中掠取了菲律宾。美国还会拿走由越南、菲律宾、马来西亚和文莱控制的所有岛礁。中国拥有可以这么做的军事实力。但中国没有这么做。",
			itemInvolve: "Samuel,Tony,Sherry参与了捐赠",
			itemImg: Gy,
		}
		this.setState({...state})
	}

	render() {
		const {history} = this.props;
		return (
			<React.Fragment>
				<Nav couldback={true} onBack={history.goBack}>{this.state.itemName}</Nav>
				<img style={{
					borderRadius: "12px",
					width: "88%",
					marginLeft: "6%",
					height: "27.6vh",
					marginBottom: "2vw",
					marginTop: "4vw"
				}} src={this.state.itemImg}/>
				<PicDetBoard>
					<div style={{flex: 3}}></div>
					<div className={style.contributionDetail}>
						<b>现筹款数额：{this.state.itemNow}</b>
						<br/>
						<b>筹款总目标：{this.state.itemTarget}</b>
						<p className={style.friend}>
							你的好友:{this.state.itemInvolve}参与了捐赠
						</p>
						<a style={{color: "#00a1ffd9", fontSize: ".9rem"}}>查看更多</a>
					</div>
				</PicDetBoard>
				<DefaultBoard className={style.detailBoard}>
					<div className={style.detailTitle}>项目详情</div>
					{this.state.itemDetail}
				</DefaultBoard>
				<ButtonBar leftColor={"#E56862"} leftContent={"立即捐款"} rightColor={"#F59B40"} rightContent={"进入投票"}/>
			</React.Fragment>
		);
	}
}


