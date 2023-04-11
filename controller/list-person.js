
document.getElementById("submit").onsubmit=function(){
    if (
        document.getElementById("typePerson").value == "GIANG VIEN" ||
        document.getElementById("typePerson").value == "giang vien"
      ) {
        document.getElementById("submit").action = "GiangVien.html";
      } else if (
        document.getElementById("typePerson").value == "SINH VIEN" ||
        document.getElementById("typePerson").value == "sinh vien"
      ) {
        document.getElementById("submit").action = "SinhVien.html";
      } else if (
        document.getElementById("typePerson").value == "KHACH HANG" ||
        document.getElementById("typePerson").value == "khach hang"
      ) {
        document.getElementById("submit").action = "KhachHang.html";
      }

    }
