window.addEventListener('load', () => {
  if (localStorage.getItem('users') == null) {
    let txt = document.createElement('p');
    txt.innerText = 'Estamos sem usuários';
    window.document.body.appendChild(txt);
  };
});