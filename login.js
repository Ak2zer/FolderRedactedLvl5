async function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const sound = document.getElementById("type-sound");
  sound.play();

  const res = await fetch('assets/data/comptes.json');
  const comptes = await res.json();

  const found = comptes.find(acc => acc.username === user && acc.password === pass);

  if (found) {
    localStorage.setItem("user", JSON.stringify(found));
    window.location.href = "dashboard.html";
  } else {
    alert("ACCESS DENIED");
  }
}

window.onload = () => {
  setTimeout(() => {
    document.querySelector('.terminal-loader').classList.add('hidden');
    document.querySelector('.login-container').classList.remove('hidden');
  }, 2500);
};