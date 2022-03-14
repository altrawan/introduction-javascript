# Javascript Introduction Part 3 Task

## Tools and Technologies
1. HTML5
2. Javascript Programming Language
3. node-fetch
4. Visual Studio Code

## Tasks
1. Buatlah sambungan program menggunakan then catch dan juga try catch untuk mengecek hari kerja dari kode Asynchronous dibawah dan jelaskan penggunaan then catch dan try catch dengan memberikan komentar di bawahnya:
  ```
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
  ```
2. Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map.
  ```
  const getMonth = (callback) => {
    setTimeout(() => {
        let error = true
        let month = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000);
  }
  ```
3. Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1.
4. Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini.
   [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
   
## Support Developer
1. Follow my account Github
2. Add a Star 🌟 to this 👆 Repository

<b>Note</b> : if you have any ideas or suggestions for this project contact me at muhammadalifputra8888@gmail.com
