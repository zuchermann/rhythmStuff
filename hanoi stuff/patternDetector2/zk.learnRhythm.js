inlets = 3;
var tempoTime;
var measure;
var beats;
var hits;
var rhythm;

function msg_int(val) {
	if(inlet === 0) { //left inlet
		if(val === 0) {
			//post("stop learning\n");
			finish();
		}
		else {
			//post("start learning\n");
			init();
		}
	}
	if(inlet === 1) {
		tempoTime = val;
	}
}

function init() {
	measure = 0;
	beats = [];
	hits = [];
	rhythm = [];
}

function normalize() {
	var i;
	for (i = 0; i < beats.length; i++) {
		beats[i] = beats[i] - measure;
	}
	for (i = 0; i < hits.length; i++) {
		hits[i] = hits[i] - measure;
	}
	measure = 0;
}

function finish() {
	normalize();
	var i;
	for(i = 0; i < hits.length; i++){
		rhythm.push((hits[i])/tempoTime);
		//post("hit: " + hits[i] + "\n");
		//post("tempoTime: " + tempoTime + "\n");
	}
	outlet(0, rhythm);
}

function msg_float(val) {
	if (inlet === 0){
		measure = val;
	}
	else if (inlet === 1) {
		beats.push(val);
	}
	else if (inlet === 2) {
		hits.push(val);
	}
}