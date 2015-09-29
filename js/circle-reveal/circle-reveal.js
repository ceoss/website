/* Circle Reveal 
   Author: XOR Projects
   GitHub: https://github.com/xorprojects/Circle-Reveal-CSS
   License: MIT */
function circleRevealIni () {
	var doc = document;
	var elements = doc.getElementsByClassName('circle-reveal');
	for (var i = elements.length - 1; i >= 0; i--) {
		elements[i].addEventListener("mouseover", function(event) {
			var ele = event.target;
			while (true) {
				if (ele.classList.contains("circle-reveal")) {
					break;
				};
				ele = ele.parentElement;
			}
			for (var i = ele.children.length - 1; i >= 0; i--) {
				if (ele.children[i].classList.contains("circle-reveal-content")) {
					ele.children[i].classList.add("circle-reveal-active");
					break;	
				};
			};
		}, false);
		elements[i].addEventListener("mouseleave", function(event) {
			var ele = event.target;
			while (true) {
				if (ele.classList.contains("circle-reveal")) {
					break;
				};
				ele = ele.parentElement;
			}
			for (var i = ele.children.length - 1; i >= 0; i--) {
				if (ele.children[i].classList.contains("circle-reveal-content")) {
					ele.children[i].classList.remove("circle-reveal-active");
					break;	
				};
			};
		}, false);
	};
}
window.addEventListener("load", function load(event){
	window.removeEventListener("load", load, false);
	circleRevealIni();
},false);