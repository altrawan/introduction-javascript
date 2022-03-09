let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
};
  
// SPREAD OPERATOR
const newData = {
    ...data,
    name: "Nur Muhammad Alif Putra Setiawan",
    email: "muhammadalifputra8888@gmail.com",
    hobby: ["Singing", "Reading", "Playing Badminton"]
};
console.log(newData);
  
// DESTRUCTURING
const { street, city } = newData.address;
console.log(`Street = ${street}, City = ${city}`);