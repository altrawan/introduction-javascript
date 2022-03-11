const searchName = (key, limit, cb) => {
    const name = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope'];

    if (typeof key !== 'string' || typeof limit !== 'number' || !cb || limit < 1) {
        return 'Pastikan semua data sudah sesuai dan limit tidak boleh kurang dari 1';
    }
    // untuk menyaring setiap element array yang mengandung nilai key = "an"    
    const filter = name.filter(e => e.toLowerCase().includes(key.toLowerCase()));
    return cb(filter, limit);
}

// untuk menentukan limit / batasan jumlah element array
const limitName = (filter, limit) => {
    if (filter.length === 0) {
        return 'Nilai tidak ditemukan';
    } else {
        return filter.slice(0, limit);
    }
}

console.log(searchName('la', 3));
console.log(searchName(['la'], 3, limitName));
console.log(searchName('xx', 3, limitName));
console.log(searchName('an', 3, limitName));