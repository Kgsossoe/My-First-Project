function characterCount(string,char) {
	
	var count = 0;
	
	for (var i = 0; i < string.length; i++) {
		
		if (string[i] == char){
			
			count = count+1;
		}
	}
	
	return count;
}

console.log(characterCount("food" , "o"));