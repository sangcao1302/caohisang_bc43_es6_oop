// import { Student } from "../models/Student.js";
import { Student } from "./Student.js";

export class SinhVien {
  arrSV = [];

  themSinhvien(sv) {
    this.arrSV.push(sv);
    console.log(this.arrSV)
  }

  tableSV() {
    let htmlString = "";

    for (let index of this.arrSV) {
      var sv = new Student();
      Object.assign(sv, index);
      htmlString += `
    <tr>
        <td>${sv.hoTen}</td>
        <td>${sv.diaChi}</td>
        <td>${sv.maSo}</td>
        <td>${sv.email}</td>
        <td>${sv.diemToan}</td>
        <td>${sv.diemLy}</td>
        <td>${sv.diemHoa}</td>
        <td>${sv.tinhDiemTrungBinh()}</td>
        <td>
            <button class="btn btn-danger" onclick="xoaSinhVien('${
              sv.hoTen
            }')">X</button>

            <button class="btn btn-primary" onclick="suaSinhVien('${
              sv.hoTen
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
  xoaSinhVien(xoaSV) {
    for (let index in this.arrSV) {
      if (this.arrSV[index].hoTen === xoaSV) {
        this.arrSV.splice(index, 1);
      }
    }
    this.tableSV();
  }

  clearInput() {
    let arrInputSV = document.querySelectorAll("input");
    for (let index of arrInputSV) {
      index.value = "";
    }
  }

  suaSinhVien(suaSV) {
    let arrInputSV = document.querySelectorAll("input");

    for (let i of this.arrSV) {
      if (i.hoTen === suaSV) {
        for (let index of arrInputSV) {
          let { id } = index;
          index.value = i[id];
        }
      }
    }
  }
  capNhat() {
    document.getElementById("capNhat").onclick = () => {
      let arrInputSV = document.querySelectorAll("input");
      var svUpdate = new Student();
      for (let index of arrInputSV) {
        let { id, value } = index;
        svUpdate[id] = value;
      }
      for (let i of this.arrSV) {
        // ============C1============
        // for (let index of arrInputSV){
        //   if(arrSV[i].hoTen===svUpdate.hoTen){
        //     let { id, value } = index;

        //     arrSV[i][id]=value
        //     console.log( arrSV[i][id])
        //   }

        // }
        // ============C2============

        if (i.maSo === svUpdate.maSo) {
          Object.assign(i, svUpdate);
          
        }
      }
      this.tableSV();
      this.clearInput();
      console.log(this.arrSV)
    };
  }

  sortName() {
    this.arrSV.sort(function (a, b) {
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
