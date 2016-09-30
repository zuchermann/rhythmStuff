outlets = 1;

var prev = false;

function msg_int(value) {
	if(prev){
		var diff = value - prev;
		outlet(0, diff);
	}
	prev = value;
}