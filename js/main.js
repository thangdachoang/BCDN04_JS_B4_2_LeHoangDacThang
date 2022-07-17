//BT5

//tìm ngày hôm trước

function beforeDay() {
  var day = Number(document.getElementById("day").value);
  var month = Number(document.getElementById("month").value);
  var year = Number(document.getElementById("year").value);
  // text để thông báo
  var dateBefore = "";
  var dayInMonth = checkSumDayOfMonth(month);
  if (day <= dayInMonth && month <= 12) {
    if (day == 1) {
      if (month !== 1) {
        month--;
        day = checkSumDayOfMonth(month);
      } else {
        //month ==1
        day = 31;
        month = 12;
        year--;
      }
    } else {
      //day !== 1
      day--;
    }
    dateBefore = day + "/" + month + "/" + year;
  } else {
    dateBefore = "Thông tin nhập không chính xác";
  }
  document.getElementById("txtDay").innerHTML = dateBefore;
}
document.getElementById("btnBeforeDay").onclick = beforeDay;

//Tìm ngày hôm sau
function afterDay() {
  var day = Number(document.getElementById("day").value);
  var month = Number(document.getElementById("month").value);
  var year = Number(document.getElementById("year").value);
  var dateAfter = "";
  var dayInMonth = checkSumDayOfMonth(month);
  if (day <= dayInMonth && month <= 12) {
    if (day == dayInMonth) {
      if (month !== 12) {
        day = 1;
        month++;
      } else {
        //month =12
        day = 1;
        month = 1;
        year++;
      }
    } else {
      day++;
    }
    dateAfter = day + "/" + month + "/" + year;
  } else {
    dateAfter = "Thông tin nhập không chính xác";
  }
  document.getElementById("txtDay").innerHTML = dateAfter;
}
document.getElementById("btnAfterDay").onclick = afterDay;
//hàm check tổng ngày trong tháng ko tính năm nhuận
function checkSumDayOfMonth(month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return 28;
    default:
      return NaN;
  }
}

//BT6

function tinhNgay() {
  var month = Number(document.getElementById("month2").value);
  var year = Number(document.getElementById("year2").value);
  var textNgay =
    "Tháng " +
    month +
    " Năm " +
    year +
    " có " +
    checkSumDayOfMonthNhuan(month, year) +
    " ngày ";
  document.getElementById("txtTinhNgay").innerHTML = textNgay;
}
document.getElementById("btnTinhNgay").onclick = tinhNgay;
//Hàm check tổng ngày của tháng có năm nhuận
function checkSumDayOfMonthNhuan(month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
        return 29;
      } else {
        return 28;
      }
    default:
      return NaN;
  }
}

//BT7

function docSo() {
  var so3ChuSo = Number(document.getElementById("so3ChuSo").value);
  // số hàng trăm
  var int1 = parseInt(so3ChuSo / 100);
  // số hàng chục
  var int2 = parseInt((so3ChuSo / 10) % 10);
  //số hàng đơn vị
  var int3 = parseInt(so3ChuSo % 10);
  var content = "";

  //Kiểm tra số 3 chữ số
  if (so3ChuSo < 100 || so3ChuSo > 999) {
    content = " Nhập sai thông tin !!";
  } else {
    //cách đọc của hằng trăm
    switch (int1) {
      case 1:
        content += "Một trăm ";
        break;
      case 2:
        content += "Hai trăm ";
        break;
      case 3:
        content += "Ba trăm ";
        break;
      case 4:
        content += "Bốn trăm ";
        break;
      case 5:
        content += "Năm trăm ";
        break;
      case 6:
        content += "Sáu trăm ";
        break;
      case 7:
        content += "Bảy trăm ";
        break;
      case 8:
        content += "Tám trăm ";
        break;
      case 9:
        content += "Chín trăm ";
        break;
      default:
        break;
    }
    //cách độc của hằng chục
    switch (int2) {
      case 0:
        content += "lẻ ";
        break;
      case 1:
        content += "mười ";
        break;
      case 2:
        content += "hai mươi ";
        break;
      case 3:
        content += "ba mươi ";
        break;
      case 4:
        content += "bốn mươi ";
        break;
      case 5:
        content += "năm mươi ";
        break;
      case 6:
        content += "sáu mươi ";
        break;
      case 7:
        content += "bảy mươi ";
        break;
      case 8:
        content += "tám mươi ";
        break;
      case 9:
        content += "chín mươi ";
        break;
      default:
        break;
    }
    //cách đọc của hàng đơn vị
    switch (int3) {
      case 1:
        content += "một ";
        break;
      case 2:
        content += "hai ";
        break;
      case 3:
        content += "ba ";
        break;
      case 4:
        content += "bốn ";
        break;
      case 5:
        content += "năm ";
        break;
      case 6:
        content += "sáu ";
        break;
      case 7:
        content += "bảy ";
        break;
      case 8:
        content += "tám ";
        break;
      case 9:
        content += "chín ";
        break;
      default:
        break;
    }
  }
  document.getElementById("txtDocSo").innerHTML = content;
}
document.getElementById("btnDocSo").onclick = docSo;

//BT8

function timSinhVienXaNhat() {
  var name1 = document.getElementById("name1").value;
  var x1 = Number(document.getElementById("x1").value);
  var y1 = Number(document.getElementById("y1").value);
  var name2 = document.getElementById("name2").value;
  var x2 = Number(document.getElementById("x2").value);
  var y2 = Number(document.getElementById("y2").value);
  var name3 = document.getElementById("name3").value;
  var x3 = Number(document.getElementById("x3").value);
  var y3 = Number(document.getElementById("y3").value);
  //quảng đường của từng sinh viên
  var d1 = tinhQuangDuong(x1, y1);
  var d2 = tinhQuangDuong(x2, y2);
  var d3 = tinhQuangDuong(x3, y3);
  var content = "Sinh viên xa nhất là: ";

  if (d1 > d2 && d1 > d3) {
    //so sánh nhẩt d1
    content += name1;
  } else if (d2 > d3 && d2 > d1) {
     //so sánh nhẩt d2
    content += name2;
  } else if (d3 > d1 && d3 > d2) {
     //so sánh nhẩt d3
    content += name3;
  } else {
    //TH có từ 2 người quãng đường xa bằng nhau
    if (d1 == d2 && d1 > d3) {
      content = name1 + ", " + name2 + " đều xa nhất trường";
    } else if (d1 == d3 && d1 > d2) {
      content = name1 + ", " + name3 + " đều xa nhất trường";
    } else if (d2 == d3 && d2 > d1) {
      content = name2 + ", " + name3 + " đều xa nhất trường";
    } else {
        //TH cả 3 đều xa bằng nhau
      content = "Cả 3 sinh viên đều xa bằng nhau";
    }
  }
  document.getElementById("txtSinhVienXaNhat").innerHTML = content;
}
document.getElementById("btnTimXaNhat").onclick = timSinhVienXaNhat;

//Hàm tính quãng đường
function tinhQuangDuong(x, y) {
  var x0 = Number(document.getElementById("x0").value);
  var y0 = Number(document.getElementById("y0").value);

  return Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2));
}
