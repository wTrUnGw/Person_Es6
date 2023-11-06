import Person from "../models/person.js";
import {
  addPersonApi,
  deletePersonById,
  fetchData,
} from "../services/callapi.js";

function getEle(id) {
  return document.getElementById(id);
}
let listPerson = [];

/**
 * Xoa SP
 */
// Gọi hàm deletePersonById và xử lý kết quả
// async function deletePerson(id) {
//   try {
//     const deletedData = await deletePersonById(id);
//     console.log("Deleted data:", deletedData);

//     // getListPerson();
//     // Xử lý dữ liệu đã xóa thành công
//   } catch (error) {
//     // Xử lý lỗi nếu có
//     console.log("Error:", error);
//   }
// }

function hello() {
  alert(hehe);
}

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
            <td>
            <button class="btn btn-info" data-toggle="modal" data-target="#myModal" 
              onclick="editPerson(${person.id})">Edit
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
// hàm Phong
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
  // alert(`Add success ${result.name}`);
  // Đóng modal

  // Xoá thành công => render lại giao diện
};
/**
 * Sửa SP
 */
// function editPerson(id) {
//   //sửa lại tiêu đề cho modal
//   document.getElementsByClassName("modal-title")[0].innerHTML = "Edit Person";

//   //tạo nút "Update" => gắn vào footer của modal
//   var btnUpdate = `<button class="btn btn-success" onclick="updatePerson(${id})">Update</button>`;
//   document.getElementsByClassName("modal-footer")[0].innerHTML = btnUpdate;

//   //lấy thông tin chi tiết của product dựa vào id
//   var promise = api.getPersonById(id);

//   promise
//     .then(function (result) {
//       var person = result.data;
//       //show data ra ngoài các thẻ input
//       getEle("name").value = person.name;
//       getEle("address").value = person.address;
//       getEle("code").value = person.code;
//       getEle("email").value = person.email;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

/**
 * Cap nhat
 */
// function updatePerson(id) {
//   // lấy thông tin từ user nhập liệu
//   var name = getEle("name").value;
//   var address = getEle("address").value;
//   var code = getEle("code").value;
//   var email = getEle("email").value;

//   //tạo đối tượng product từ lớp đối tượng Product
//   var person = new Person("", name, address, code, email);

//   api
//     .updatePersonApi(person)
//     .then(function () {
//       //close modal
//       document.getElementsByClassName("close")[0].click();
//       getListPerson();
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// var promise = api.deletePersonById(id);

//   promise
//     .then(function (result) {
//       //xoá thành công => render lại giao diện
//       getListPerson();
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

getEle("btnThemSP").onclick = function () {
  //sửa lại tiêu đề cho modal
  document.getElementsByClassName("modal-title")[0].innerHTML = "Add Product";

  //tạo nút "Add" => gắn vào footer của modal
  var btnAdd = `<button class="btn btn-success" data-type="add">Add</button>`;
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

// function addPerson() {
//   // lấy thông tin từ user nhập liệu
//   var name = getEle("name").value;
//   var address = getEle("address").value;
//   var code = getEle("code").value;
//   var email = getEle("email").value;

//   //tạo đối tượng person từ lớp đối tượng Person

//   var person = new Person("", name, address, code, email);
//   console.log(person);
//   var promise = api.addPersonApi(person);

//   promise
//     .then(function (result) {
//       alert(`Add success ${result.data.name}`);
//       //close modal
//       document.getElementsByClassName("close")[0].click();
//       //xoá thành công => render lại giao diện
//       getListPerson();
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }
