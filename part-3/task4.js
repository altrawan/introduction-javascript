import fetch from "node-fetch";

const getApi = async (url) => {
  try {
    if (typeof url === 'string' || url === '') {
      const response = await fetch(url);
      const data = await response.json();
      data.map((e, i) => console.log(`${(i += 1)}. ${e.name}`));
    } else {
      throw Error("URL harus bertipe string dan tidak boleh kosong");
    }
  } catch (err) {
    console.log(`Error : ${err.message}`);
  }
};
getApi("");
