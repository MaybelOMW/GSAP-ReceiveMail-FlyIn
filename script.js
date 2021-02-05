function startAnimation() {
	var tl = new TimelineMax();
	let flip = document.querySelector('.flip');
	let letter = document.querySelector('.letter');
	let container = document.querySelector('.container');
	let lines = document.querySelector('.lines');

	// Envelope open
	function open(){
		flip.classList.add('open');
		setTimeout(function(){
			letter.classList.add('letterOpen');
			letter.style.zIndex = '7';
		}, 400);
	}

	tl.to(lines, 0.2, {display:"block",opacity:0.45}, "fade in");
	tl.to(container, 0.8, {display:"block",opacity:1.0,"transform": "translate(30px, 0px) rotate3d(0, 0, 1, 20deg)"}, "fade_in");
	tl.to(container, 0.8, {display:"block",opacity:1.0,"transform": "translate(30px, 0px) rotate3d(0, 0, 1, 10deg)"}, "fade_in");
	tl.to(container, 0.5, {display:"block",opacity:1.0,"transform": "translate(30px, 0px) rotate3d(0, 0, 1, 20deg)"});
	tl.to(container, 0.5, {display:"block",opacity:1.0,"transform": "translate(30px, 0px) rotate3d(0, 0, 1, 10deg)"});
	tl.to(container, 0.5, {display:"block",opacity:1.0,"transform": "translate(30px, 0px) rotate3d(0, 0, 1, 20deg)"});
	tl.to(container, 0.5, {display:"block",opacity:1.0,"transform": "translate(30px, 0px) rotate3d(0, 0, 1, 10deg)"});
	tl.to(container, 0.5, {display:"block",opacity:1.0,"transform": "translate(30px, 0px) rotate3d(0, 0, 1, 20deg)"});
	tl.to(container, 0.5, {display:"block",opacity:1.0,"transform": "translate(30px, 0px) rotate3d(0, 0, 1, 0deg)"}, "stop");
	tl.to(lines, 0.8, {display:"block",opacity:0.0}, "stop");
	tl.to(setTimeout(open, 4300));
	
	addEventListeners();
}

window.addEventListener("load", startAnimation);
