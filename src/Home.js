import style from "./Home.module.css";
import React from "react";
import Nav from "./Nav";
import EssayBoard from "./EssayBoard";
import Gy from "./img/ninja161787932432540.jpg"

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		let essay = [{
			organization: "中国基金会",
			date: "2021-4-1",
			title: "幸存老兵助养行动",
			introduction: "让平均年龄97岁的抗战老兵老有所养，忆有所存，荣有所归。",
			image: Gy
		}, {
			organization: "中国基金会",
			date: "2021-4-1",
			title: "幸存老兵助养行动",
			introduction: "让平均年龄97岁的抗战老兵老有所养，忆有所存，荣有所归。",
			image: Gy
		}, {
			organization: "中国基金会",
			date: "2021-4-1",
			title: "幸存老兵助养行动",
			introduction: "让平均年龄97岁的抗战老兵老有所养，忆有所存，荣有所归。",
			image: Gy
		}, {
			organization: "中国基金会",
			date: "2021-4-1",
			title: "幸存老兵助养行动",
			introduction: "让平均年龄97岁的抗战老兵老有所养，忆有所存，荣有所归。",
			image: Gy
		}, {
			organization: "中国基金会",
			date: "2021-4-1",
			title: "幸存老兵助养行动",
			introduction: "让平均年龄97岁的抗战老兵老有所养，忆有所存，荣有所归。",
			image: Gy
		}, {
			organization: "中国基金会",
			date: "2021-4-1",
			title: "幸存老兵助养行动",
			introduction: "让平均年龄97岁的抗战老兵老有所养，忆有所存，荣有所归。",
			image: Gy
		}, {
			organization: "中国基金会",
			date: "2021-4-1",
			title: "幸存老兵助养行动",
			introduction: "让平均年龄97岁的抗战老兵老有所养，忆有所存，荣有所归。",
			image: Gy
		}, ]
		return (
			<React.Fragment>
				<Nav couldback={false}>项目列表</Nav>
				<div className={style.essayList}>
					{essay.map((v, i) => {
						return <EssayBoard {...v} key={i} keys={i} />
					})}
				</div>
			</React.Fragment>
		)
	}
}