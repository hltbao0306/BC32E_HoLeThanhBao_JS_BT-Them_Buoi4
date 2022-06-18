//-----------Bài 5----------\\
document.getElementById("btnngayHomQua").onclick = function (event) {
    event.preventDefault();
    var ngay = Number(document.getElementById("ngay").value);
    var thang = Number(document.getElementById("thang").value);
    var nam = Number(document.getElementById("nam").value);
    var ketQua = "";
    if (
      ngay >= 2 &&
      ngay <= 31 &&
      (thang === 1 ||
        thang === 3 ||
        thang === 5 ||
        thang === 7 ||
        thang === 8 ||
        thang === 10 ||
        thang === 12)
    ) {
      ngay--;
      ketQua = ngay + "/" + thang + "/" + nam;
    } else if (ngay === 1 && thang === 1) {
      ngay = 31;
      thang = 12;
      nam--;
      ketQua = ngay + "/" + thang + "/" + nam;
    } else if (
      ngay === 1 &&
      (thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12)
    ) {
      ngay = 30;
      thang--;
      ketQua = ngay + "/" + thang + "/" + nam;
    } else if (ngay === 1 && thang === 3) {
      ngay = 28;
      thang--;
      ketQua = ngay + "/" + thang + "/" + nam;
    } else if (
      ngay >= 2 &&
      ngay <= 30 &&
      (thang === 4 || thang === 6 || thang === 9 || thang === 11)
    ) {
      ngay--;
      ketQua = ngay + "/" + thang + "/" + nam;
    } else if (
      ngay === 1 &&
      (thang === 2 || thang === 4 || thang === 6 || thang === 9 || thang === 11)
    ) {
      ngay = 31;
      thang--;
      ketQua = ngay + "/" + thang + "/" + nam;
    } else if (ngay >= 2 && ngay <= 28 && thang === 2) {
      ngay--;
      ketQua = ngay + "/" + thang + "/" + nam;
    } else {
      ketQua = "Ngày không xác định";
    }
    document.getElementById("ketQua5").innerHTML = '👉' + ketQua;
}
  
document.getElementById("btnngayMai").onclick = function (event) {
    event.preventDefault();
    var ngay = Number(document.getElementById("ngay").value);
    var thang = Number(document.getElementById("thang").value);
    var nam = Number(document.getElementById("nam").value);
    var ketQua = "";
    if (
      ngay > 0 &&
      ngay < 31 &&
      (thang === 1 ||
        thang === 3 ||
        thang === 5 ||
        thang === 7 ||
        thang === 8 ||
        thang === 10 ||
        thang === 12)
    ) {
      ngay++;
      ketQua = ngay + "/" + thang + "/" + nam;
    } else if (ngay === 31 && thang === 12) {
      ngay = 1;
      thang = 1;
      nam++;
      ketQua = ngay + "/" + thang + "/" + nam;
    } else if (
      ngay === 31 &&
      (thang === 1 ||
        thang === 3 ||
        thang === 5 ||
        thang === 7 ||
        thang === 8 ||
        thang === 10)
    ) {
      ngay = 1;
      thang++;
      ketQua = ngay + "/" + thang + "/" + nam;
    } else if (
      ngay > 0 &&
      ngay < 30 &&
      (thang === 4 || thang === 6 || thang === 9 || thang === 11)
    ) {
      ngay++;
      ketQua = ngay + "/" + thang + "/" + nam;
    } else if (
      ngay === 30 &&
      (thang === 4 || thang === 6 || thang === 9 || thang === 11)
    ) {
      ngay = 1;
      thang++;
      ketQua = ngay + "/" + thang + "/" + nam;
    } else if (ngay > 0 && ngay < 28 && thang === 2) {
      ngay++;
      ketQua = ngay + "/" + thang + "/" + nam;
    } else if (ngay === 28 && thang === 2) {
      ngay = 1;
      thang = 3;
      ketQua = ngay + "/" + thang + "/" + nam;
    } else {
      ketQua = "Ngày không xác định";
    }
    document.getElementById("ketQua5").innerHTML = '👉' + ketQua;
}

//-----------Bài 6----------\\
  document.getElementById("btntinhNgay").onclick = function (event) {
    event.preventDefault();
    var soThang = Number(document.getElementById("soThang").value);
    var soNam = Number(document.getElementById("soNam").value);
    var soNgay = 0;
    var soNamNhuan = (soNam % 4 === 0 && soNam % 100 !== 0) || soNam % 400 === 0;
    var ketQua = "";
    if (
      soThang === 1 ||
      soThang === 3 ||
      soThang === 5 ||
      soThang === 7 ||
      soThang === 8 ||
      soThang === 10 ||
      soThang === 12
    ) {
      soNgay = 31;
      ketQua = "Tháng " + soThang + " Năm " + soNam + " - Có " + soNgay + " ngày ";
    } else if (
      soThang === 4 ||
      soThang === 6 ||
      soThang === 9 ||
      soThang === 11
    ) {
      soNgay = 30;
      ketQua = "Tháng " + soThang + " Năm " + soNam + " - Có " + soNgay + " ngày ";
    } else if (soThang === 2 && soNamNhuan == true) {
      soNgay = 29;
      ketQua = "Tháng " + soThang + " Năm " + soNam + " - Có " + soNgay + " ngày ";
    } else if (soThang === 2 && soNamNhuan == false) {
      soNgay = 28;
      ketQua = "Tháng " + soThang + " Năm " + soNam + " - Có " + soNgay + " ngày ";
    } else {
      soNgay = "Không xác định";
      ketQua = "Tháng " + soThang + " Năm " + soNam + " - Có " + soNgay + " ngày ";
    }
    document.getElementById("ketQua6").innerHTML = '👉' + ketQua;
}

//-----------Bài 7----------\\
document.getElementById("btndocSo").onclick = function (event) {
  event.preventDefault();
  var so3ChuSo = document.getElementById("nhap3So").value;
  var soHangTram = Math.floor(so3ChuSo / 100);
  var soHangChuc = Math.floor((so3ChuSo % 100) / 10);
  var soHangDonVi = so3ChuSo % 10;
  var ketQua = "";
  switch (soHangTram) {
    case 0:
      {
        alert((soHangTram = "Số hàng trăm không xác định được"));
      } break;
    case 1:
      {
        soHangTram = "Một trăm";
      } break;
    case 2:
      {
        soHangTram = "Hai trăm";
      } break;
    case 3:
      {
        soHangTram = "Ba trăm";
      } break;
    case 4:
      {
        soHangTram = "Bốn trăm";
      } break;
    case 5:
      {
        soHangTram = "Năm trăm";
      } break;
    case 6:
      {
        soHangTram = "Sáu trăm";
      } break;
    case 7:
      {
        soHangTram = "Bảy trăm";
      } break;
    case 8:
      {
        soHangTram = "Tám trăm";
      } break;
    case 9:
      {
        soHangTram = "Chín trăm";
      } break;
  }
  switch (soHangChuc) {
    case 0:
      {
        alert((soHangChuc = "Số hàng chục không xác định được"));
      } break;
    case 1:
      {
        soHangChuc = "mười";
      } break;
    case 2:
      {
        soHangChuc = "hai mươi";
      } break;
    case 3:
      {
        soHangChuc = "ba mươi";
      } break;
    case 4:
      {
        soHangChuc = "bốn mươi";
      } break;
    case 5:
      {
        soHangChuc = "năm mươi";
      } break;
    case 6:
      {
        soHangChuc = "sáu mươi";
      } break;
    case 7:
      {
        soHangChuc = "bảy mươi";
      } break;
    case 8:
      {
        soHangChuc = "tám mươi";
      } break;
    case 9:
      {
        soHangChuc = "chín mươi";
      } break;
  }
  switch (soHangDonVi) {
    case 0:
      {
        alert((soHangDonVi = "Số hàng đơn vị không xác định được"));
      } break;
    case 1:
      {
        soHangDonVi = "một";
      } break;
    case 2:
      {
        soHangDonVi = "hai";
      } break;  
    case 3:
      {
        soHangDonVi = "ba";
      } break; 
    case 4:
      {
        soHangDonVi = "bốn";
      } break; 
    case 5:
      {
        soHangDonVi = "năm";
      } break;    
    case 6:
      {
        soHangDonVi = "sáu";
      } break;
    case 7:
      {
        soHangDonVi = "bảy";
      } break;
    case 8:
      {
        soHangDonVi = "tám";
      } break;
    case 9:
      {
        soHangDonVi = "chín";
      } break;
  }
  document.getElementById("ketQua7").innerHTML = '👉' +
    soHangTram + " " + soHangChuc + " " + soHangDonVi;
}

//-----------Bài 8----------\\
document.getElementById("btnTim").onclick = function (event) {
  event.preventDefault();
  var tenSV1 = document.getElementById("tenSV1").value;
  var tenSV2 = document.getElementById("tenSV2").value;
  var tenSV3 = document.getElementById("tenSV3").value;
  var toaDoX1 = document.getElementById("toaDoX1").value;
  var toaDoY1 = document.getElementById("toaDoY1").value;
  var toaDoX2 = document.getElementById("toaDoX2").value;
  var toaDoY2 = document.getElementById("toaDoY2").value;
  var toaDoX3 = document.getElementById("toaDoX3").value;
  var toaDoY3 = document.getElementById("toaDoY3").value;
  var toaDoX4 = document.getElementById("toaDoX4").value;
  var toaDoY4 = document.getElementById("toaDoY4").value;
  var doDai1 = Math.sqrt(
    Math.pow(toaDoX4 - toaDoX1, 2) + Math.pow(toaDoY4 - toaDoY1, 2)
  );
  var doDai2 = Math.sqrt(
    Math.pow(toaDoX4 - toaDoX2, 2) + Math.pow(toaDoY4 - toaDoY2, 2)
  );
  var doDai3 = Math.sqrt(
    Math.pow(toaDoX4 - toaDoX3, 2) + Math.pow(toaDoY4 - toaDoY3, 2)
  );
  var ketQua = "";
  if (doDai1 > doDai2 && doDai1 > doDai3) {
    var ketQua = "Sinh viên xa trường nhất: " + tenSV1;
  } else if (doDai2 > doDai1 && doDai2 > doDai3) {
    var ketQua = "Sinh viên xa trường nhất: " + tenSV2;
  } else if (doDai3 > doDai1 && doDai3 > doDai2) {
    var ketQua = "Sinh viên xa trường nhất: " + tenSV3;
  } else {
    ketQua = "Không xác định";
  }
  document.getElementById("ketQua8").innerHTML = '👉' + ketQua;
}