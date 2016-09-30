inlets = 1;
var min = 500;

function msg_float(value){
	var val = value;
	if(val > 0){
		while ((val - min) <= -20.0){
			val = val * 2;
		}
		outlet(0, val);
	}
}

function msg_int(value){
	//sets min
	if(min > 0){
		min = value;
	}
}