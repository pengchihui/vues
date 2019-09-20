/* js */

//增添方法   属性

//方式 1    if判断

//方式2    obj.call   obj.apply    obj.bind  都是让自己的属性 使用对方的内容

//方式3    使用原型  prototype属性  让这个函数对象或普通对象 增添全局的属性跟方法

/* ajax数据交互 */



/* html5新特性 */

// 1常用 语义元素  article   nav section  header footer MozillaSideBar
// 2 canvas 画图容器
// 3 拖放
// 4 表单 类型   eamil date url time number tel range



/* css3 新特性 */
// 边框 圆角边框 添加阴影框
// 背景
// 渐变
// 文本效果
// 2d  transform
// 3d
//过度 transition
// 动画
//弹性布局
//多媒体  audio video autoplay loop controls


//url处理方式
方式1
function getName（name）{  
    var reg = RegExp（'[?&]'+ name+'=([^&]*)').exec（window.location.search）;  
    return reg && getName(reg[1].replace（/\+ /g,''));  
} 
 
function getUrl(name){
	var result=RegExp('[?&]'+name+'=[^&]*').exec(window.location.search);
	return result && getUrl(result[1].replace(/\+/g,''));
}


function getParameter(name) {
	var reg = new RegExp((^&) + name + =([^&])(&$), i);
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}

/*兼容所有浏览器的 去除字符串空格 */

function trime(str){
	if(str typeof str ==='string'){
 		return str.replace('(^s*)|(s*)$/g',"");
	}
}


/* 降维数组 */

var arr=[[1,2],[3,4],7,8];
function Jw(obj){
     return Array.prototype.concat.apply([],obj);
}
Jw(arr);

// url解析为字典对象
function getQueryObject(url) {
url = url == null ? window.location.href : url;
var search = url.substring(url.lastIndexOf("?") + 1);
var obj = {};
var reg = /([?&=]+)=([?&=]*)/g;
search.replace(reg, function (rs, 1,2) {
var name = decodeURIComponent(1); var val = decodeURIComponent(2);
val = String(val);
obj[name] = val;
return rs;
});
return obj;
}

var arr = [1,2,43];
var json = {a:6,b:4,c:[1,2,3]};
var str = 'sdfsdf';

var json2 = clone(json);

function clone(obj){
var oNew = new obj.constructor(obj.valueOf());
if(obj.constructor == Object){
		for(var i in obj){
			oNew[i] = obj[i];
			if(typeof(oNew[i]) == 'object'){
				clone(oNew[i]);
		    }
		}
}
     return oNew;
}


//最简单的 去重 写法 
var arr=[];
var qu=[...new Set(arr)]

//最简单的  求最大值
var arry=[]
Math.max(...arry)

//盒子居中 
 1. 定位 盒子宽高已知， position: absolute; left: 50%; top: 50%; margin-left:-自身一半宽度; margin-top: -自身一半高度;
 2. table-cell布局 父级 display: table-cell; vertical-align: middle; 子级 margin: 0 auto;
 3.
  position: relative / absolute;
/*top和left偏移各为50%*/
   top: 50%;
   left: 50%;
/*translate(-50%,-50%) 偏移自身的宽和高的-50%*/
transform: translate(-50%, -50%);

4、flex 布局

父级： 
/*flex 布局*/
display: flex;
/*实现垂直居中*/
align-items: center;
/*实现水平居中*/
justify-content: center;

//打死不让你复制 
-webkit-user-select: none;  //chrome safari 苹果系列
-ms-user-select: none;  //ie系列 
-moz-user-select: none;  //Firefox 
-khtml-user-select: none;
user-select:none,


//单行文本溢出
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
//多行文本溢出




