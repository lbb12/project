//"use strict"








//遍历多维数组
// var arr=[1,2,3,[3,2,9,5,[39,98,73,40],2,84],99,32];

// function searchArray(arr){
// 	var arrs=[];
// 	for(var i=0;i<arr.length;i++){
// 		if(arr[i] instanceof Array){
// 			arrs.push(searchArray(arr[i]));
// 		}else{
// 			if(arr[i]>80){
// 				arrs.splice(i,1);
// 			}else{
// 				arrs.push(arr[i]);
// 			}
// 		}
// 	}
// 	return arrs;
// }

// console.log(searchArray(arr));

//----屏幕点击
// function circle(opt){
//     let cur={
//         color:'#f00',
//         radius:'10px',
//         el:document
//     },count=0;
//     cur=$.extend(cur,opt);
//     let cls={
//         "width":cur.radius,
//         "height":cur.radius,
//         "backgroundColor":cur.color,
//         "borderRadius":cur.radius,
//         "position":"absolute",
//     }
//     $(cur.el).on('click',function(ev){
//         var ofs={"left":ev.pageX+'px',"top":ev.pageY+'px'};
//         var str=`<div class='circle circle${count}'></div>`;
//         $('body').append(str);
//         $('.circle'+count).css($.extend(cls,ofs));
//         count++;
//     })
// }

// circle({
//     color:'#f9e',
//     radius:'5px',
//     el:'.box'
// });


//---promise
// var error = true;
// function test(){
//     //promise处理异步函数的回调，这里简单的用一个error代表正确结果和非预期结果的判断条件
//     var promise = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             if(!error){
//                 resolve("没错");
//             }else{
//                 reject("有错");
//             }
//         },100)
//     });
//     //test函数内部处理非预期结果。
//     return promise.catch(function(error){
//         console.log("失败了:"+error);
//     });
// }
// test().then(function(str){
//     console.log("成功了:"+str);
// });



// ----getElementsByClassName
// function myGetElementsByClassName(classname){ 
//     var arr = new Array();  
//     var elems = document.getElementsByTagName("*");
//     var reg=new RegExp('(^|\\s+)'+classname+'($|\\s+)');
//     for(var i of elems){
//         if(i.className.search(reg)!=-1){
//             arr.push(i);
//         }
//     }
//     return arr;  
// }
// console.log( myGetElementsByClassName('val') );

//----原生js手写getElementsByClassName
// function getClass(name){
//     var ele=document.getElementsByTagName("*");
//     var reg,arr=[];
//     for(var i of ele){
//         reg=new RegExp("(^|\s*)"+name+"($|\s*)");
//         if(i.className.match(reg)){
//             arr.push(i);
//         };
//     }
//    return arr;
// }
// getClass('value');


//----jquery的无缝滚动scroll.html
// function scroll(){
//     $(".uls").animate({'left':-500},function(){
//         $(".uls li:eq(0)").appendTo($(".uls"));
//         $(".uls").css('left',0);
//     });
// }
// var timer;
// timer=setInterval(scroll,2000);
// $(document).on('mouseover','.uls li',function(){
//     clearInterval(timer);
// }).on('mouseout','.uls li',function(){
//     timer=setInterval(scroll,2000);
// });



//----快速排序
// function qSort(arr){
// 	if(arr.length<=1) return arr;
// 	var left=[],right=[],index,value;
// 	index=Math.floor(arr.length/2);
// 	value=arr.splice(index,1)[0];
// 	for(var i=0;i<arr.length;i++){
// 		if(arr[i]<value){
// 			left.push(arr[i]);
// 		}else{
// 			right.push(arr[i]);
// 		}
// 	}
// 	return qSort(left).concat(value,qSort(right));
// }

// var arr=[1,3,2,30,23,44,12,89,28,44,23];
// console.log(arr);
// console.log(qSort(arr));

//----数组去重
// Array.prototype.unique=function(){
// 	let arr=[],obj={},i=0;
// 	for(value of this){
// 		if(!obj[value]){
// 			arr.push(value);
// 			obj[value]=1;
// 		}
// 	}
// 	return arr;
// }


// var arr=[1,2,34,32,2,3,3,22,32,2,2,1];
// console.log(arr.unique().sort(function(x,y){
// 	return x-y;
// }));

//----无缝滚动
// function scrollPic(){
// 	var i=0,len=0,timer;
// 	$('.all li').each(function(){
// 		len+=$(this).width();
// 		$(this).mouseover(function(){
// 			clearInterval(timer);
// 		}).mouseout(function(){
// 			move();
// 		});
// 	});
// 	$(".all").append($('.all li').eq(0).clone());
// 	move();
// 	function move(){
// 		timer=setInterval(function(){
// 			if(i>len){
// 				i=0;
// 			}
// 			$('.all').css({"left":-i});
// 			i+=1;
// 		},10);
// 	}
// }
// scrollPic();










