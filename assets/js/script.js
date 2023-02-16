const loadAge = () => {
  document.querySelector('#age').innerHTML = (`<b>Age:</b> ${new Date().getFullYear() - 2003}`);
}

window.onload = () => {
  loadAge();
}