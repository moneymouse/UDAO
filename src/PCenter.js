import style from "./PCenter.module.css"
import React from "react"
import {getData, getId, getName, getTitle, postData} from "./utils/fun_utils";
//image
import Back from "./img/backW.svg";
import Person from "./img/person.svg";
import Photohead from "./img/photohead.svg";
import mm from "./img/mm.svg";
import xx from "./img/xx.svg";
import girl from "./img/girl.svg";
import old from "./img/old.svg";
import {BASE_URL} from "./utils/setting";

export default class PCenter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title:'',
			name:'',
			level:0,
			level_rate:0.6,
			donate:0,
			donate_with:0,
			num:0,
			itemList:[]
		}
	}

	componentDidMount() {
		let Id = getId()
		let title = getTitle()
		let name = getName()
		fetch(BASE_URL+'/user/donate?id='+Id).then(res=>res.json()).then(res=>{
			if(res.code==200){
				let result = JSON.parse(res.result)
				let donate = result.donate
				let donate_with = result.donate_with
				this.setState((e) => ({...e, title, name, donate, donate_with}))
			}
		}).catch(error=>console.error(error))
		postData('/user/getContributeItem').then(res=>{
			if(res.code=='200'){
				this.setState((e)=>({...e,...res.result}))
			}
			else window.location.href = '/login'
		})
	}

	render() {
		const {history} = this.props;
		let {title,name,level,level_rate,donate,donate_with,num,itemList} = this.state;
		return (
			<React.Fragment>
				<div style={{backgroundColor: "#6286ED", height: "110vh"}}>
					{/*Nav*/}
					<div className={style.nav}>
						<div className={style.back} onClick={history.goBack}>
							<img src={Back}/>
						</div>
						<div>
							<h2 style={{
								marginTop: 0,
								lineHeight: "10vh",
								// marginLeft: "22.5%",
								// width: "55%",
								textAlign: "center",
								float: "left",
								marginBottom: "unset",
								color: "white"
							}}>{"个人中心"}</h2>
						</div>
						<div className={style.person}>
							<img src={Person}/>
						</div>
					</div>
					{/*	Body*/}
					<div className={style.body}>
						<div className={style.headphoto}><img style={{height:"17vw"}} src={Photohead} /></div>
						<div><h1 style={{margin:".7rem"}} color={"white"}>{name}</h1></div>
						<div className={style.processBox}>
							<div className={style._process}>
								<div className={style.p} style={{flex:level_rate}}></div>
								<div style={{flex:1-level_rate}}></div>
							</div>
							<span style={{opacity:1}}>Lv.{level}</span>
						</div>
						<div style={{fontSize:".9rem",backgroundColor:"rgba(0,0,0,.5)",marginTop:".6rem",padding:".3rem .5rem .3rem .5rem",borderRadius:"5px"}}>
							{title}
						</div>
						{/*Split line*/}
						<div className={style.line}/>
						<div className={style.d}>
							<div style={{flex:3}}><img style={{height:"100%"}} src={mm}/></div>
							<div className={style.q}>
								<div>总共捐赠{donate}元</div>
								<div>{donate_with+"元 配捐额度"}</div>
							</div>
						</div>
						<div className={style.d}>
							<div style={{flex:3}}><img style={{height:"100%"}} src={xx} /></div>
							<div className={style.q}>
								<div>{"帮助项目"}</div>
								<div>{num+"个"}</div>
							</div>
						</div>
					</div>
				</div>
				<div className={style.bottom}>
					<div style={{backgroundColor:"white",height:"2rem",position:"fixed",width:"100%"}}></div>
					<div style={{fontSize:"1.1rem",fontWeight:600,marginBottom:"1.6rem",marginTop:"2rem"}}>捐款记录</div>
					{itemList.map((e)=>{
						return <Band {...e} history={history} src={old} />
					})}
				</div>
			</React.Fragment>
		);
	}
}

function Band(props){
	return (
		<div className={style.bandGrid} onClick={()=>props.history.push('/detail/'+props.item_id)}>
			<div className={style.pic}><img style={{height:"100%",width:"100%"}} src={props.src} /></div>
			<div style={{gridColumn:"2/3",gridRow:"1/2",fontSize:"1.1rem",fontWeight:800}}>{props.title}</div>
			<div style={{gridColumn:"2/3",gridRow:"3/4"}}>共支持：{props.support}元
				<br />
				共拥有：{props.stock}票
			</div>
		</div>);
}

