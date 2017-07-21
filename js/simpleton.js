var factory = function(type,content){
	return new factory[type](content);
}

factory.java = function(content){
	this.content = content;
	(function(content){
		var div = document.createElement('div');
		div.innerHTML = content;
		div.style.cssText = 'background:red;color:#fff;';
		document.getElementById('box').appendChild(div);
	})(content)
};
factory.ui = function(content){
	this.content = content;
	(function(content){
		var div = document.createElement('div');
		div.innerHTML = content;
		div.style.cssText = 'background:blue;color:#fff;';
		document.getElementById('box').appendChild(div);
	})(content)
};
factory.php = function(content){
	this.content = content;
	(function(content){
		var div = document.createElement('div');
		div.innerHTML = content;
		div.style.cssText = 'background:green;color:#fff;';
		document.getElementById('box').appendChild(div);
	})(content)
};
var f = factory('php','php very fast');











