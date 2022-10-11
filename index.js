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

//   Caesar Cipher in Javascript

function rot13(str) {

const alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let ans="";
  for(let i=0;i<str.length; i++){

    const char=str[i];
    if(char===" " || char==="!" || char==="?" || char==="."){
      ans+=char;
    }
    else{
         const val=alpha.indexOf(str[i]);
         const new_val=(val+13)%26;
         ans+=alpha[new_val];
    }
  }
  return ans;
}


rot13("SERR PBQR PNZC");



// Telephone Number Validator

function telephoneCheck(str) {
    let regExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/
    return regExp.test(str);
  }
  
  console.log(telephoneCheck("555-555-5555"));