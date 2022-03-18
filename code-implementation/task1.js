// PROGRAM 1 - PENGECEKAN KATA PALINDROM
const palindrome = (teks) => {
  if (typeof teks !== "string" || teks === "") {
      console.log("teks harus bertipe string");
  } else {
      let x = teks.length - 1;
      let result = "";
      while(x >= 0) {
          result += teks[x];
          x--;
      }
      if (teks.toLowerCase() === result.toLowerCase()) {
          console.log(`${teks} : palindrome`)
      } else {
          console.log(`${teks} : bukan palindrome`)
      }
  }
}
palindrome("");
palindrome("Aa");
palindrome("Siang");
palindrome("Malam");

// PROGRAM 2 - PROGRAM MEMBALIK KALIMAT
const reverseWords = (word) => {
    if (typeof word === "string") {
        let split = word.split(" ");
        if (split.length < 2) {
            console.log("minimal 2 kata");
        } else {
            let result = "";
            let x = split.length - 1;
            for (let i = x; i >= 0; i--) {
                result += split[i] + " ";
            }
            console.log(result);
        }
    } else {
        console.log("kata harus bertipe string");
    }
  }
  
reverseWords(true);
reverseWords("Saya");
reverseWords("Saya Belajar javascript");