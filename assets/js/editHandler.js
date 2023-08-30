var saveBtn = document.getElementById('save-button');
var userName = document.getElementsByName('name')[0];
var userEmail = document.getElementsByName('email')[0];
var userActive = "";

window.addEventListener('load', () => {
  let data = JSON.parse(localStorage.getItem('editData'));

  Object.values(data).forEach((element, index) => {
    userActive = Object.values(data)[index - 1];
    userName.value = Object.values(data)[index - 1];
    userEmail.value = Object.values(data)[index];
    return;
  })
});

saveBtn.addEventListener('click', () => {
  JSON.parse(localStorage.getItem('users')).forEach((element, index) => {
    for (field in element) {
      if (element[field] == userActive) {
        let users = JSON.parse(localStorage.getItem('users'));
        users[index].nome = userName.value;
        users[index].email = userEmail.value;
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = "../../index.html";
      };
    };
  });
})
