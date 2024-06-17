console.log("the garf is here!");

var images = document.getElementsByTagName('img');

function releaseTheGarf(){
	for (elt of images){
		elt.src = `${browser.runtime.getURL("legarf.jpg")}`;
		elt.alt = 'this is the garf';
	}
}

window.onload = function() {
	releaseTheGarf();
}
