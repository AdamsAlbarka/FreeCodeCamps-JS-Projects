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

//   Cash registrar

const currencyUnit = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  }
  
  
  function checkCashRegister(price, cash, cid) {
  
    let changeSum = cash * 100 - price * 100;
    let changeSumCheck = changeSum;
    let change = [];
    let status = '';
  
    let cidSum = 0;
    let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();
  
    filteredCid.forEach(elem => {
      let curr = elem[0];
      let currSum = elem[1] * 100;
      cidSum += currSum;
      let amount = 0;
      while (changeSum >= currencyUnit[curr] && currSum > 0) {
        amount += currencyUnit[curr];
        changeSum -= currencyUnit[curr];
        currSum -= currencyUnit[curr];
      }
      if (amount !== 0) {
        change.push([curr, amount / 100]);
      }
    });
  
    if (changeSum > 0) {
      status = 'INSUFFICIENT_FUNDS';
      change = [];
    } else if (changeSum == 0 && changeSumCheck == cidSum) {
      status = 'CLOSED';
      change = cid;
    } else {
      status = 'OPEN';
    }
    return { 'status': status, 'change': change };
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));