var nome = document.getElementsByName('name')[0];
var email = document.getElementsByName('email')[0];

document.getElementById('buttonAdd').addEventListener('click', () => {
  registerElements(nome, email);
  nome.value = "";
  email.value = "";
});

document.getElementById('button').addEventListener('click', () => {
  registerElements(nome, email)
  window.location.href = "../../index.html";
})

const registerElements = (name, email) => {
  let object = createObject(name.value, email.value);
  setObjectLocalStorage(object);
};

const setObjectLocalStorage = (object) => {
  if (localStorage.getItem('users') == null) {
    localStorage.setItem('users', JSON.stringify([]));
  };

  let users = JSON.parse(localStorage.getItem('users'));
  users.push(object);

  localStorage.setItem('users', JSON.stringify(users));
};

const createObject = (nome, email) => {
  let object = {
    nome: nome,
    email: email
  };

  return object
};