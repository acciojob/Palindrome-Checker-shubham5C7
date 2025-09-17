// complete the given function

function palindrome(str){
let arr = str.split("");
	let left = 0;
	let right =  arr.length-1;

	while(left <= right){
		if(arr[left] != arr[right]){
			return false;
		}
		left++;
		right--;
	}
	return true;
}
module.exports = palindrome
