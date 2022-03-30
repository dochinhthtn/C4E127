let allProducts = []; // lưu rất nhiều phần tử

let loadedProducts = []; 



let todoData = [];

let $todoList = document.getElementById('todo-list');

let $addTodoForm = document.getElementById('add-todo-form');
$addTodoForm.onsubmit = function (event) {
    event.preventDefault(); // chặn chuyển trang khi form được submit

    let $input = document.getElementById('todo-content-input');
    let value = $input.value;

    if (value == '') {
        alert('Input todo content');
        return;
    }

    addTodoItem(todoData, value, $todoList);
}

/* 
    có if, hạn chế viết else

    coding convention: 

    những biến trỏ vào html element => có tiền tố là $
        let $list = document.getElementById('list');

    những biến thông thường => không có tiền tố $

    eslint: bắt buộc dùng ``

    lập trình hướng cấu trúc: chia thành nhiều module & function

    JSON: chuối => dữ liệu (mảng, object)
    localstorage => cơ sở dữ liệu (lưu trên trình duyệt)
*/

showTodoList(todoData, $todoList);

function showTodoList(data, $list) {

    $list.innerHTML = ''; // xóa toàn bộ nội dung bên trong của thẻ

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let $li = document.createElement('li');
        $li.innerHTML = `
            <span>
                <b>${item.content}</b><br>
                <i>${item.dateModified}</i>
            </span>
        `;

        let $deleteButton = document.createElement('button');
        $deleteButton.innerHTML = 'Delete';
        $deleteButton.onclick = function () {
            deleteTodoItem(data, i, $list);
        }

        $li.append($deleteButton);
        $list.append($li);
    }
}

function addTodoItem(data, todoContent, $list) {
    let newTodo = {
        content: todoContent,
        dateModified: new Date().toString()
    };
    data.push(newTodo);
    showTodoList(data, $list); // sau khi tạo todo phải hiển thị lại danh sách
}

function deleteTodoItem(data, todoIndex, $list) {
    data.splice(todoIndex, 1); // splice(index, n) xóa n phần tử từ vị trí index của mảng
    showTodoList(data, $list);
}