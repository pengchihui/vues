/* 异步加载 */

//方式1  if层叠判断

//方式2 使用 Promise状态对象里的all()方法

Promise.all([


]).then(result=>{

},error=>{


})


//方式3 async await
asyun function show(){

  let data1=await $ajax{};
  let data1=await $ajax;
  let data1=await $ajax;
  let data1=await $ajax;
}
