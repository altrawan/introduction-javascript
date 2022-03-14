const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}

// IMPLEMENTASI async/await
const cekHari = async (day) => {
    try {
        if (typeof day !== "string") {
            console.log("Day name must be string");
        }  else if (day !== day.toLowerCase()) {
            console.log("Day name must be lowercase");
        }
        const result = await cekHariKerja(day);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

cekHari('senin');
// TRY digunakan untuk memasukkan atau menyisipkan kode yang akan di cek errornya.
// CATCH digunakan untuk menangkap pesan error yang terjadi di blok try jika terjadi error.

// IMPLEMENTASI Promise (then catch)
const cek = (day) => 
new Promise((resolve, reject) => {
    if (typeof day !== "string") {
        reject(new Error("Day name must be string"));
    } else if (day !== day.toLowerCase()) {
        reject(new Error("Day name must be lowercase"))
    }
    resolve(day);
});

cek('senin')
    .then((day) => cekHariKerja(day))
    .then((day) => console.log(day))
.catch((error) => {
    console.log(error.message);
});
// THEN digunakan untuk menampilkan hasil jika kondisi yang dijalankan sukses / berhasil.
// CATCH digunakan untuk menangkap atau menampilkan hasil jika kondisi yang dijalankan gagal.