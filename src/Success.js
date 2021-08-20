import style from "./Success.module.css"
import React from "react"
import Nav from "./Nav";
import {useParams} from "react-router-dom";
import {BASE_URL} from "./utils/setting";

export default function Success(props) {
	let {itemId} = useParams();
	let itemName = '';
	fetch(BASE_URL + '/item/getItem?item_id=' + itemId).then(res => res.json()).then(res => {
		if (res.code == 200) {
			itemName = res.result.itemName;
		} else {
			this.props.history.push('/404')
		}
	}).catch(err => console.log(err));
	return (
		<React.Fragment>
			<Nav onBack={props.history.goBack} couldback={true} histories={props.history}>投票成功</Nav>
			<p className={style.shareP}>感谢你为{itemName}贡献出自己的智慧！
				分享到朋友圈，投票权+1</p>
			<button onClick={()=>{
				window.copy('http://qugongyi.love/detail'+itemId);
				alert('复制成功');
				window.location.href = 'weixin://';
			}} className={style.shareButton}>分享到朋友圈</button>
		</React.Fragment>
	);
}
