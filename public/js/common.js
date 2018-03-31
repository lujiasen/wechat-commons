//const URL = "http://192.168.1.165:8080/";
const URL = "http://www.lujiasen.com/wechat/"; //正式线上地址
const EXPRESS_INFORMATION = URL+"express/getExpressState";

const getParams = url =>{
	let args = url.split("?"); 
　　let retval = ""; 
　　if(args[0] == url){ 
　　		return retval;
　　} 
　　let str = args[1]; 
　　args = str.split("&"); 
	let params = {};
	for(let param of args){
		let arg = param.split("="); 
		if(arg.length <= 1) continue; 
		params[arg[0]] = arg[1];
	}
	return params;
}
