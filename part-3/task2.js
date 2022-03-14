const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000);
}

const showMonth = (err, month) => {
    setTimeout(() => {
        if (err) {
            console.log(err.message);
        } else {
            month.map((e, i) => console.log(`${i += 1}. ${e}`));
        }
    }, 2000);
}

getMonth((err, month) => showMonth(err, month));