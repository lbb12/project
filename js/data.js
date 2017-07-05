var str = 'atmcdn';
var change = (str) => {
	var arr = str.split('');
	return arr.map(function(value,index,self){
		return value + value.toUpperCase();
	}).join('');
}

console.log(change(str));







