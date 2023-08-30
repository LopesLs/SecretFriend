var container = document.getElementById('cardContainer');
var raffleBtn = document.getElementById('raffle-button');
var addBtn = document.getElementById('add-button');

window.addEventListener('load', () => {
  if (localStorage.getItem('users') == null || localStorage.getItem('users') == "[]") {
    let txt = document.createElement('p');
    txt.classList.add('text-align-left');
    txt.innerText = 'Nenhum participante adicionado.';
    document.getElementsByClassName('image-container')[0].appendChild(txt);
    raffleBtn.style.display = 'none';
  }
  else {
    document.getElementsByClassName('image-container')[0].style.display = 'none';

    for (object of JSON.parse(localStorage.getItem('users'))) {
      let fields = []

      for (content in object) {
        fields.push(object[content]);
      };

      createCard(fields[0], fields[1]);
    };
  }
});

const createCard = (nome, email) => {
  let card = document.createElement('div');
  card.classList.add('card');
  let userName = document.createElement('h3');
  let userEmail = document.createElement('p');
  let editIcon = document.createElement('p');
  editIcon.classList.add('edit-button');
  let deleteIcon = document.createElement('p');
  deleteIcon.classList.add('delete-button');
  card.appendChild(userName);
  card.appendChild(userEmail);
  card.appendChild(editIcon);
  card.appendChild(deleteIcon)
  container.appendChild(card);

  userName.innerText = nome;
  userEmail.innerText = email;
  editIcon.innerText = "Editar";
  deleteIcon.innerText = "Excluir";
};

const deleteCard = (target) => {
  let card = target.parentElement;
  let userName = card.querySelector('h3');

  JSON.parse(localStorage.getItem('users')).forEach((element, index) => {
    for (field in element) {
      if (element[field] == userName.textContent) {
        let users = JSON.parse(localStorage.getItem('users'));
        users.splice(index);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.reload();
      };
    };
  });
};

const editCard = (target) => {
  let card = target.parentElement;
  let userName = card.querySelector('h3');

  JSON.parse(localStorage.getItem('users')).forEach((element, index) => {
    for (field in element) {
      if (element[field] == userName.textContent) {
        let users = JSON.parse(localStorage.getItem('users'));
        localStorage.setItem('editData', JSON.stringify(users[index]));
        window.location.href = "./assets/html/edit.html";
      };
    };
  });
};

container.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('delete-button')) {
    deleteCard(target);
  };

  if (target.classList.contains('edit-button')) {
    editCard(target);
  };
});

raffleBtn.addEventListener('click', () => {
  let users = JSON.parse(localStorage.getItem('users'));
  let raffle = Math.floor(Math.random() * users.length);
  localStorage.setItem('chosen', JSON.stringify(users[raffle]));
  window.location.href = "./assets/html/chosen.html";
});

addBtn.addEventListener('click', () => {
  window.location.href = "./assets/html/register.html";
});