// PROGRAM 1
const joinBootcamp = (join) =>
  new Promise((resolve, reject) => {
    if (typeof join === "boolean") {
      if (join) {
        const bootcamp = {
          name: "Pijarcamp",
          batch: "Batch 1",
        };
        resolve(bootcamp);
      } else {
        reject(new Error("don't join bootcamp"));
      }
    } else {
      reject(new Error("join must be type boolean"));
    }
  });

const show = (bootcamp) => {
  const message = `Hey friend, I join bootcamp ${bootcamp.name} ${bootcamp.batch}`;
  return Promise.resolve(message);
};

joinBootcamp(true)
  .then(show)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// PROGRAM 2
const sayGreeting = (name, question) =>
  new Promise((resolve, reject) => {
    if (typeof name !== "string") {
      reject(new Error("name must be type string"));
    } else {
      const greeting = name ? `Hello ${name}` : "Hello!";
      const userQuestion = `The user asked: ${question}`;
      const result = `${greeting}
${userQuestion}`;
      resolve(result);
    }
  });

const magicEightBall = (result) => {
  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = "";
  switch (randomNumber) {
    case 0:
      eightBall = "It is certain";
      break;
    case 1:
      eightBall = "It is decidedly so";
      break;
    case 2:
      eightBall = "Reply hazy try again";
      break;
    case 3:
      eightBall = "Cannot predict now";
      break;
    case 4:
      eightBall = "Do not count on it";
      break;
    case 5:
      eightBall = "My sources say no";
      break;
    case 6:
      eightBall = "Outlook not so good";
      break;
    case 7:
      eightBall = "Signs point to yes";
      break;
  }
  return Promise.resolve(
    `${result}
Answer: ${eightBall}`
  );
};

sayGreeting("Alif", "Will I run Grandma's Marathon in June?")
  .then(magicEightBall)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
