// json: chuỗi (string), phân tích json => object hoặc array
// json: javascript object notation (ngôn ngữ mô tả - self-describe)
// 2 thao tác
/* 
    chuyển object hoặc array => json: JSON.stringify()
    chuyển json => object hoặc array: JSON.parse()
*/

// let favorites = ['tiền', 'ngắm girl xinh', 'xem phim', 'mua sắm'];

// let mySelf = {
//     name: 'Chinh Do',
//     address: 'Vietnam',
//     sex: 'male',
//     weight: 65,
//     height: 170
// };

// // chuyển object hoặc array => json

// let json_1 = JSON.stringify(favorites); // stringify

// console.log(favorites);
// console.log(json_1);

// // mySelf.name = 'Ngọc Trinh';

// let json_2 = JSON.stringify(mySelf);

// console.log(mySelf);
// console.log(json_2);

// // primitive datatype: number, string, boolean, null

// let n_1 = 10;
// let n_2 = 10;

// console.log(n_1 == n_2);

// // reference datatype: array, object

// let a = {name: 'a'};
// let b = {name: 'a'};

// console.log(a == b);

// // chuyển json => array hoặc object
// let array = JSON.parse(json_1); // parse => 1 mảng mới

// let obj = JSON.parse(json_2); // parse => 1 object mới

// console.log(obj);

// json để làm gì? 

// local storage: lưu trữ nội bộ
// cách lưu dữ liệu: theo cặp key - value
// kiểu dữ liệu: 1 kiểu duy nhất string, ko lưu đc reference datatype
// thao tác với local storage: CRUD: create - read - update - delete 

// create - update
// localStorage.setItem('name', 'Chinh Do');
// localStorage.setItem('weight', 65);
// localStorage.setItem('has_girlfriend', false);

// localStorage.setItem('weight', 70);

// // read
// let name = localStorage.getItem('name');
// let weight = localStorage.getItem('weight');

// let age = localStorage.getItem('age');

// console.log(name);
// console.log(age);

// // delete

// localStorage.clear(); // xóa toàn bộ
// localStorage.removeItem('name'); // xóa theo key

// let girlfriend = {
//     name: 'Someone',
//     age: 22,
//     address: 'HN',
//     favorites: ['xem phim', 'đá bóng']
// };

// let json = JSON.stringify(girlfriend);
// localStorage.setItem('girlfriend', json);

// let data = localStorage.getItem('girlfriend');
// console.log(data);

// data = JSON.parse(data);

// console.log(data);

// kỳ vọng: hiển thị dữ liệu
// vượt kỳ vọng: thêm dữ liệu, sửa dữ liệu & xóa dữ liệu => dùng localstorage

// đăng ký (thêm dữ liệu), đăng nhập (xác thực người dùng)

let users = [
    { name: 'Chinh Do', username: 'chinh.dovan', password: '12345678' },
    { name: 'Admin', username: 'admin', password: '12345678' },
];

localStorage.setItem('users', JSON.stringify(users)); // set dữ liệu mẫu => làm 1 lần thôi

let $registerForm = document.getElementById('register-form');
$registerForm.onsubmit = function (event) {
    event.preventDefault(); // ko chuyển trang

    let name = $registerForm.name.value;
    let username = $registerForm.username.value;
    let password = $registerForm.password.value;

    if (name == '' || username == '' || password == '') {
        alert('Please input all fields');
        return;
    }

    createUser(name, username, password);
}


function createUser(name, username, password) {
    // let users = localStorage.getItem('users');
    // users = JSON.parse(users);

    let newUser = {
        name: name,
        username: username,
        password: password
    };

    let users = JSON.parse(localStorage.getItem('users')); // lấy users từ localstorage => mảng

    // kiểm tra xem đã có username bị trùng hay chưa <=> tìm phần tử trong mảng thỏa mãn điều kiện
    // tìm trong mảng users có phần tử nào mà username bằng username nhập vào, nếu có thì in ra "Tài khoản bị trùng"
    for (let user of users) {
        if(user.username == username) {
            alert("This username has been taken by another account");
            return;
        }
    }

    users.push(newUser); // thêm user mới vào mảng users

    localStorage.setItem('users', JSON.stringify(users)); // lưu lại mảng users vào localstorage

    alert('Create account successfully');
}

function login(username, password) {

}