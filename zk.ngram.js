var ngrams = [];

outlets = 2;

function insert(ls){
	var degree = ls.length;
	var index = ls.slice(0, (ls.length - 1));
	var indexStr = index.toString();
	var newVal = ls[ls.length - 1];
	var newValStr = newVal.toString();
	if(ngrams[degree]){
		var ngram = ngrams[degree];
		if(ngram.hasOwnProperty(indexStr)){
			value = ngram[indexStr];
			if(value.hasOwnProperty(newValStr)){
				value[newValStr] = value[newValStr] + 1;
			}
			else{
				value[newValStr] = 1;
			}
		}
		else{
			ngram[indexStr] = {};
			ngram[indexStr][newValStr] = 1;
		}
	}
	else{
		ngrams[degree] = {};
	}
}

function getTransitions(weights){
	var trans = Object.keys(weights);
	var strOut = "";
	var tranIndex = 0;
	for(tranIndex = 0; tranIndex < trans.length; tranIndex++){
		tran = trans[tranIndex];
		strOut = strOut + " | " + tran + ":" + weights[tran];
	}
	return strOut;
}

function prob(num, pattern) {
	var ngram = ngrams[num];
	var predict = ngram[pattern.toString()];
	var choice = false;
	if (predict){
		var keys = Object.keys(predict);
		var sum = 0;
		var keyIndex = 0;
		for(keyIndex = 0; keyIndex < keys.length; keyIndex++){
			var key = (keys[keyIndex]);
			sum = sum + predict[key.toString()];
			//post(key + "->" + transitions + "\n");
		}
		if(sum !== 0){
			keyIndex = 0;
			var tally = 0;
			var inc = 1/sum;
			var rand = Math.random();
			for(keyIndex = 0; keyIndex < keys.length; keyIndex++){
				var key = (keys[keyIndex]);
				tally = tally + (predict[key.toString()] * inc);
				if (tally >= rand){
					choice = key;
					keyIndex = keys.length;
				}
			//post(key + "->" + transitions + "\n");
			}
		}
	}
	return choice;
}

function list() {
	var a = arrayfromargs(arguments);
	var i = 0;
	var probs = [];
	for (i = 1; i < a.length; i++){
		insert(a.slice(0, (i + 1)));
		var guess = prob((i + 1), a.slice((a.length - i), a.length));
		if(guess) {
			probs.push(guess);
		}
	}
	if(probs.length > 0){
		outlet(0, parseFloat(probs[probs.length - 1]));
	}
}