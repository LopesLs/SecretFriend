window.addEventListener('load', () => {
  let data = JSON.parse(localStorage.getItem('chosen'));

  Object.values(data).forEach((element, index) => {
    if (index == 0) {
      document.getElementById('chosen-name').innerText = element;
    } else {
      document.getElementById('chosen-email').innerText = element;
    };
  });
});

document.getElementById('ok-button').addEventListener('click', () => {
  window.location.href = '../../index.html';
});