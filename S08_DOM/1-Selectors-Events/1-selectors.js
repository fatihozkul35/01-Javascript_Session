//* =====================================================
//*                   GETELEMENTBYID()
//* ======================================================

//* EXAMPLE-1 (Paragraph Style)
//*-------------------------------------------------------

const par = document.getElementById("par");
par.style.color = "red";

//* EXAMPLE-2 (Button Style)
//-------------------------------------------------------
const btn = document.getElementById("btn");

btn.style.color = "yellow";
btn.style.backgroundColor = "black";
btn.textContent = "SEARCH";
btn.style.fontSize = "2rem";

//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//* ======================================================

//*EXAMPLE-3 (img styling)
//*-------------------------------------------------------
const img = document.getElementsByTagName("img");
img[0].style.borderStyle = "solid";
img[0].style.borderColor = "black";
img[0].style.transform = "rotate(-5deg)";
console.log(img);
//*======================================================
//*                   GETELEMENTSBYCLASSNAME()
//* ======================================================

//* EXAMPLE-4 (H1 Style)
//* --------------------------------------------------

const header = document.getElementsByClassName("header");
header[0].innerHTML = "<a href='http://www.clarusway.com'>DOM is very easy</a>";
header[0].style.fontFamily = "Tahoma";
header[0].style.color = "blue";

//* ======================================================
//*                   QUERYSELECTOR()
//* ======================================================
const body = document.querySelector("#body");
body.style.backgroundImage = "linear-gradient(to right, green,yellow)";

//* title class'ındaki tüm elementleri seçer.
const title = document.querySelector(".title");
title.textContent = "DOM Manipulation ❤️";

//* Tüm title etiketlerini seçer
// const title = document.querySelector("title");
// title.textContent = "DOM Manipulation ❤️";

//* Tüm p elementlerini nodelist olarak seçer.
//! Nodelist veritipi ile forEach gibi array iterasyon metotları kullanılabilir.

//! HTMLCollection veri tipi ile array iterasyon metotları kullanılmaz. Lakin klasik döngü cümlecikleri kullanılabilir.
const p = document.querySelectorAll("p");
console.log(p);
