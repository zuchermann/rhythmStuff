inlets = 4;
var beatTime = 0;
var bufferLength = 0;
var noteBuffer = [];
var patterns = [];
var lastMeasure = 0;
var BIG_BOY = 1000;
var beatsPerMeasure = 4;

if(jsarguments.length > 0) {
	inlets = Math.max(jsarguments[1] + 3);
}

function zkPush(val) {
	noteBuffer.push(val);
	if (noteBuffer.length >= bufferLength) {
		noteBuffer.splice(0, 1);
	}
}

function minDist(prediction) {
	var i = 0;
	var result = [BIG_BOY, i];
	for(i = 0; i < noteBuffer.length; i++) {
		var actual = noteBuffer[i];
		var diff = Math.abs(prediction - actual);
		if(diff < result[0]) {
			result[0] = diff;
			result[1] = i;
		}
	}
	return result;
}

function lengthPenalty(diff) {
	//post("dif: "+diff+"\n");
	return Math.abs(diff) * 200.0;
}

function duplicatePenalty(first, last) {
	var i;
	var penalty = 0;
	for (i = first; i < last; i++) {
		var val = noteBuffer[i];
		var j;
		for(j = i + 1; j <= last; j++) {
			if(noteBuffer[j] === val){
				penalty = penalty + 200;
			}
		}
	}
	return penalty;
}

function closeness(pat) {
	var result = 0;
	var i;
	var first = 0;
	var last = 0;
	for (i = 0; i < pat.length; i++){
		var calcDist = minDist((pat[i] * beatTime) + lastMeasure);
		if(i === 0) {
			first = calcDist[1];
		}
		result = result + calcDist[0];
		last = calcDist[1];
	}
	//post(first);
	for (i = last; i < noteBuffer.length; i++) {
		var exp = (beatsPerMeasure * beatTime) + lastMeasure;
		if(Math.abs(noteBuffer[i] - exp) > 100) {
			last = i;
		}
	}
	result = result + lengthPenalty(pat.length - (last - first));
	result = result + duplicatePenalty(first, last);
	return result/pat.length;
}

function newMeasure(val) {
	//post("notes: " + noteBuffer + "\n");
	var patternIndex;
	var result =[];
	for (patternIndex = 0; patternIndex < patterns.length; patternIndex++) {
		result[patternIndex] = closeness(patterns[patternIndex]);
	}
	lastMeasure = val;
	return result;
}

function msg_float(val) {
	if (inlet === 0) {
		zkPush(val)
		//post (noteBuffer);
	}
	else if (inlet === 1) {
		var guesses = newMeasure(val);
		var guess = -1;
		var i;
		var min = 200;
		//post(guesses + "\n");
		for(i = 0; i < guesses.length; i++) {
			if(guesses[i] < min) {
				min = guesses[i];
				guess = i;
			}
		}
		outlet(0, guess);
	}
	else if (inlet === 2) {
		beatTime = val;
	}
}

function list() {
	var val = arrayfromargs(arguments);
	patterns[inlet - 3] = val;
	if (val.length + 1 >= bufferLength) {
		bufferLength = val.length + 2;
	}
	//post("new pattern: " + val + "\n");
}