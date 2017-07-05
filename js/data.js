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

function tree(o){
	if(o==null){
		return 0;
	}
	var left = tree(o.left);
	var right = tree(o.right);
	return Math.max(left,right)+1;
}

console.log(tree(o));




