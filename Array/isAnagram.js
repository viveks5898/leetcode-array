let s = "anagram";
let t = "nagaram";

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

 let freqS = {}
 let freqT = {}
  
 for(let char of s){
freqS[char] = (freqS[char] || 0) || 1
}
  
for(let char of t){
    freqT[char] = (freqT[char] || 0) || 1
    }
    console.log(freqT, freqS)
      
for(let char of s){
    if(freqT[char] !== freqS[char]) return false; 
    }
  return true; // If all frequencies match, strings are anagrams
};

console.log(isAnagram(s, t)); // Output: true
