import React from "react"

/**
 * @prop {JSON} [props]
 * @prop {JSON} props.style - The style of the defaultBoard
 * @prop {String} props.className - The class of the defaultBoard
 * @prop {ReactDOM} props.children
 * The className is unnecessary
 **/
export default function DefaultBoard(props) {
	return (
		<React.Fragment>
			<div className={props.className} style={Object.assign({height:props.height||"unset",borderRadius:"12px",backgroundColor:"white"},props.style)}>
				{props.children}
			</div>
		</React.Fragment>
	);
}
