const printSegitiga = 5;

if (typeof printSegitiga !== "number" || printSegitiga <= 0) {
    console.log("Data harus number dan tidak boleh kurang dari 1");
} else {
    for (let i = printSegitiga; i > 0; i--) {
        let result = "";
        for (let j = 1; j <= i; j++) {
            result += `${j} `;
        }
        console.log(result);
    }
}