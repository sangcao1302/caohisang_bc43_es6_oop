import { Person } from "./Person.js";
export class Employee extends Person{
    soNgayLamViec="";
    luongTheoNgay="";
    tinhLuong(){
        let luong=Number(this.soNgayLamViec)*Number(this.luongTheoNgay)
        return luong
    }
}