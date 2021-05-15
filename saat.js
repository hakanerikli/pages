function isim() {
  let ad = prompt("Lütfen adınızı giriniz");
  document.querySelector("#name").innerText = ad;
}

function zaman() {
  let tarih = new Date();
  let saat = tarih.getHours();
  let dakika = tarih.getMinutes();
  let saniye = tarih.getSeconds();
  let gun = tarih.getDay();

  if (gun == 0) {
    gun = "Pazartesi";
  } else if (gun == 1) {
    gun = "Salı";
  } else if (gun == 2) {
    gun = "Çarşamba";
  } else if (gun == 3) {
    gun = "Perşembe";
  } else if (gun == 4) {
    gun = "Cuma";
  } else if (gun == 5) {
    gun = "Cumartesi";
  } else if (gun == 6) {
    gun = "Pazar";
  } 
  saat = saat < 10 ? "0" + saat : saat;
  dakika = dakika < 10 ? "0" + dakika : dakika;
  saniye = saniye < 10 ? "0" + saniye : saniye;

  let time = `${saat}:${dakika}:${saniye} ${gun}`
  document.getElementById("saat").innerText = time;
  document.getElementById("saat").textContent = time;

  setTimeout(zaman, 1000);
}
isim();
zaman();