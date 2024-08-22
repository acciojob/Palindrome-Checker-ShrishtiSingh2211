// complete the given function

function palindrome(str){
	let cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Step 2: Check if the string is the same as its reverse
    let reversedString = cleanedString.split('').reverse().join('');
    
    return cleanedString === reversedString;

}
module.exports = palindrome
