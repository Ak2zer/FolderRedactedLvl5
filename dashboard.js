window.onload = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  let html = `<h1>Welcome, ${user.identity}</h1>`;
  html += `<p><strong>Role:</strong> ${user.role}</p>`;
  html += `<p><strong>IBAN:</strong> ${user.iban}</p>`;
  html += `<p><strong>Crypto Wallet:</strong> ${user.cryptoWallet}</p>`;
  html += "<h3>Call History:</h3><ul>";
  user.calls.forEach(call => {
    html += `<li>${call.to} at ${call.time} (${call.duration})</li>`;
  });
  html += "</ul>";
  document.getElementById("dashboard").innerHTML = html;
};