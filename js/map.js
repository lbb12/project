//模拟java的Map数据结构；
function Map(){
	var obj = {};
	this.put = function(key,value){
		obj[key] = value;
	};
	this.size = function(){
		var count = 0;
		for(var attr in obj){
			count ++;
		}
		return count;
	};
	this.get = function(key){
		if(obj[key] || obj[key] === 0 || obj[key] === null){
			return obj[key];
		}else{
			return null;
		}
	};
	this.eachMap = function(fn){
		for(var attr in obj){
			fn(attr,obj[attr]);
		}
	}
}
var map = new Map();
map.put('001','a');
map.put('002','b');
console.log(map.get('002'));

map.eachMap(function(key,value){
	console.log(key,value);
});

