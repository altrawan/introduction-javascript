const getMonth = (callback) => {
    setTimeout(() => {
        let error = true
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
        }
        let result = month.map((element, index) => {
            return `${index += 1}. ${element}\n`
        });
        console.log(result.toString().replaceAll(',', ''));
    }, 3000);
}

getMonth((err, month) => {
    showMonth(err, month);
})