let inputWidth;
let inputHeight;

inputWidth = prompt("nhap gia tri width: ");
inputHeight = prompt("nhap gia tri height");

let width = parseInt(inputWidth);
let height = parseInt(inputHeight);

let area = width*height;

alert("dien tich hinh chu nhat la : " + area);
document.write("width la : " + width);
document.write("<br/>");
document.write("heitght la : " + height);
document.write("<br/>");
document.write("area la : " + area);
