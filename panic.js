function triggerPanic() {
  const fakeUser = {
    identity: "Jean Dupont",
    role: "Assistant RH",
    iban: "FR76-0000-0000-0000-0000",
    cryptoWallet: "0x000000",
    calls: []
  };
  localStorage.setItem("user", JSON.stringify(fakeUser));
  location.reload();
}