var x = new Dict();
var r = [];
var mem = [];
var MEM_LEN = 10;
var diffs = [];

outlets = 2;

function bang() {
	x = new Dict();
	x.import_json("zk.rhythmicPatterns.json");
	var xjson = JSON.parse(x.stringify());
	r = xjson.rhythms
	var i = 0;
	diffs = [];
	for (i = 0; i < r.length; i++){
		diffs.push(-1);
	}
}

function list_sum(list){
	var l = 0;
	var sum = 0;
	for(l = 0; l < list.length; l++){
		sum = sum + list[l];
	}
	return sum;
}

function get_mean(offset, rhythm){
	var first = 0;
	var k = offset;
	var rhythm_len = rhythm.length;
	var base_proportion = mem[k];
	var differences = [];
	for(k = offset; k < mem.length; k++) {
		var expected = rhythm[(k - offset) % rhythm_len];
		var actual = mem[k] / base_proportion;
		differences.push(Math.abs(expected - actual));
	}
	post("debug: " + list_sum(differences) + "\n");
	return list_sum(differences) / differences.length;
}

function mean_diff(rhythm) {
	var r_len = rhythm.length;
	var j = 0;
	var min_mean = -1;
	for (j = 0; j <= r_len; j++) {
		var current_mean = get_mean(j, rhythm);
		if (current_mean < min_mean | min_mean === -1) {
			min_mean = current_mean;
		}
	}
	return min_mean;
}

function match() {
	var i = 0;
	for (i = 0; i < r.length; i++){
		diffs[i] = mean_diff(r[i]);
	}
}

function output() {
	//post("debug: " + diffs.length + "\n")
	var i = 0;
	var min_diff = -1;
	var min_index = -1;
	for (i = 0; i < diffs.length; i ++){
		var new_diff = diffs[i];
		if(min_diff === -1 | new_diff < min_diff){
			min_diff = new_diff;
			min_index = i;
		}
	}
	outlet(0, (min_index + 1));
	outlet(1, min_diff);
}

function msg_float(val) {
	mem.push(val);
	if (mem.length >= MEM_LEN) {
		mem.splice(0, 1);
	}
	match();
	output();
}