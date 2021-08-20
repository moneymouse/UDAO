import style from "./Detail.module.css"
import Gy from "./img/ninja161787932432540.jpg"
import React from "react"
import Nav from "./Nav";
import DefaultBoard from "./defaultBoard";
import {PicDetBoard, ButtonBar} from "./tempComponent";
import {BASE_URL} from "./utils/setting";
import * as echarts from "echarts";

import('./img/ninja161787932432540.jpg').then(e => console.log(e))

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
		let myCharts = echarts.init(document.getElementById('main'));
		fetch(BASE_URL + '/item/getItem?item_id=' + this.props.match.params.item_id).then(res => res.json()).then(res => {
			if (res.code == 200) {
				this.setState(res.result)
				let option = {
					tooltip: {
						trigger: 'item'
					},
					legend: {
						top: '5%',
						left: 'center'
					},
					series: [
						{
							name: '资金池',
							type: 'pie',
							radius: ['60%', '90%'],
							avoidLabelOverlap: false,
							itemStyle: {
								borderRadius: 10,
								borderColor: '#fff',
								borderWidth: 2
							},
							emphasis: {
								label: {
									show: true,
									fontSize: '40',
									fontWeight: 'bold'
								}
							},
							labelLine: {
								show: false
							},
							label: {
								show: true,
								position: 'center',
								formatter: res.result.itemNow/res.result.itemTarget+'%',
								fontSize: '12',
								fontWeight:'700'
							},
							data: [
								{value: res.result.itemNow},
								{value: res.result.itemTarget-res.result.itemNow},
							]
						}
					]
				};
				myCharts.setOption(option);
			}
			else{
				this.props.history.push('/404')
			}
		}).catch(err=>console.log(err))
	}

	render() {
		const {history} = this.props;
		return (
			<React.Fragment>
				<Nav couldback={true} histories={history}
				     onBack={() => history.push('/home')}>{this.state.itemName}</Nav>
				<img style={{
					borderRadius: "12px",
					width: "88%",
					marginLeft: "6%",
					height: "27.6vh",
					marginBottom: "2vw",
					marginTop: "4vw"
				}} src={this.state.itemImg||Gy}/>
				<PicDetBoard>
					<div style={{flex: 3,height:'10vh'}} id={'main'}></div>
					<div className={style.contributionDetail}>
						<b>现筹款数额：{this.state.itemNow}</b>
						<br/>
						<b>筹款总目标：{this.state.itemTarget}</b>
					</div>
				</PicDetBoard>
				<DefaultBoard className={style.detailBoard}>
					<div className={style.detailTitle}>项目详情</div>
					{this.state.itemDetail}
				</DefaultBoard>
				<ButtonBar onLeftClick={()=>{alert('您是内测用户，暂时无法捐赠。')}} onRightClick={() => history.push('/detail/vote/'+this.props.match.params.item_id)} leftColor={"#E56862"}
				           leftContent={"立即捐款"}
				           rightColor={"#F59B40"} rightContent={"进入投票"}/>
			</React.Fragment>
		);
	}
}


