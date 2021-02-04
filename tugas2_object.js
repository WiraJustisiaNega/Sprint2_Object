var jualMobil ={
    iklan:function(){
        document.write(`BU, saya ${this.nama}, jual mobil ${this.merek}, tahun ${this.tahun}, bekas`)
    }
}
var a = Object.create(jualMobil);
            a.nama = " Tompel ";
            a.merek = "Lamborgini";
            a.tahun = 2022;
            a.iklan();