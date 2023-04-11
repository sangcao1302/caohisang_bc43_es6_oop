// import { Student } from "../models/Student.js";
import {Employee} from "./Employee.js"
export class GiangVien {
  arrGV = [];

  themGiangvien(gv) {
    this.arrGV.push(gv);
    console.log(this.arrGV)
  }

  tableGV() {
    let htmlString = "";

    for (let index of this.arrGV) {
      var gv = new Employee();
      Object.assign(gv, index);
      htmlString += `
    <tr>
        <td>${gv.hoTen}</td>
        <td>${gv.diaChi}</td>
        <td>${gv.maSo}</td>
        <td>${gv.email}</td>
        <td>${gv.soNgayLamViec}</td>
        <td>${gv.luongTheoNgay}</td>
        <td>${gv.tinhLuong()}</td>
        <td>
            <button class="btn btn-danger" onclick="xoaGiangVien('${
              gv.hoTen
            }')">X</button>

            <button class="btn btn-primary" onclick="suaGiangVien('${
              gv.hoTen
            }')">
            <i class="fa fa-edit"></i>
            </button>
        </td>
    </tr>
`;
    }

    document.getElementById("tBody").innerHTML = htmlString;
    return htmlString;
  }
  xoaGiangVien(xoaGV) {
    for (let index in this.arrGV) {
      if (this.arrGV[index].hoTen === xoaGV) {
        this.arrGV.splice(index, 1);
      }
    }
    this.tableGV();
  }

  clearInput() {
    let arrInputGV = document.querySelectorAll("input");
    for (let index of arrInputGV) {
      index.value = "";
    }
  }

  suaGiangVien(suaGV) {
    let arrInputGV = document.querySelectorAll("input");

    for (let i of this.arrGV) {
      if (i.hoTen === suaGV) {
        for (let index of arrInputGV) {
          let { id } = index;
          index.value = i[id];
        }
      }
    }
  }
  capNhat() {
    document.getElementById("btn-capNhat").onclick = () => {
      let arrInputGV = document.querySelectorAll("input");
      var gvUpdate = new Employee();
      for (let index of arrInputGV) {
        let { id, value } = index;
        gvUpdate[id] = value;
      }
      for (let i of this.arrGV) {
        // ============C1============
        // for (let index of arrInputSV){
        //   if(arrGV[i].hoTen===svUpdate.hoTen){
        //     let { id, value } = index;

        //     arrGV[i][id]=value
        //     console.log( arrGV[i][id])
        //   }

        // }
        // ============C2============

        if (i.maSo === gvUpdate.maSo) {
          Object.assign(i, gvUpdate);
          
        }
      }
      this.tableGV();
      this.clearInput();
      console.log(this.arrGV)
    };
  }

  sortName() {
    this.arrGV.sort(function (a, b) {
      if (a.hoTen < b.hoTen) {
        return -1;
      }
      if (a.hoten > b.hoten) {
        return 1;
      }
      return 0;
    });
  }
}
