//sets number of inputs
inlets = 1;

//how you get args
if (jsarguments.length > 1) {
	outlets = jsarguments[1];
}

//CHANGEME!
function doStuff(bng){
}

function bang() {
	//sends output out the first (or leftmost) outlet
	doStuff(true);
	outlet(0, true);
}