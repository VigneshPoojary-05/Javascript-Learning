let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addTaskBtn");
let todoContainer = document.querySelector(".todoContainer");
let API = "https://68bd2cf2227c48698f83e532.mockapi.io/api/v1/todos";

addBtn.addEventListener("click", postData);

async function postData() {
    let value = taskInput.value;
    let objData = {
        text: value.trim()
    };
    
  let response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });

  if(response.status === 201){
    fetchData();
  }
}
postData();

async function fetchData() {
  let response = await fetch(API);
  let data = await response.json();

  todoContainer.innerHTML = "";
  data.forEach((obj) => {
    let div = document.createElement("div");
    div.className = "todo";
    div.innerHTML = `
      <p>${obj.text}</p>
      <div class="btns">
        <button>Edit</button>
        <button>Delete</button>
      </div>`
    todoContainer.append(div);
  });
}
fetchData();