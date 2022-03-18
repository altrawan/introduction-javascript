const divideAndSort = (num) => {
    if (typeof num === 'number') {
        // MAKSIMUM NUMBER IS 9007199254740991 (16 DIGITS)
        if (Number.MAX_SAFE_INTEGER) {
            console.log("Deret angka melebihi maksimal number '9007199254740991'");
        } else {
            let split = num.toString().split(0);
            let result = "";
            split.map(e => {
                let x = e.split('').sort().join('');
                result += Number(x);
            });
            const hasil = parseInt(result);
            console.log(`Output : ${hasil}`);
        }
    } else if (typeof num === 'bigint') {
        let split = num.toString().split(0);
        let result = "";
        split.map(e => {
            let x = e.split('').sort().join('');
            result += Number(x);
        });
        let output = BigInt(result);
        console.log(`Output : ${output}`);
    } else {
        console.log("deret angka harus bertipe Number atau BigInt");
    }
  }
  
  divideAndSort(9907199254740999);
  // add n in last parameter, to change variable to bigint type
  divideAndSort(34824023435543210574326498230432105432123055123123n);