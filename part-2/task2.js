const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'];

const searchName = (key, limit, cb) => {
    // validasi validasi untuk mengecek jika semua data yang dimasukkan belum sesuai.
    if (!key || !limit || !cb) {
        return 'Pastikan semua data sudah dimasukkan';
    } else if (typeof key !== 'string' || typeof limit !== 'number' || limit < 1) {
        return 'Pastikan semua data sudah sesuai dan limit tidak boleh kurang dari 1';
    }
    // untuk menyaring setiap element array yang mengandung nilai key = "an"    
    const filter = name.filter(e => e.toLowerCase().includes(key));
    return cb(filter, limit);
}

const limitName = (filter, limit) => {
    // untuk menentukan limit / batasan jumlah element array
    return result = filter.slice(0, limit);
}

console.log(searchName('la'));
console.log(searchName(['la'], 3, limitName));
console.log(searchName('la', -1, limitName));
console.log(searchName('an', 3, limitName));