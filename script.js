// complete the given function

function palindrome(str){
	 let cleaned = str.toLowerCase();
	let left = 0;
	   let right = cleaned.length - 1;

	while(left <= right){
		if(cleaned[left] !== cleaned[right])){
			return false;
		}
		left++;
		right--;
	}
	return true;
}
module.exports = palindrome
