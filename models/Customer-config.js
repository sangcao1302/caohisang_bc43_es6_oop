import {Customers} from "./Customers.js"
export class KhachHang {
  arrC = [];

  themKhachHang(c) {
    this.arrC.push(c);
    console.log(this.arrC)
  }

  tableKH() {
    let htmlString = "";

    for (let index of this.arrC) {
      var kh = new Customers();
      Object.assign(kh, index);
      htmlString += `
    <tr>
        <td>${kh.hoTen}</td>
        <td>${kh.diaChi}</td>
        <td>${kh.maSo}</td>
        <td>${kh.email}</td>
        <td>${kh.tenCongTy}</td>
        <td>${kh.triGiaHoaDon}</td>
        <td>${kh.danhGia}</td>
        <td>
            <button class="btn btn-danger" onclick="xoaKhachHang('${
              kh.hoTen
            }')">X</button>

            <button class="btn btn-primary" onclick="suaKhachHang('${
              kh.hoTen
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
  xoaKhachHang(xoaKH) {
    for (let index in this.arrC) {
      if (this.arrC[index].hoTen === xoaKH) {
        this.arrC.splice(index, 1);
      }
    }
    this.tableKH();
  }

  clearInput() {
    let arrInputKH = document.querySelectorAll("input , textarea");
    for (let index of arrInputKH) {
      index.value = "";
    }
  }

  suaKhachHang(suaKH) {
    let arrInputKH = document.querySelectorAll("input , textarea");

    for (let i of this.arrC) {
      if (i.hoTen === suaKH) {
        for (let index of arrInputKH) {
          let { id } = index;
          index.value = i[id];
        }
      }
    }
  }
  capNhat() {
    document.getElementById("btn-capNhat").onclick = () => {
      let arrInputKH = document.querySelectorAll("input , textarea");
      var khUpdate = new Customers();
      for (let index of arrInputKH) {
        let { id, value } = index;
        khUpdate[id] = value;
      }
      for (let i of this.arrC) {
        // ============C1============
        // for (let index of arrInputSV){
        //   if(arrC[i].hoTen===svUpdate.hoTen){
        //     let { id, value } = index;

        //     arrC[i][id]=value
        //     console.log( arrC[i][id])
        //   }

        // }
        // ============C2============

        if (i.maSo === khUpdate.maSo) {
          Object.assign(i, khUpdate);
          
        }
      }
      this.tableKH();
      this.clearInput();
      console.log(this.arrC)
    };
  }

  sortName() {
    this.arrC.sort(function (a, b) {
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
