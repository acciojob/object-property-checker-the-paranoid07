const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
	if(sampleObject[key] !== undefined)
		return true;

	return false;
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
