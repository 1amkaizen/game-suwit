// Logika pilihan komputer
function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

// Function rules atau aturan
function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "gajah") return comp == "orang" ? "MENANG" : "KALAH";
  if (player == "orang") return comp == "gajah" ? "KALAH" : "MENANG";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG";
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date.getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar + [i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

// Score
const scoreComp = document.querySelector(".scoreComp h1");
const scoreP = document.querySelector(".scoreP h1");
let s = 0;
scoreComp.innerHTML = s;
scoreP.innerHTML = s;

// Menyeleksi 3 gambar sekaligus
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  // Event
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    // Rules
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    putar();
    setTimeout(function () {
      // ganti gambar
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      // Menampilkan Hasil
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
      // Menampilkan Score
      if (hasil == "MENANG") {
        scoreP.innerHTML = [s++];
      } else if (hasil == "KALAH") {
        scoreComp.innerHTML = [s++];
      }
    }, 1000);
  });
});

// // Eventss pGajah
// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   // Rules
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   // ganti gambar
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   // Menampilkan Hasil
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// // Events pOrang
// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   // Rules
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   // ganti gambar
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   // Menampilkan Hasil
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// // Events pSemut
// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   // Rules
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   // ganti gambar
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   // Menampilkan Hasil
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
