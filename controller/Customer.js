import {KhachHang} from "../models/Customer-config.js"
import {Customers} from "../models/Customers.js"
let khachhang=new KhachHang()
document.getElementById("btn-them").onclick = function () {
  let arrInputKH = document.querySelectorAll("input,textarea");
  var kh = new Customers();
  for (let index of arrInputKH) {
    let { id, value } = index;
    kh[id] = value;
  

  }
  khachhang.themKhachHang(kh)
 khachhang.sortName()
 khachhang.tableKH()
 khachhang.clearInput()
 
}
window.xoaKhachHang=function(xoaKH){
  khachhang.xoaKhachHang(xoaKH)
}
window.suaKhachHang=function(suaKH){
  khachhang.suaKhachHang(suaKH)
}

  khachhang.capNhat()
// =================================================//
// log-in indexhtml

