import axios from 'axios'
import qs from 'qs'
import { Loading } from 'element-ui';

let loding;
function startLoding(){
	loding=Loading.service({
		lock:true,
		text:"拼命加载中...",
		background:'rgba(0,0,0,0,7)'
	});
}

function endLoding(){
	loding.close();
}
/* 请求拦截  拦截请求前 拦截 */
axios.interceptors.request.use(config=>{
	/* 加载动画 */
	startLoding();
	return config;
	
},error=>{
	return Promise.reject(error);
})





export default axios