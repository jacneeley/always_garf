console.log("the garf is here!");

var images = document.getElementsByTagName('img');

function releaseTheGarf(){
	for (i of images){
		i.src = `${browser.runtime.getURL("legarf.jpg")}`;
		i.alt = 'this is the garf';
	}
}

window.onload = function() {
	releaseTheGarf();
}