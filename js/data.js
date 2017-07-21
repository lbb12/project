var o = {
	value:1,
	left:{
		value:2,
		left:{
			value:3,
			left:{
				value:0,
				left:null,
				right:null
			},
			right:null
		},
		right:{
			value:5,
			left:null,
			right:null
		}
	},
	right:{
		value:3,
		left:{
			value:4,
			left:null,
			right:null
		},
		right:{
			value:3,
			left:null,
			right:null
		}
	}
};
//找路径
function findPath(o,i){
	if(o == null){
		return;
	}
	var arr =[];
	var currentSum = 0;
	findpath(o,i,currentSum,arr);
}

function findpath(o,i,currentSum,arr){
	currentSum += o.value;
	arr.push(o.value);
	if(o.left==null&&o.right==null){
		if(currentSum==i){
			console.log(arr);			
		}
	}
	if(o.left!=null){
		findpath(o.left,i,currentSum,arr);
	}
	if(o.right!=null){
		findpath(o.right,i,currentSum,arr);
	}
	arr.pop();
}

findPath(o,7);


//深度
function treeDeep(o){
	if(o==null){
		return 0;
	}
	var left = treeDeep(o.left);
	var right = treeDeep(o.right);
	return Math.max(left,right)+1;
}
console.log(treeDeep(o));

