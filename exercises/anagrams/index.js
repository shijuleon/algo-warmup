// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) == cleanString(stringB);
}

function cleanString(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// function anagrams(stringA, stringB) {
//     let charMap1 = {};
//     let charMap2 = {};

//     for (let ch of stringA.replace(/[^\w]/g, "").toLowerCase()){
//         charMap1[ch] = charMap1 + 1 || 1;
//     }
    
//     for (let ch of stringB.replace(/[^\w]/g, "").toLowerCase()){
//         charMap2[ch] = charMap2 + 1 || 1;
//     }

//     if (Object.keys(charMap1).length !== Object.keys(charMap2).length){
//         return false;
//     }

//     for (let ch in charMap1){
//         if (charMap1[ch] !== charMap2[ch]){
//             return false;
//         }
//     }

//     return true;
// }

module.exports = anagrams;
