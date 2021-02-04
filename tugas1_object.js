var motor={
    merek:"Mio Z",
    muatan:"dua orang",
    warna:"Biru Metalic",
    gas:function(){
        return 'Motor Jalan'

    },
    rem:function(){
        return 'Motor Berhenti'
    }
}

document.write(`<li>Nama motor : ${motor.merek}</li>`);
document.write(`<li>Muatan motor : ${motor.muatan}</li>`);
document.write(`<li>Warna motor : ${motor.warna}</li>`);
document.write(`<li>Motor di gas : ${motor.gas()}</li>`)
document.write(`<li>Motor di rem : ${motor.rem()}</li>`);

document.write("<br>-----------------------------------------------------------------</br>")
var sepeda={
    merek:"Polygon",
    berat:"13,4 kg",
    warna:"Merah",
    gas:function(){
        return 'Sepeda Jalan'
    },
    rem:function(){
        return 'Sepeda Berhenti'
    }
}

document.write(`<li>Nama sepeda : ${sepeda.merek}</li>`);
document.write(`<li>Berat sepeda : ${sepeda.berat}</li>`);
document.write(`<li>Warna sepeda : ${sepeda.warna}</li>`);
document.write(`<li>Sepeda di pedal : ${sepeda.gas()}</li>`);
document.write(`<li>Sepeda di rem : ${sepeda.rem()}</li>`);

document.write("<br>-----------------------------------------------------------------</br>")

var tv={
    merek:"Mitochiba",
    ukuran:"19 Inch",
    jenis:"Tv tabung",
    nyala:function(){
        return 'Televisi nyala'
    },
    mati:function(){
        return 'Televisi mati'
    }

}

document.write(`<li>Merek televisi : ${tv.merek}</li>`);
document.write(`<li>Ukuran televisi : ${tv.ukuran}</li>`);
document.write(`<li>Jenis televisi : ${tv.jenis}</li>`);
document.write(`<li>Televisi on : ${tv.nyala()}</li>`);
document.write(`<li>Televisi off : ${tv.mati()}</li>`);


document.write("<br>-----------------------------------------------------------------</br>")

var handphone={
    merek:"Oppo A12",
    ukuran:"6.2",
    Sistem:"Android",
    penuh:function(){
        return 'Handphone menyala'
    },
    habis:function(){
        return 'Handphone mati'
    }

}

document.write(`<li>Merek handphone : ${handphone.merek}</li>`);
document.write(`<li>Ukuran handphone : ${handphone.ukuran}</li>`);
document.write(`<li>Sistem Operasi : ${handphone.Sistem}</li>`);
document.write(`<li>Baterai Penuh : ${handphone.penuh()}</li>`);
document.write(`<li>Baterai Habis : ${handphone.habis()}</li>`);

document.write("<br>-----------------------------------------------------------------</br>")

var kipas={
    merek:"Cosmos",
    berat:"12.788 Gram",
    ukuran:"16 inch",
    on:function(){
        return 'Kipas nyala'
    },
    off:function(){
        return 'Kipas mati'
    }

}

document.write(`<li>Merek kipas : ${kipas.merek}</li>`);
document.write(`<li>Berat kipas : ${kipas.berat}</li>`);
document.write(`<li>Ukuran kipas : ${kipas.ukuran}</li>`);
document.write(`<li>Kipas on : ${kipas.on()}</li>`);
document.write(`<li>Kipas off : ${kipas.off()}</li>`);
