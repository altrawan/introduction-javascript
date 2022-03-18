const pijarFood = (harga, voucher, jarak, pajak) => {
    if (typeof harga !== 'number' || harga < 1) {
        console.log("Harga harus bertipe data 'number' dan tidak boleh kurang dari '1'");
    } else if (typeof voucher !== 'string' || voucher === "" && typeof voucher !== 'boolean') {
        console.log("Voucher harus bertipe data 'string' atau 'boolean'");
    } else if (typeof jarak !== 'number' || jarak < 1) {
        console.log("Jarak harus bertipe data 'number' dan tidak boleh kurang dari '1'");
    } else if (typeof pajak !== 'boolean') {
        console.log("Pajak harus bertipe data 'boolean'");
    } else {
        const diskon = discount(harga, voucher);
        const ongkir = deliveryOrder(jarak);
        const ppn = tax(harga, pajak);
        let subTotal = harga - diskon + ongkir + ppn;
        console.log(
`Harga       : Rp.${new Intl.NumberFormat('id-ID').format(harga)}
Potongan    : Rp.${new Intl.NumberFormat('id-ID').format(diskon)}
Biaya Antar : Rp.${new Intl.NumberFormat('id-ID').format(ongkir)}
Pajak       : Rp.${new Intl.NumberFormat('id-ID').format(ppn)}
SubTotal    : Rp.${new Intl.NumberFormat('id-ID').format(subTotal)}`)
        
    }    
}

const discount = (harga, voucher) => {
    switch (voucher) {
        case "PIJARFOOD5":
            if (harga >= 50000) {
                let diskon = 50 / 100 * harga;
                return diskon >= 50000 ? 50000 : diskon;
            }
            console.log(`Voucher ${voucher} minimal pembelian Rp.50000, dilanjutkan tanpa diskon`);
            return 0;
        case "DITRAKTIRPIJAR":
            if (harga >= 30000) {
                let diskon = 60 / 100 * harga;
                return diskon >= 25000 ? 25000 : diskon;
            }
            console.log(`Voucher ${voucher} minimal pembelian Rp.30000, dilanjutkan tanpa diskon`);
            return 0;
        case false:
            return 0;
        default:
            console.log(`Voucher ${voucher} tidak ditemukan, dilanjutkan tanpa diskon`);
            return 0;
    }
}

const deliveryOrder = (jarak) => {
    return jarak <= 2 ? 5000 : (jarak - 2) * 3000 + 5000;
}

const tax = (harga, pajak) => {
    return pajak ? 5 / 100 * harga : 0;
}

pijarFood(500, 'PIJARFOOD5', 5, true);
pijarFood(75000, null, 5, true);
pijarFood(75000, 'PIJARFOOD', 5, null);
pijarFood(75000, 'PIJARFOOD5', 5, true);
pijarFood(25000, 'PIJARFOOD5', 2, true);
pijarFood(30000, 'DITRAKTIRPIJAR', 5, true);