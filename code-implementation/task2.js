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