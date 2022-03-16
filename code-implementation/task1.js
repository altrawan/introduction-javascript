const palindrome = (teks) => {
  if (typeof teks !== "string") {
      console.log("teks harus bertipe string");
  } else if (teks.length < 3) {
      console.log("teks minimal 3 karakter");
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
palindrome("Malam")