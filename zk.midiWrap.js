outlets = 1;

function wrap(num){
	var output = num;
	while(output < 0) {
		output += 12;
	}
	while(output > 127) {
		output -= 12;
	}
	return output;
}

function msg_int(value){
	var val = wrap(value)
	outlet(0, val);
}