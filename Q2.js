// Write a javascript function that takes 
// an array of numbers and a target number. 
// The function should find two different numbers 
// in the array that, when added together, give the 
// target number. For example: answer([1,2,3], 4)should 
// return [1,3]

let arr=[1,2,3,4,5,6]
function arrSum(arr,target){
	arr.forEach(function(num,i){
		for(let x=1;x<=arr.length;x++){
			if (arr[i]+arr[i+x]===target){
				let newArr=[arr[i],arr[i+x]];
				console.log(newArr);
				return newArr;
			}
		}
	});
}
target=9;
arrSum(arr,target);

// [3,6]
// [4,5]
