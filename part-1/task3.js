const printSegitiga = 5;

if (typeof printSegitiga !== "number" || printSegitiga < 3) {
    console.log("Data harus number dan tidak boleh kurang dari 3");
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

// KETERANGAN
/* 
Ubah perulangan internal menjadi (let j = i; j >= 1; j--)
Output :
5 4 3 2 1
4 3 2 1
3 2 1
2 1
1

Ubah perulangan eksternal menjadi (let i = 0; i <= printSegitiga; i++) dan internal menjadi (let j = printSegitiga; j > i; j--)
Output :
5 4 3 2 1
5 4 3 2
5 4 3
5 4
5 

Ubah result += `${i} `
Output
5 5 5 5 5
4 4 4 4
3 3 3
2 2
1
*/