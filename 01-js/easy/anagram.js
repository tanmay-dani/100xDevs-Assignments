/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let l1 = str1.length
  let l2 = str2.length

  let arr1 = str1.split('') //used split to split into characters
  let arr2 = str2.split('')
  arr1 = arr1.sort() //sorted the characters using sort()
  arr2 = arr2.sort()
  let string1 = arr1.join('') //join all elements of array into a string
  let string2 = arr2.join('')
  return string1==string2 //verify if the strings match 
}

module.exports = isAnagram;
let ans = isAnagram("tanmay" , "manayt") //returned true in this case
console.log (ans) 
