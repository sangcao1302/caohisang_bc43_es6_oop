import { Person } from "./Person.js";
export class Student extends Person{
    diemToan="";
    diemLy="";
    diemHoa="";
    tinhDiemTrungBinh(){
        let diemTrungBinh=(Number(this.diemToan)+Number(this.diemHoa)+Number(this.diemLy))/3
        return diemTrungBinh
     }
}


