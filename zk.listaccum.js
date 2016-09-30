var listLength;
var propList = [];
var outList = [];

outlets = 1;

if (jsarguments.length>1){
	listLength = jsarguments[1];
} else {
	listLength = 5
}

//initialize stuff
var i = 0;
for(i = 0; i < listLength; i++){
	outList.push(-1.0);
}

function msg_float(value){
	outList.push(value);
	outList.splice(0, 1); //remove oldest thing
	outlet(0, outList);
}