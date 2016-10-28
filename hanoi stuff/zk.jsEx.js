inlets = 1;

if (jsarguments.length>0){
	outlets = jsarguments[1];
}

function list() {
	var a = arrayfromargs(arguments);
	var base = a[0];
	var exp = a[1];
	outlet(0, Math.pow(base, exp));
}

function msg_float(val) {
	outlet(0, Math.pow(val, 2));
}

function msg_int(val) {
	outlet(0, Math.pow(val, 4));
}