const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    // validasi untuk mengecek jika semua data yang dimasukkan belum sesuai.
    if (typeof nilaiAwal !== 'number' || typeof nilaiAkhir !== 'number' || Array.isArray(dataArray) === false) {
        return 'Pastikan semua data sudah sesuai';
    } else if (nilaiAwal > nilaiAkhir) { // validasi nilaiAwal tidak boleh lebih dari nilaiAkhir
        return 'Nilai akhir harus lebih besar dari nilai awal';
    } else if (dataArray.length < 5) { // validasi jika element array kurang dari 5
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

console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(5, 17 , [2, 25, 4]));
console.log(seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]));