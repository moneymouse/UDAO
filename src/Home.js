import style from "./Home.module.css";
import React from "react";
import Nav from "./Nav";
import EssayBoard from "./EssayBoard";
import Gy from "./img/ninja161787932432540.jpg"
import {BASE_URL} from "./utils/setting";

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			essay:[]
		}
	}

	componentDidMount() {
		fetch(BASE_URL+'/item/getItemList').then(res=>res.json()).then(res=>{
			if(res.code=200){
				let essay = res.result
				this.setState((e)=>({...e, essay}))
			}
		}).catch(err=>console.error(err))

	}

	render() {
		const {history} = this.props;
		let {essay} = this.state;
		return (
			<React.Fragment>
				<Nav couldback={false} histories={history}>项目列表</Nav>
				<div className={style.essayList}>
					{essay.map((v, i) => {
						return <EssayBoard image={Gy} {...v} key={i} keys={i} onClick={()=>history.push('detail/'+v.item_id)} />
					})}
				</div>
			</React.Fragment>
		)
	}
}