document.getElementById('buttonAdd').addEventListener('click', () => {
  let object = createObject(document.getElementsByName('name'), );
});

const setObjectLocalStorage = (object) => {
  if (localStorage.getIem('users') == null) {
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