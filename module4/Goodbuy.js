(function(window) {
	var speakGoodbye = "Good Bye";
	var sayGoodbye = function (name) {
  		console.log(speakGoodbye + " " + name);
	}
	
	window.sayGoodbye = sayGoodbye;

})(window);
