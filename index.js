// 2.6 Global scope và function scope
//     global scope - biến toàn cầu
//     function scope - biến cục bộ chỉ hoạt động trong phạm vi hàm

/* 2.7 Khai báo biến với từ khóa let 
block scope let
block scope : biến có phạm vi khối {...}
Khai báo với từ khóa let
*/

/**
 * ví dụ 1
 {
  var x = 5;
}
console.log(x); //5 vì khai báo biến với từ khóa vả thì ra bên ngoài block nó vẫn nhận giá trị
 */
/**
 * ví dụ 2
 * {
  let y = 10;
}
console.log(y); // báo lỗi vì từ khóa let chỉ có phạm vi block scope
 */

/**
 * ví dụ 3
 * for (var i = 1; i < 5; i++) {
  console.log(i);
}
console.log(i);// 1 2 3 4 5 vì kết thúc vòng lặp i bằng 5,nó so sánh với đk ko thỏa mãn nên sẽ chạy ra ngoài
 * 
 */

/**
 * ví dụ 4
 * 
for (let i = 1; i < 5; i++) {
  console.log(i);
}
console.log(i); //báo lôi i undefine vì let chỉ có ảnh hưởng trong block scope
 */

// var có thể khai báo lại biến trên cùng một cấp
// var x = 4;
// var x = 10;
// console.log(x); //10

// 2.8 Hoisting - đẩy lên
// var có thể sử dụng trước khi khai báo biến
// let và const không được hỗ trợ
//ưu tiên dùng let khi tạo biến,const khi tạo hằng,dùng var hết sức cẩn thận
// a = 20;
// console.log(a);
// var a;

// 2.11 các kiểu dữ liệu biến
// +số
// +chuỗi
// +Boolean
// +undefine  khởi tạo biến mà ko gán giá trị cho nó thì là undefine
// +null
// +Array
// +Object

// mảng trong mảng
// var book = [
//   ["foreword", 14],
//   ["boywholived", 18],
// ];
// console.log(book[0][1]);

// Đối tượng trong mảng
// var book = [
//   { name: "foreword", pageCount: 14 },
//   { name: "boyWhoLived", pageCount: 18 },
//   { name: "vanishingGlass", pageCount: 13 },
//   { name: "lettersFromNoOne", pageCount: 17 },
//   { name: "afterword", pageCount: 19 },
// ];
// console.log(book[0]["name"]);
// console.log(book[0][0]); //undefine
// console.log(book[0].name);

// Phép toán tăng giảm trong js
// let x = 10;
// let y = x++;
// let z = ++x;
// console.log(x, z);
// console.log(x, y);

//Phép toán nối chuỗi(lưu ý với phép cộng,số cộng chuỗi ra chuỗi còn các phép toán học còn lại chạy bình thường )
// let a = "6";
// let b = 4;
// console.log(a + b); //64

//Toán tử điều kiện 3 ngôi
// result = condition ? value1 : value2;
// result = value1 nếu điều kiện đúng
// result = value2 nếu điều kiện false

// let result, number;
// number = 9;
// result = number % 3 == 0 ? "Long đẹp trai" : "Đi bơi đi";
// console.log(result);

//vòng lặp for tính tổng các số chẵn từ 2->100
// let total = 0;
// for (let i = 2; i <= 100; i++) {
//   if (i % 2 == 0) {
//     total += i;
//   }
// }
// console.log(total);

// 4.9 vòng lặp for in(dùng để truy xuất từng phần tử của mảng hoặc object)

// for(key in object){
//     //code
// }
// let person = {
//   name: "Long",
//   age: "22",
//   phone: "0859128666",
// };
// for (let key in person) {
//   console.log(key + " :" + person[key]);
// }

// for(variable in array){
//     //code
// }

// let myArr = ["red", "blue", { name: "hailongdev", phone: "0987654321" }];
// for (let key in myArr) {
//   console.log(key, myArr[key]);
// }

// 4.10 for of trong js  dùng để duyệt mảng lấy ra các giá trị từng phần tử của mảng mà ko cần thông qua value
// let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let total = 0;
// for (let value of myArr) {
//   if (value % 2 === 0) total += value;
// }
// console.log(total);

// 4.11 vòng lặp while(điều kiện còn đúng thì khối code bên trong còn chạy)
// while (false) {
//   console.log("long dz");
// }

// 4.12 Vòng lặp do while(làm gì đấy trong khi,nó sẽ thực hiện 1 lần đầu tiên rồi mới kiểm tra đk)

// Tìm vị trí của phần tử trong mảng
// array.indexOf(searchElement, fromIndex)
// tìm phần tử searchElement trong mảng từ vị trí fromIndex
// trả về vị trí đầu tiên tìm thấy phần tử searchElement,ngược lại trả về -1
// nếu bỏ qua chỉ số fromIndex sẽ bắt đầu tìm từ chỉ số 0 của mảng

// let myArr = ["red", "blue", "green", "yellow", "brown", "red"];
// console.log(myArr.indexOf("red", 2)); //5 vì nó sẽ tìm red bắt đầu từ vị trí số 2 của mảng

//Xóa/thêm phần tử mảng với splice
// array.splice(start, deleteCount, item1, item2);
// start vị trí để xóa hoặc thêm phần tử vào mảng
// deleteCount số lượng phần tử cần xóa,nếu là 0 thì ko xóa bất kỳ phần tử nào.Nếu bỏ qua tham số này thì sẽ xóa tất cả các phần tử kể từ vị trí start
// item1,item 2 là các phần tử thêm vào mảng

let myArr = ["red", "blue", "green", "yellow", "brown"];
// myArr.splice(1);//xóa tất cả phần tử kể từ vị trí 1
// myArr.splice(1,2)//xóa 2 phần tử kể từ vị trí 1
myArr.splice(1, 2, "gray", "purple"); //xóa 2 phần tử từ vị trí 1 và thêm 2 phần tử mới là gray và purple vào giữa mảng
console.log(myArr);
