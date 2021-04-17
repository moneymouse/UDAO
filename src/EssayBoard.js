import style from "./EssayBoard.module.css"
import React from "react"
// import PropTypes from "prop-types"

/**
 *  Need{organization,date,image,title,introduction}
 * */
export default class EssayBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			radiusBoardAnimate: {transform: "translate(0," + -props.keys * 2 + "vw)"}
		}
	}

	componentDidMount() {
		setTimeout(() => this.setState({
			radiusBoardAnimate: {
				transition: "all 0.5s ease-in-out 0s",
				transform: "translate(0,0)"
			}
		}), 10)

	}

	render() {
		const {organization, date, image, title, introduction} = this.props;
		return (
			<React.Fragment>
				<div className={style.radiusBoard} style={this.state.radiusBoardAnimate}>

					<div className={style.downBox} style={{marginTop: "15px"}}>
						<div style={{flex: 1.2}}>
							<img src={image} style={{borderRadius: "12px", border: ".5px solid #dbdbdb"}}
							     className={style.image}/>
						</div>
						<div style={{width: "55%", position: "relative", flex: 1}}>
							<h3 className={style.h4}>{title}</h3>
							<p className={style.introduction}>{introduction}</p>
						</div>
					</div>
					<div style={{marginTop: "1.5vw", height: "1rem", fontSize: ".7rem"}}>
						<div style={{float: "left", color: "darkgray"}}>{organization}</div>
						<div style={{float: "right", color: "darkgray"}}>{date}</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

