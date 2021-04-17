import style from "./VoteBoard.module.css"
import React from "react"
import DefaultBoard from "./defaultBoard";
import Detail from "./img/detail.svg";


/**
 * @name VoteBoard
 * @prop {JSON} props
 * @property {boolean} props.voted
 * @property {string} props.votedTitle
 * @property {string} props.votedMoney
 * @property {string} props.startTime
 * @property {string} props.endTime
 * @property {Number} props.color - The color of the block background in the front of VoteBoard
 **/
export default class VoteBoard extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {voted,votedMoney,votedTitle,color="#F59B40",startTime,endTime} = this.props;
		return (
			<React.Fragment>
				<DefaultBoard style={{marginBottom: "3vh",width:"calc(88% - 6vw)",marginLeft:"6%",}} className={style.votedBoard}>
					<div className={style.left}>
						<div className={style.statusBox} style={{backgroundColor:voted?color:"gray"}}></div>
					</div>
					<div className={style.center}>
						<div style={{color:voted?"black":"gray",fontSize:"1.6rem",marginBottom:"1rem",marginTop:"1rem",fontWeight:"700",letterSpacing:".2rem"}}>{votedTitle}</div>
						<p className={style.p}>开始时间:{startTime}
							<br />
							结束时间:{endTime}
						</p>
						<br />
						<div style={{marginBottom:"1rem"}}><span style={{fontWeight:"700",fontSize:"1.6rem",color:voted?"#F59B40":"gray"}}>{votedMoney}</span>元</div>
					</div>
					<div className={style.right}>
						<img className={style.icon} src={Detail} style={{float:"right"}} />
						<div>
							<button type={"button"} style={{backgroundColor:voted?"#6286ED":"gray"}} className={style.votedButton} disabled={!voted}>{voted?"进入投票":"已通过"}</button>
						</div>
					</div>
				</DefaultBoard>
			</React.Fragment>
		);
	}
}


