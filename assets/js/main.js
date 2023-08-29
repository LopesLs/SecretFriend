var container = document.getElementById('cardContainer');

window.addEventListener('load', () => {
  if (localStorage.getItem('users') == null) {
    let txt = document.createElement('p');
    txt.innerText = 'Estamos sem usuários';
    window.document.body.appendChild(txt);
  }
  else {
    for (object of JSON.parse(localStorage.getItem('users'))) {
      let fields = []

      for (content in object) {
        fields.push(object[content]);
      };

      createCard(fields[0], fields[1]);
    };

    JSON.parse(localStorage.getItem('users')).forEach((element, index) => {
      for (field in element) {
        if (element[field] == "Carlos") {
          let users = JSON.parse(localStorage.getItem('users'));
          users.splice(index);
          localStorage.setItem('users', JSON.stringify(users));
          console.log("Removido!")
        };
      };
    });
  }
});

const createCard = (nome, email) => {
  let card = document.createElement('div');
  card.classList.add('card');
  let userName = document.createElement('h3');
  userName.classList.add('edit-button');
  let userEmail = document.createElement('p');
  card.appendChild(userName);
  card.appendChild(userEmail);
  container.appendChild(card);

  userName.innerText = nome;
  userEmail.innerText = email;
};

container.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('edit-button')) {
    console.log(target)
    console.log(true)
    return;
  };

  console.log(target.textContent);
})