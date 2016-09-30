var counter = 0;
var outs;

if (jsarguments.length>1){
	outlets = jsarguments[1];
	outs = jsarguments[1];
}
else {
	outlets = 2;
	outs = 2;
}

function msg_float(value) {
	outlet(counter, value);
	counter = (counter + 1) % outs;
}