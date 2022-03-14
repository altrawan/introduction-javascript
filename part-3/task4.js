import fetch from 'node-fetch';

const getApi = async(url) => {
  try {
      const response = await fetch(url);
      const data = await response.json();
      const result = data.map(e => `${e.name}`);
      console.log(result);
  } catch (err) {
      console.log(`Error : ${err.message}`);
  }
}
getApi('https://jsonplaceholder.typicode.com/users');