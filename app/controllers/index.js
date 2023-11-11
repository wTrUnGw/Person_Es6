import { Person, Student, Employee, Customer } from "../models/person.js";

import {
  addPersonApi,
  deletePersonById,
  fetchData,
  getPersonById,
  updatePersonApi,
} from "../services/callapi.js";

function getEle(id) {
  return document.getElementById(id);
}
let listPerson = [];

function getListPerson() {
  // Call the fetchData function and handle the returned data
  fetchData()
    .then((data) => {
      console.log("Data:", data);
      listPerson = data;
      renderUI(listPerson);
      // Process the data as needed
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle the error appropriately
    });
}

getListPerson();

function renderUI(listPerson) {
  var content = listPerson.reduce(function (prev, person, index) {
    return (
      prev +
      `
        <tr>
            <td>${index + 1}</td>
            <td>${person.name}</td>
            <td>${person.address}</td>
            <td>${person.code}</td>
            <td>${person.email}</td>
            <td>${person.math}</td>
            <td>${person.physic}</td>
            <td>${person.chemistry}</td>
            <td>${person.workDays}</td>
            <td>${person.dailyWage}</td>
            <td>${person.companyName}</td>
            <td>${person.value}</td>
            <td>${person.rating}</td>


            <td>
            <button class="btn btn-info" data-toggle="modal" data-target="#myModal" 
            data-type="editPerson" data-id="${person.id}">Edit
              </button>
               
  
                <button class="btn btn-danger" data-id="${
                  person.id
                }" data-type="delete">Delete</button>
            </td>
        </tr>
    `
    );
  }, "");

  getEle("tblDanhSachSP").innerHTML = content;
}
// hàm xu ly
document.getElementById("body").onclick = (event) => {
  const element = event.target;

  const id = element.getAttribute("data-id"); // lấy data id
  const type = element.getAttribute("data-type"); // lấy data type

  console.log("id: ", id, "type: ", type);
  if (type === "delete") {
    deletePersonById(id)
      .then(() => {
        // Xóa thành công
        return getListPerson();
      })
      .catch(() => {
        console.log(error);
      });
  }
  if (type === "add") {
    // Lấy thông tin từ người dùng nhập liệu
    var name = getEle("name").value;
    var address = getEle("address").value;
    var code = getEle("code").value;
    var email = getEle("email").value;

    // Tạo đối tượng person từ lớp đối tượng Person
    var person = new Person(name, address, code, email);
    console.log(person);

    addPersonApi(person)
      .then(() => {
        // Xóa thành công
        document.getElementsByClassName("close")[0].click();

        return getListPerson();
      })
      .catch(() => {
        console.log(error);
      });
  }

  if (type === "addStudent") {
    // Lấy thông tin từ người dùng nhập liệu
    var name = getEle("name").value;
    var address = getEle("address").value;
    var code = getEle("code").value;
    var email = getEle("email").value;
    var math = getEle("math").value;
    var physic = getEle("physic").value;
    // Tạo đối tượng person từ lớp đối tượng Person
    var student = new Student(name, address, code, email, math, physic);
    console.log(student);

    addPersonApi(student)
      .then(() => {
        // Xóa thành công
        document.getElementsByClassName("close")[0].click();

        return getListPerson();
      })
      .catch(() => {
        console.log(error);
      });
  }

  if (type === "addStudent") {
    // Lấy thông tin từ người dùng nhập liệu
    var name = getEle("name").value;
    var address = getEle("address").value;
    var code = getEle("code").value;
    var email = getEle("email").value;
    var math = getEle("math").value;
    var physic = getEle("physic").value;
    // Tạo đối tượng person từ lớp đối tượng Person
    var student = new Student(name, address, code, email, math, physic);
    console.log(student);

    addPersonApi(student)
      .then(() => {
        // Xóa thành công
        document.getElementsByClassName("close")[0].click();

        return getListPerson();
      })
      .catch(() => {
        console.log(error);
      });
  }

  if (type === "editPerson") {
    // Lấy thông tin của person dựa vào id
    getPersonById(id).then((response) => {
      // Lấy thông tin sản phẩm thành công => hiển thị dữ liệu lên form
      getEle("name").value = response.name;
      getEle("address").value = response.address;
      getEle("code").value = response.code;
      getEle("email").value = response.email;
    });
  }

  if (type === "updatePerson") {
    // Lấy thông tin từ người dùng nhập liệu
    var name = getEle("name").value;
    var address = getEle("address").value;
    var code = getEle("code").value;
    var email = getEle("email").value;

    // Tạo đối tượng person từ lớp đối tượng Person
    var person = new Person(name, address, code, email);
    console.log(person);

    updatePersonApi(id, person)
      .then(() => {
        // Cập nhật thành công
        document.getElementsByClassName("close")[0].click();
        return getListPerson();
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

/**
 * Sửa SP
 */
async function editPerson(id) {
  //sửa lại tiêu đề cho modal
  document.getElementsByClassName("modal-title")[0].innerHTML = "Edit Person";

  //tạo nút "Update" => gắn vào footer của modal
  var btnUpdate = `<button class="btn btn-success" data-type="update(${id})">Update</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = btnUpdate;

  //lấy thông tin chi tiết của product dựa vào id
  var promise = api.getPersonById(id);

  promise
    .then(function (result) {
      var person = result.data;
      //show data ra ngoài các thẻ input
      getEle("name").value = person.name;
      getEle("address").value = person.address;
      getEle("code").value = person.code;
      getEle("email").value = person.email;
    })
    .catch(function (error) {
      console.log(error);
    });
}

/**
 * Cap nhat
 */
async function updatePerson(id) {
  // lấy thông tin từ user nhập liệu
  var name = getEle("name").value;
  var address = getEle("address").value;
  var code = getEle("code").value;
  var email = getEle("email").value;

  //tạo đối tượng product từ lớp đối tượng Product
  var person = new Person("", name, address, code, email);

  api
    .updatePersonApi(person)
    .then(function () {
      //close modal
      document.getElementsByClassName("close")[0].click();
      getListPerson();
    })
    .catch(function (error) {
      console.log(error);
    });
}

getEle("btnThemSP").onclick = function () {
  //sửa lại tiêu đề cho modal
  document.getElementsByClassName("modal-title")[0].innerHTML = "Add Person";

  //tạo nút "Add" => gắn vào footer của modal
  var btnAdd = `<button class="btn btn-success" data-type="add">Add</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = btnAdd;
};

getEle("btnStudent").onclick = function () {
  //sửa lại tiêu đề cho modal
  document.getElementsByClassName("modal-title")[0].innerHTML = "Add Student";

  //tạo nút "Add" => gắn vào footer của modal
  var btnAdd = `<button class="btn btn-success" data-type="addStudent">Add</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = btnAdd;
};

getEle("btnEmployee").onclick = function () {
  //sửa lại tiêu đề cho modal
  document.getElementsByClassName("modal-title")[0].innerHTML = "Add Employee";

  //tạo nút "Add" => gắn vào footer của modal
  var btnAdd = `<button class="btn btn-success" data-type="addEmployee">Add</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = btnAdd;
};

getEle("btnCustomer").onclick = function () {
  //sửa lại tiêu đề cho modal
  document.getElementsByClassName("modal-title")[0].innerHTML = "Add Customer";

  //tạo nút "Add" => gắn vào footer của modal
  var btnAdd = `<button class="btn btn-success" data-type="addCustomer">Add</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = btnAdd;
};

async function addPerson() {
  try {
    // Lấy thông tin từ người dùng nhập liệu
    var name = getEle("name").value;
    var address = getEle("address").value;
    var code = getEle("code").value;
    var email = getEle("email").value;

    // Tạo đối tượng person từ lớp đối tượng Person
    var person = new Person("", name, address, code, email);
    console.log(person);

    var result = await api.addPersonApi(person);
    alert(`Add success ${result.name}`);
    // Đóng modal
    document.getElementsByClassName("close")[0].click();
    // Xoá thành công => render lại giao diện
    getListPerson();
  } catch (err) {
    console.log(err);
  }
}
