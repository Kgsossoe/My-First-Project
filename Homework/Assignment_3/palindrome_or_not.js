function palindrome_or_not(phrase) {
	
	var vr = 0;
	var palindrome = true;
	
	while (vr < (phrase.length/2)) {
		if (phrase[vr] !== phrase[phrase.length-1-vr]) {
			
			console.log(phrase + " is not a palindrome.")
			palindrome = false;
			break;
		}
		vr++;
	}
	if (palindrome) {
		console.log(phrase + " is a palindrome.")
	}
}

palindrome_or_not("level");