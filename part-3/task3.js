// PROGRAM 1 - PROMISE PADA REQUEST DATA USER
const isValidUser = (username, password) =>
  new Promise((resolve, reject) => {
    if (typeof username !== "string" || typeof password !== "string") {
      reject(new Error("Username atau Password harus bernilai string"));
    } else if (username.length < 3 || password.length > 6) {
      reject(
        new Error("Username minimal 3 digit dan Password minimal 6 digit")
      );
    } else {
        setTimeout(() => {
            let success = true;
            resolve(success);
        }, 4000);
    }
});

const getRequest = (success) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        const users = [
          {
            id: 1,
            name: "Satria",
            username: "satria06",
            email: "satria@gmail.com",
            password: "S12345",
          },
          {
            id: 2,
            name: "Rizki",
            username: "rizki07",
            email: "rizki@gmail.com",
            password: "R12345",
          },
          {
            id: 3,
            name: "Ayi",
            username: "ayi08",
            email: "ayi@gmail.com",
            password: "A12345",
          },
        ];
        if (success) {
            resolve(users);
        } else {
            reject(new Error("Gagal menampilkan list user"))
        }
    }, 3000);
});

const checkUser = (users, username, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        const user = users.find(
            (user) => user.username === username && user.password === password
        );
        if (user) {
            resolve(user);
        } else {
            reject(new Error("Username atau Password tidak ditemukan"));
        }
    }, 2000);
});

const sendRequest = (user) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
`Selamat ${user.name} request data anda berhasil
Berikut informasi data anda:
    1. ID         = ${user.id}
    2. Nama       = ${user.name}
    3. Username   = ${user.username}
    4. Email      = ${user.email}
    5. Password   = ${user.password}`);
    }, 1000);
});

let username = "satria06";
let password = "S12345";
const a = isValidUser(username, password).then((success) => getRequest(success));
const b = a.then((users) => checkUser(users, username, password));
const c = b.then((name) => sendRequest(name))
Promise.all([a, b, c])
  .then()
  .catch((error) => {
    console.log(error.message);
});

// PROGRAM 2 - MENENTUKAN NILAI RATA-RATA UN DAN MENAMPILKAN GRADENYA
const getAverage = (bahasaIndonesia, mtk, bahasaInggris, ipa) =>
new Promise ((resolve, reject) => {
    const data = bahasaIndonesia || mtk || bahasaInggris || ipa;
    if (typeof bahasaIndonesia !== "number" || typeof mtk !== "number" ||  typeof bahasaInggris !== "number" || typeof ipa !== "number") {
        reject(new Error("Semua nilai harus bertipe number"));
    } else if (data < 0 || data > 100) {
        reject(new Error("Range semua nilai 0 - 100"));
    } else {
        setTimeout(() => {
            const avg = (bahasaIndonesia + mtk + bahasaInggris + ipa) / 4;
            console.log(`Rata-rata = ${avg}`);
            resolve(avg)
        }, 3000);
    }
})

const getGrade = (avg) =>
new Promise ((resolve, reject) => {
    setTimeout(() => {
        const grade = avg >= 90 ? "A" : avg >= 80 ? "B" : avg >= 70 ? "C" : avg >= 60 ? "D" : "E";
        console.log(`Grade = ${grade}`);
        resolve(grade);
    }, 4000);
})

const getResult = (grade) => 
new Promise ((resolve, reject) => {
    setTimeout(() => {
        let result = "";
        switch(grade) {
            case "A":
                result = "Sangat Baik";
                break;
            case "B":
                result = "Baik";
                break;
            case "C":
                result = "Cukup";
                break;
            case "D":
                result = "Kurang";
                break;
            default:
                result = "Sangat Kurang";
                break;
        }
        console.log(`Keterangan = ${result}`);
    }, 2000);
})

getAverage(80, 90, 81, 90)
    .then((avg) => getGrade(avg))
    .then((result) => getResult(result))
.catch((error) => {
    console.log(error.message);
});