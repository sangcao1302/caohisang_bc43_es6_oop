// import {Employee} from "../models/Employee.js"
// import {Customers} from "../models/Customers.js"
// import { Employee } from "../models/Employee.js";
import { SinhVien } from "../models/Student-config.js";
import { Student } from "../models/Student.js";
//==================SINHVIEN==============================//
let sinhvien=new SinhVien()

document.getElementById("submit").onclick = function () {
  let arrInputSV = document.querySelectorAll("input");
  var sv = new Student();
  for (let index of arrInputSV) {
    let { id, value } = index;
    sv[id] = value;
  

  }
  sinhvien.themSinhvien(sv)
  sinhvien.sortName()
  sinhvien.tableSV()
  sinhvien.clearInput()
 
}
window.xoaSinhVien=function(xoa){
  sinhvien.xoaSinhVien(xoa)
}
window.suaSinhVien=function(sua){
  sinhvien.suaSinhVien(sua)
}

  sinhvien.capNhat()


  


// log-in indexhtml
// document.getElementById("submit").onclick = function () {
//   var regexGV = /^GV-[0-9].{5}$/;
//   if (regexGV.test(document.querySelector("#maSo").value)) {
//     document.getElementById("submit").href = "GiangVien.html";
//   }
//   var regexSV = /^SV-[0-9].{5}$/;
//   if (regexSV.test(document.querySelector("#maSo").value)) {
//     document.getElementById("submit").href = "SinhVien.html";
//   }
//   var regexKH = /^KH-[0-9].{5}$/;
//   if (regexKH.test(document.querySelector("#maSo").value)) {
//     document.getElementById("submit").href = "KhachHang.html";
//   }
// };

// ==================SINHVIEN==============================//

// -------------------------------------//

// =====================SINHVIEN======================//


// =====================GIANGVIEN======================//

// let arrGV=[]
// document.getElementById("submit").onclick = function () {
//   let arrInputGV = document.querySelectorAll("input","textarea");
//   var gv = new Employee();
//   for (let index of arrInputGV) {
//     let { id, value } = index;
//     gv[id] = value;
    
//   }
//   arrGV.push(gv)
//   sortName()
//   tableGV()
//   clearInputSV()
  
// }

// var tableGV=()=>{
//   let htmlStringGV=""
  
//   for (let index of arrSV){
//     var gv=new Employee()
//     Object.assign(gv,index)
//     htmlStringGV += `
//     <tr>
//         <td>${gv.hoTen}</td>
//         <td>${gv.diaChi}</td>
//         <td>${gv.maSo}</td>
//         <td>${gv.email}</td>
//         <td>${gv.soNgayLamViec}</td>
//         <td>${sv.luongTheoNgay}</td>
//         <td>${gv.tinhLuong()}</td>
//         <td>
//             <button class="btn btn-danger" onclick="xoaSinhVien('${gv.hoTen}')">X</button>

//             <button class="btn btn-primary" onclick="suaSinhVien('${gv.hoTen}')">
//             <i class="fa fa-edit"></i>
//             </button>
//         </td>
//     </tr>
// `
//   }

  
//   document.getElementById("tBody").innerHTML=htmlStringGV
// }
// // window.xoaSinhVien=(xoaSV)=>{
// //   for (let index in arrSV)
// //   {
// //     if(arrSV[index].hoTen===xoaSV)
// //     {
// //       arrSV.splice(index,1)
// //     }
// //   }
// //   tableSV()
// // }
// var clearInputGV=()=>{
//   let arrInputGV = document.querySelectorAll("input");
//   for (let index of arrInputGV){
//     index.value=""
//   }
// }
// // window.suaSinhVien=(suaSV)=>{
// //   let arrInputSV = document.querySelectorAll("input");

// //   for (let i of arrSV)
// //   {
// //     if(i.hoTen===suaSV)
// //    {
// //     for (let index of arrInputSV){
// //       let{id}=index
// //       index.value=i[id]
// //     }
// //    }
// //   }
  

// // }

// // document.getElementById("capNhat").onclick=()=>{

// //   let arrInputSV = document.querySelectorAll("input");
// //   var svUpdate = new Student();
// //   for (let index of arrInputSV) {
// //     let { id, value } = index;
// //     svUpdate[id] = value;
    
// //   }
// //   for (let i of arrSV)
// //   {
// //     // ============C1============
// //     // for (let index of arrInputSV){
// //     //   if(arrSV[i].hoTen===svUpdate.hoTen){
// //     //     let { id, value } = index;
      
// //     //     arrSV[i][id]=value
// //     //     console.log( arrSV[i][id])
// //     //   }
     
// //     // } 
// //         // ============C2============

// //     if(i.hoTen===svUpdate.hoTen){
// //       Object.assign(i,svUpdate)
// //     }
    

// //   }
// //   tableSV()
// //   clearInputSV()
// //   console.log(arrSV)
// // }


// var sortName=()=>{
//   arrSV.sort(function (a, b) {
//     if (a.hoTen < b.hoTen) {
//       return -1;
//     }
//     if (a.hoten > b.hoten) {
//       return 1;
//     }
//     return 0;
//   });
// }