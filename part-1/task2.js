const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

if (typeof mtk !== "number" || typeof bahasaIndonesia !== "number" || typeof bahasaInggris !== "number" || typeof ipa !== "number") {
    console.log("Semua nilai harus number dan semua nilai tidak boleh kosong");
} else if (mtk < 0 || bahasaIndonesia < 0 || bahasaInggris < 0 || ipa < 0) {
    console.log("Semua nilai tidak boleh kurang dari 0");
} else if (mtk > 100 || bahasaIndonesia > 100 || bahasaInggris > 100 || ipa > 100) {
    console.log("Semua nilai tidak boleh lebih dari 100");
} else {
    const avg = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
    console.log(`Rata-rata = ${avg}`);

    const grade = avg >= 90 ? "A" : avg >= 80 ? "B" : avg >= 70 ? "C" : avg >= 60 ? "D" : "E";
    console.log(`Grade = ${grade}`);
}
