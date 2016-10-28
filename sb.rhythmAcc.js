inlets = 1;
outlets = 1;

var props = [0.25, 0.5, 1.0, 2.0, 4.0];
var memory = [0, 0]

function msg_float(val) {
	memory[1] = memory[0];
	memory[0] = val;
	var proportion = memory[0]/memory[1];
	var prop;
	var min;
	for (prop in props) {
		if (min) {
			var diff = Math.abs(props[prop] - proportion);
			if (diff < min) {
				min = diff;
			}
		}
		else {
			min = Math.abs(props[prop] - proportion);
		}
		//post(proportion + "\n");
	}
	post(min + "\n");
};