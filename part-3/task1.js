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

// =================================== Then Catch =================================== //
// Then : digunakan untuk menampilkan hasil jika kondisi yang dijalankan sukses / berhasil.
// Catch: digunakan untuk menangkap atau menampilkan hasil jika kondisi yang dijalankan gagal.

const cek = (day) => 
new Promise((resolve, reject) => {
    if (typeof day !== "string" || day === "") {
        reject(new Error("Nama hari harus bertipe string dan tidak boleh kosong"));
    } else if (day !== day.toLowerCase()) {
        reject(new Error("Nama hari harus ditulis dengan huruf kecil"))
    }
    resolve(day);
});

console.log("Loading...");
cek('senin')
    .then((day) => cekHariKerja(day))
    .then((day) => console.log(day))
.catch((error) => {
    console.log(error.message);
})
.finally(() => console.log("Done..."));

// =================================== Then Catch =================================== //

// =================================== Try Catch ==================================== //
// TRY digunakan untuk memasukkan atau menyisipkan kode yang akan di cek errornya.
// CATCH digunakan untuk menangkap pesan error yang terjadi di blok try jika terjadi error.

console.log("Loading...");
const cekHari = async (day) => {
    try {
        if (typeof day !== "string" || day === "") {
            console.log("Nama hari harus bertipe string dan tidak boleh kosong");
        } else if (day !== day.toLowerCase()) {
            console.log("Nama hari harus ditulis dengan huruf kecil");
        }
        const result = await cekHariKerja(day);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Done...");
    }
}

cekHari('senin');

// =================================== Try Catch ==================================== //