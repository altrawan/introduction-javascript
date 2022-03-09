const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"];

const searchName = (key, limit, callback) => {
    if (typeof key !== "string" || limit === "") {
        console.log("Key must be string and cannot be null");
    } else if (typeof limit !== "number" || limit <= 0) {
        console.log("Limit must be number and more than 0");
    } else {
        const filter = name.filter(check => check.toLowerCase().includes(key));
        callback(limit, filter);
    }
}

const limitName = (limit, filter) => {
    const result = filter.slice(0, limit);
    console.log(result);
}

searchName("an", 3, limitName);