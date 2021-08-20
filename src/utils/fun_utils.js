import {BASE_URL} from "./setting";

export function getCookie(name) {
	let cookieValue = null;
	if (document.cookie && document.cookie !== '') {
		const cookies = document.cookie.split(';');
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].trim();
			// Does this cookie string begin with the name we want?
			if (cookie.substring(0, name.length + 1) === (name + '=')) {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	return cookieValue;
}

export function postData(sub_url, data={}) {
	data.key = localStorage.getItem('key')
	return fetch(BASE_URL + sub_url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: new Headers({
			'Content-Type': 'application/json',
			'X-CSRFToken': getCookie('csrftoken')
		})
	}).then(res => res.json())
}

//sub_url 应包括请求参数
export function getData(sub_url,param){
	let key = localStorage.getItem('key')
	param = param?('&'+param):''
	return fetch(BASE_URL+sub_url+'?key='+key+param).then(res=>res.json())
}

export function getPayloads(){
	let keys = localStorage.getItem('key').split('.')
	return JSON.parse(atob(keys[1]))
}

export const getTitle = ()=>getPayloads().title
export const getName = ()=>getPayloads().name
export const getId = ()=>getPayloads().id
