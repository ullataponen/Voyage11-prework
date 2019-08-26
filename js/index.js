/*jshint esversion: 6 */

// Source: W3 School's How TO - Scroll Back To Top Button tutorial: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// JS Smooth scroll
// Vanilla JavaScript Scroll to Anchor
// @ https://perishablepress.com/vanilla-javascript-scroll-anchor/

(function() {
	scrollTo();
})();

function scrollTo() {
	const links = document.querySelectorAll('.scroll');
	links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}


// THE FOLLOWING CODE ONLY FUNCTIONS ON THE FIRST ITEM OF THE ARRAY
// Parallax code, modified from: "Smooth Parallax Scrolling" by Kirupa Chinnathambi (https://www.youtube.com/watch?v=LsU6HGwaqIE)
// window.addEventListener("DOMContentLoaded", scrollLoop, false);
//
// var backgroundImg = [document.querySelector("#heading-img"), document.querySelector("#service-img"), document.querySelector("#contact-img")];
//
// var xScrollPosition;
// var yScrollPosition;
//
// function scrollLoop(e) {
//   xScrollPosition = window.scrollX;
//   yScrollPosition = window.scrollY;
//
//   for (var i = 0; i < backgroundImg.length; i++) {
//     if (isPartiallyVisible(backgroundImg[i])) {
//       setTranslate(0, yScrollPosition * -0.2, backgroundImg[i]);
//     }
//   }
//   requestAnimationFrame(scrollLoop);
// }
// function setTranslate(xPos, yPos, el) {
//   el.style.transform ="translate3d(" + xPos + ", " + yPos + "px, 0";
// }
//
// function isPartiallyVisible(el) {
//     var elementBoundary = el.getBoundingClientRect();
//
//     var top = elementBoundary.top;
//     var bottom = elementBoundary.bottom;
//     var height = elementBoundary.height;
//
//     return ((top + height >= 0) && (height + window.innerHeight >= bottom));
// }
