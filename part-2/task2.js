const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"];

const searchName = (key, limit, callback) => {
    if (typeof key !== "string" || typeof limit !== "number" || limit <= 0) {
        console.log("Pastikan semua data sudah sesuai dan limit tidak boleh kurang dari 1");
    } else {
        const filter = name.filter(check => check.toLowerCase().includes(key));
        callback(filter, limit);
    }
}

const limitName = (filter, limit) => {
    const result = filter.slice(0, limit);
    console.log(result);
}

searchName("an", 3, limitName);