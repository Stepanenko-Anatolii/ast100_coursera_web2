(function(window) {
	var speakHello = "Hello";
	var sayHello = function (name) {
		console.log(speakHello + " " + name);
	}

	window.sayHello = sayHello;

})(window);
