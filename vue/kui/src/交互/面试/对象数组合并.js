//克隆 是特殊的合并  需要目标对象和原对象的construct相同

//合并 浅合并 会覆盖原有的默认属性
Object.assign()

//深合并 防止对象的指针指向问题，为深拷贝
$.extend()
JSON.parse(JSON.stringify())



//数组 合并
方式1 arr1.concat(arr2)
方式2 arr.push(arr[i])
方式3 Array.prototype.push.apply(arr1,arr2)或者arr1.push.apply()

    var obj1 = {
      m: 1,
      n: 2,
      j: { r: { h: 2},p: 4},
      p: 1
    };
    var obj2 = { m: 2, n: undefined, j: { h: 2, o: 3 } };
    var obj3 = Object.assign(obj1, obj2);
    console.log('合并后-obj1',obj1)
    console.log('合并后-obj2',obj2)
    console.log('合并后-obj3',obj3)

   //浅拷贝   受拷贝对象的影响
   var obj1={'a':1};
   var obj2={'b':{'b1':22,'b2':33}};
   $.extend(obj1,obj2);
   obj2.b.b1=12
   console.log('浅拷贝',obj1)
   //深拷贝  不受 拷贝对象的影响
   var obj1 ={ m:1,n:2,j:{r:{h:2},p:4},p:1}
   var obj2 ={m:2,n:undefined,j:{h:2,o:3}}
   var obj4 ={m:42,n:undefined,j:{o:8}}
   var obj3 = $.extend(true,obj1,obj2,obj3);
   console.log('深合并',obj1)
