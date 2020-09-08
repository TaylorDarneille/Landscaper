document.addEventListener("DOMContentLoaded", function(event) {   
  let bank = 0;
  const bankBalance = document.getElementById("bank");
  bankBalance.innerHTML = bank;
  document.getElementById("teeth").addEventListener("click", function(event) {
    bank = bank + 1;
    bankBalance.innerHTML = bank;
  });
});