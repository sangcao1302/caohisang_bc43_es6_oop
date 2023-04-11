import { Employee } from "../models/Employee.js";
import { GiangVien } from "../models/Employee-config.js";
let giangvien=new GiangVien()
document.getElementById("btn-themGV").onclick = function () {
  let arrInputGV = document.querySelectorAll("input");
  var gv = new Employee();
  for (let index of arrInputGV) {
    let { id, value } = index;
    gv[id] = value;
  

  }
  giangvien.themGiangvien(gv)
  giangvien.sortName()
  giangvien.tableGV()
  giangvien.clearInput()
 
}
window.xoaGiangVien=function(xoaGV){
  giangvien.xoaGiangVien(xoaGV)
}
window.suaGiangVien=function(suaGV){
  giangvien.suaGiangVien(suaGV)
}

  giangvien.capNhat()
// =================================================//
// log-in indexhtml

