window.onhashchange=function(event){
	var newhash = event.newURL.split("#")[1];
	var oldhash = event.oldURL.split('#')[1];
	console.log(newhash,oldhash);
	document.getElementById(oldhash).style.display = 'none';
	document.getElementById(newhash).style.display = 'block';
}