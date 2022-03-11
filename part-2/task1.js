// 10 Method Built-in Function Array
// 01. concat() : untuk menggabungkan nilai array.
const fruit = ['apple', 'orange', 'grape'];
const newFruit = ['starfruit', 'pineapple', 'watermelon'];
const fruits = fruit.concat(newFruit);
// console.log(fruits);

// 02. splice() : untuk menambah atau menghapus elemen array
const city = ['New York', 'Boston', 'Washington DC', 'Los Angeles']; 
// di posisi aray kedua akan menambahkan string
city.splice(0, 2, 'Chicago', 'Las Vegas');
// console.log(city);

// 03. every() : untuk mengembalikan nilai true/false dalam kondisi yang dibuat
const ages = [18, 17, 16, 19];
const checkAge = (age) => {
    return age >= 17;
}
const age = ages.every(checkAge);
// console.log(age);

// 04. fill() : untuk menimpa / mengganti element array 'dapat ditentukan index array yang akan diubah'
const animals = ['cat', 'chicken', 'goat', 'cow', 'bird'];
const newAnimal = animals.fill('sheep', 0, 3);
// console.log(newAnimal);

// 05. filter() : untuk menyaring element array yang sesuai dengan kondisi yang ditentukan
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
const filter = planets.filter(e => e.toLowerCase().includes('er'));
// console.log(filter);

// 06. find() : untuk mencari element pertama array yang memenuhi kondisi
const number = [23, 24, 25, 26, 27];
const find = number.find(e => e >= 24);
// console.log(find);

// 07. pop() : untuk menghapus elemen terakhir dari array dan mengembalikkan element tersebut
const hobbies = ['swimming', 'reading', 'singing', 'dancing'];
const last = hobbies.pop();
// console.log(last);

// 08. reduce() : untuk mengembalikan nilai tunggal hasil dari kondisi yang dibuat
const grade = [89, 90, 88, 76];
const getSum = (total, num) => {
    return total + Math.round(num);
}
const average =  grade.reduce(getSum, 0) / grade.length;
// console.log(average);

// 09.shift() : untuk menghapus elemen pertama dari array dan mengembalikkan pertama tersebut
const myHobby = ['swimming', 'reading', 'singing', 'dancing'];
const first = myHobby.shift();
// console.log(first);

// 10.slice() : untuk mengekstrak / memotong bagian dari elemen array dan mengembalikan elemen baru
const vegetables = ['carrot', 'peppers', 'cucumber', 'potato', 'spinach', 'broccoli'];
const myFavorite = vegetables.slice(0, 3);
// console.log(myFavorite);

// RESULT
// JSON.stringify() = berfungsi untuk membuat mengkonversi javascript object ke string.
// const result = 
// `
// 01. Method Built-in Function concat()   = ${JSON.stringify(fruits)}
// 02. Method Built-in Function splice()   = ${JSON.stringify(removed)}
// 03. Method Built-in Function every()    = ${age}
// 04. Method Built-in Function fill()     = ${JSON.stringify(newAnimal)}
// 05. Method Built-in Function filter()   = ${JSON.stringify(filter)}
// 06. Method Built-in Function find()     = ${find}
// 07. Method Built-in Function pop()      = ${last}
// 08. Method Built-in Function reduce()   = ${average}
// 09. Method Built-in Function shift()    = ${first}
// 10. Method Built-in Function slice()    = ${JSON.stringify(myFavorite)}
// `
// console.log(result);