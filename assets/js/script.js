const loadAge = () => {
  document.querySelector('#age').innerHTML = (`<b>Age:</b> ${new Date().getFullYear() - 2003}`);
}

function onSubmit(token) {
  const name = document.querySelector("#form-contact-name").value;
  const email = document.querySelector("#form-contact-email").value;
  const subject = document.querySelector("#form-contact-subject").value;
  const message = document.querySelector("#form-contact-message").value;

  const formattedBody = `Name: ${name}\nEmail: ${email}\n\n${message}\n\n`;

  window.open(`mailto:profissional.ymatheus@gmail.com?subject=${subject}&body=${encodeURIComponent(formattedBody)}`);
}

window.onload = () => {
  loadAge();
}