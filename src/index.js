import { getLocalStorage, setLocalStorage } from "./utiles.js";

(function () {
  const input = document.querySelector("#inputText");
  const button = document.querySelector("#submit");
  const appContainer = document.getElementById("container");

  const state = {
    todo: getLocalStorage("todo")
  };

  document.addEventListener("load", render(state.todo));
  button.addEventListener("click", addTodo);

  function addTodo() {
    const UUID = Math.floor(Math.random() * 3000);
    const value = input.value.trim();

    if (value.length > 20) {
      return window.alert("Text Length should be less than 20");
    }

    if (value === "") return;
    const todoObj = {
      idx: UUID,
      text: value
    };
    state.todo.push(todoObj);
    render(state.todo);
    setLocalStorage("todo", state.todo);
    input.value = "";
  }

  function render(todo) {
    appContainer.innerText = "";
    todo.forEach((el) => TodoUI(el));
  }

  function TodoUI(el) {
    const p = document.createElement("p");
    p.innerText = el.text;
    const span = document.createElement("span");
    span.dataset.id = el.idx;
    span.className = "delete";
    span.innerText = "🗑";
    p.appendChild(span);
    appContainer.appendChild(p);
  }

  appContainer.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (e.target.classList.contains("delete")) {
      const result = window.confirm("Are you Sure  😂");
      if (result) {
        e.target.closest("p").remove();
        state.todo = state.todo.filter((el) => el.idx.toString() !== id);
        setLocalStorage("todo", state.todo);
      }
    }
  });
})();

// propagation
