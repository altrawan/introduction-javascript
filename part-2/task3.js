const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    // validasi untuk mengecek jika nilaiAwal dan nilaiAkhir bukan bertipe data number.
    if (typeof nilaiAwal !== 'number' || typeof nilaiAkhir !== 'number') {
        return 'nilai awal dan nilai akhir harus bertipe number';
    } else if (!Array.isArray(dataArray)) { // validasi jika dataArray bukan array
        return 'parameter ketiga harus berbentuk array';
    } else if (!dataArray.every(e => typeof e === 'number')) { // validasi untuk mengecek jika terdapat element array yang bukan number
        return 'Semua element array harus bernilai number';
    } else if (nilaiAwal > nilaiAkhir) { // validasi nilaiAwal tidak boleh lebih dari nilaiAkhir
        return 'Nilai akhir harus lebih besar dari nilai awal';
    } else if (dataArray.length < 6) { // validasi jika element array kurang dari 5
        return 'Jumlah angka dalam dataArray harus lebih dari 5';
    } else {
        // untuk menyaring element array jika element lebih besar atau sama dengan nilaiAwal dan element kurang dari atau sama dengan nilaiAkhir
        const hasil = dataArray.filter(e => e >= nilaiAwal && e <= nilaiAkhir);
        // validasi jika panjang element hasil === 0
        if (hasil.length === 0) return 'Nilai tidak ditemukan';
        // jika panjang element hasil !== 0 maka mengembalikkan nilai berupa element hasil yang sudah diurutkan
        return hasil.sort((a, b) => a - b);
    }
}

// console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
// console.log(seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]));
// console.log(seleksiNilai(5, 17 , [2, 25, 4]));
// console.log(seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]));
// console.log(seleksiNilai(5, 20, [true, undefined, "16", 1, null]));
// console.log(seleksiNilai("5", null, [1, 2, 4, 5]));
// console.log(seleksiNilai(5, 20, {
//     num1: 1,
//     num2: 2
// }));