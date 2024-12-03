function minMax(arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let tab2=[];
	tab2.push(min,max);
	return tab2;
	
	
}

console.log(minMax([4, 8, 7, 2, 13]));