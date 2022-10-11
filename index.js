// PALINDROME CHECKER

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}
  palindrome("A man, a plan, a canal. Panama");

// Roman Numeral Converter

function convertToRoman(num) {
    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let arabic = [1000, 900, 500, 400, 100,  90,   50,  40,   10,   9,   5,   4,    1];
    let index = 0;
    let result = "";
    while (num > 0) {
      if (num >= arabic[index]) {
        result += roman[index];
        num -= arabic[index];
      } else index++;
    }
  
    return result;
  }