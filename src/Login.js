import style from "./Login.module.css";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {postData} from "./utils/fun_utils";

export default function Login(props) {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	return (
		<React.Fragment>
			<h2 style={{fontFamily: "'Roboto', sans-serif", color: "#673AB7", fontWeight: 300,marginTop:"30%",marginBottom:"8%"}}>Login</h2>
			<form onSubmit={(e) => {
				postData('/user/login', {username, password}).then(res => {
					if (res.code == 200) {
						localStorage.setItem('key', res.result)
						// props.history.push('/home')
						window.location.href = '/home'
					} else alert('用户名或密码错误')
				}).catch(error => alert(error));
				e.preventDefault();
			}}>
				<div>
					<label>用户名</label>
					<br/>
					<input type={"text"} name="username"
					       onChange={(e) => setUsername(e.target.value)}/>
				</div>
				<div style={{marginTop: '1rem'}}>
					<label>密码</label>
					<br/>
					<input type={"password"}
					       onChange={(e) => setPassword(e.target.value)}/>
				</div>
				<button className={style.button}>登录</button>
				<br/>
				<Link style={{display: "inline-block", marginTop: "1em", marginLeft: "10%"}} to={'/signup'}>注册</Link>
			</form>
		</React.Fragment>
	);
}

export function Signup(props) {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [email, setEmail] = useState('')
const [name, setName] = useState('')
return (
		<React.Fragment>
		<form onSubmit={(e) => {
			postData('/user/signup', {username, password, email, name}).then(res => {
				if (res.code == 200) {
					alert('注册成功')
					props.history.push('/login')
				} else alert('注册失败，请联系管理员')
			}).catch(error => console.error(error));
			e.preventDefault();
		}}>
			账号：<input type={"text"} placeholder={"账号..."} name="username"
			          onChange={(e) => setUsername(e.target.value)}/>
			<br/>
			昵称：<input type={"text"} placeholder={"昵称..."} name="name"
			          onChange={(e) => setName(e.target.value)}/>
			<br/>
			密码：<input type={"password"} placeholder={"密码..."} name="password"
			          onChange={(e) => setPassword(e.target.value)}/>
			<br/>
			Email：<input type={"text"} placeholder={"Email..."} name="email"
			             onChange={(e) => setEmail(e.target.value)}/>
			<br/>
			<input type={"submit"} value={"确认"}/>
		</form>
</React.Fragment>
);
}
