import style from "./tempComponent.module.css"
import React from "react"
import DefaultBoard from "./defaultBoard";

export function PicDetBoard(props){
	return (
		<DefaultBoard className={style.dataBoard}>
			{props.children}
		</DefaultBoard>
	);
}

/**
 * @property {JSON} props
 * @property {String} props.leftColor - the color of the left button
 * @property {String} props.rightColor - the color of the right button
 * @property {String} props.leftContent - the content in the left button
 * @property {String} props.rightContent - the content in the right button
 **/
export function ButtonBar(props){
	const {leftColor,rightColor,leftContent,rightContent} = props;
	return (
		<div className={style.buttonBox}>
			<button style={{backgroundColor:leftColor}} className={style.button}>{leftContent}</button>
			<button style={{backgroundColor:rightColor}} className={style.button}>{rightContent}</button>
		</div>
	);
}