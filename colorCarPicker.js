const elRed = document.getElementById("redPicker");
const elGreen = document.getElementById("greenPicker");
const elBlue = document.getElementById("bluePicker");
const prodImg = document.getElementById("productImg");
const tag = document.getElementById("tag");
const button = document.getElementById("button");

elGreen.addEventListener("click", (event) => {
  console.log("clicked green");
  prodImg.style.backgroundImage =
    'url("https://res.cloudinary.com/dsozzm34s/image/upload/v1714136246/Javascript/boris-m-_CiyeM2kvqs-unsplash_zotebt.jpg")';
  tag.style.color = "green";
});

elBlue.addEventListener("click", (event) => {
  console.log("clicked blue");
  prodImg.style.backgroundImage =
    'url("https://res.cloudinary.com/dsozzm34s/image/upload/v1714136246/Javascript/boris-m-_CiyeM2kvqs-unsplash_zotebt.jpg")';
  tag.style.color = "blue";
});

elRed.addEventListener("click", (event) => {
  console.log("clicked red");
  prodImg.style.backgroundImage =
    'url("https://res.cloudinary.com/dsozzm34s/image/upload/v1714136248/Javascript/viktor-theo-7nn15fCDL4w-unsplash_wqokwq.jpg")';
  tag.style.color = "red";
});

button.addEventListener("click", (event) => {
  event.target.innerText = "Yeay, your stuff has been added to cart!”";
  event.target.style.backgroundColor = "#0C2682";
});

// 1. lanjutkan hal yang sama untuk picker warna biru, dan merah.
// 2. rubah text color dari value dengan id=tag sesuai dengan warna yang dipilih.

// 3. nanti ada lagi tambahannya ,stay tune di hari jumat.
