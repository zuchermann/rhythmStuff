var listLength = 5;
var div = 4;
var propList = [];
var rhythmList = [];
var BIG_BOY = 9999;
var prev = BIG_BOY;

outlets = 2;

//initialize stuff
var i = 0;
for(i = 0; i < listLength; i++){
	rhythmList.push(0.0);
}

for(i = 0; i < div; i++) {
	var j = 0;
	for(j = 0; j < div; j++){
		propList.push((i+1)/(j+1));
	}
}

function msg_float(value){
	
	var closestMatch = BIG_BOY;
	var matchDiff = BIG_BOY;
	if(prev !== BIG_BOY){
		var prop = value / prev;
		for(i = 0; i < propList.length; i++){
			var testProp = propList[i];
			var newDiff = Math.abs(prop - testProp);
			outlet(1, newDiff);
			if(newDiff < matchDiff){
				matchDiff = newDiff;
				closestMatch = testProp;
			}
		}
	rhythmList.push(closestMatch);
	rhythmList.splice(0, 1); //remove oldest thing
	outlet(0, rhythmList);
	}
	prev = value;
}