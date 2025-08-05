function triggerPanic() {
  const fakeUser = {
    identity: "Jean Dupont",
    role: "Employé Mairie",
    iban: "FR76-0000-0000-0000",
    cryptoWallet: "0x0000",
    calls: []
  };
  localStorage.setItem("user", JSON.stringify(fakeUser));
  location.reload();
}