var Bob = function() {};

Bob.prototype.hey = function(input) {
	var question = function (input) {
		//last character is a ?
		if (/?$/.test(input)) {
			return true;
		};
	};

	var yelling = function (input) {
		//all caps or last character is exclamation & there are caps/numbers
		if (/[A-Z0-9]+[A-Z0-9]+[!]\b/.test(input)) {
			return true;
		};
	};

	var mute = function(input) {
		//nothing or whitespace
		if (input == ("") || input == whitespace) {
			return true;
		};
	};

	if (question == true) {
		return("Sure.");
	} else if (yelling == true) {
		return("Whoa, chill out!");
	} else if (mute == true) {
		return("Fine. be that way!");
	} else {
		return("Whatever.");
	};
};

module.exports = Bob;
