const divideAndSort = (num) => {
    const status = num.toString().split('').includes('0');
    let split = num.toString().split('0');
    let result = '';

    switch (typeof num) {
        case 'number':
            if (!status) {
                console.log(`deret angka (${num}) tidak dapat dirutkan karena tidak terdapat angka 0`)
            } else {
                split.map(e => {
                    let x = e.split('').sort().join('');
                    result += x;
                });
                console.log(`Output : ${parseInt(result)}`);
            }
            break;
        case 'bigint' :
            if (!status) {
                console.log(`deret angka (${num}) tidak dapat dirutkan karena tidak terdapat angka 0`)
            } else {
                split.map(e => {
                    let x = e.split('').sort().join('');
                    result += x;
                });
                console.log(`Output : ${BigInt(result)}`);
            }
            break;
        default :
            console.log("deret angka harus bertipe Number atau BigInt");
            break;
    }
}
  
divideAndSort(9007199254740991);
// add n in last parameter, to change variable to bigint type
divideAndSort(34824023435543210574326498230432105432123055123123n);