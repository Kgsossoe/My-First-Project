function largestValue() {
	
	let Array = [4,6,3,1,16,13,26,9]
	let max = Array[0]
	
	for (let i=0 ; i < Array.length ; i++) {
		if( Array[i] > max ) {
			max = Array[i]
		}
	}
	return max;
}

console.log('The largest value in the list is: ' + largestValue());