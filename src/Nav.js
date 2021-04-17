import style from "./Nav.module.css";
import React from "react";
import Person from "./img/person.svg";
import Back from "./img/back.svg"

export default class Nav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {couldback,children,onBack} = this.props;
		return (
			<React.Fragment>
				<div className={style.nav}>
					{couldback?(<div className={style.back} onClick={onBack}>
						<img src={Back}/>
					</div>):null}
					<h2 style={{
						marginTop: 0,
						lineHeight: "10vh",
						marginLeft: "22.5%",
						width: "55%",
						textAlign: "center",
						float: "left",
						marginBottom:"unset"
					}}>{children}</h2>
					<div className={style.person}>
						<img src={Person}/>
					</div>
				</div>
				<div style={{height:"10vh"}}></div>
			</React.Fragment>
		);
	}
}