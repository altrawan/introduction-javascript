const printSegitiga = 5;

if (typeof printSegitiga !== "number" || printSegitiga <= 0) {
    console.log("Data harus number dan tidak boleh kurang dari 1");
} else {
    /* let i = 5; i > 0; i--
    perulangan eksternal digunakanan untuk membuat batas perulangan angka. */
    for (let i = printSegitiga; i > 0; i--) {
        let result = ""; // let result = "" untuk menampung hasil perulangan internal
        /* let j = 1; j <= i; j++
        nilai i akan terus berkurang dimulai dari angka 5, lalu 4, 3, 2 terakhir sesuai dengan kondisi i > 0 yaitu angka 1 */
        for (let j = 1; j <= i; j++) {
            result += `${j} `;
            // untuk membuat hasil perulangan tampil horizontal.
        }
        // menampilkan hasil perulangan internal
        console.log(result);
    }
}