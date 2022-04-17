/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text){
    //...create an object where i can save
    let count = 0;
    const container = { };
    
    //loop over the string entered and enter it in my container or just update the keys
    let textReady = text.toLowerCase();
    
    for (let i = 0; i < textReady.length; i++) {        
      if (!container[textReady[i]]) {
        container[textReady[i]] = 1;
      } else {
        container[textReady[i]]++;
      }
    }
    
    
    //loop over the keys to find what's being repeated
    for (let key in container) {
      if (container[key] > 1) {
        count++;
      } 
    }
    return count;
  }