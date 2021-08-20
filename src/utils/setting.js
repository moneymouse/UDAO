import React from "react";
import {getCookie} from "./fun_utils";

// The base url of the api
export const BASE_URL = 'http://www.qugongyi.love'

// 从cookies中提取跨域访问安全密钥，由postData调用，请求头X-CSRFToken
export const csrftoken = getCookie('csrftoken');

export const DEBUG = false;
