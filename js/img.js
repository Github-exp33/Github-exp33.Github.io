<!--index-item смена картинок по клику-->
var contentImg = document.querySelector(".contentImg");           //Получаем весь блок с картинками
var big = contentImg.querySelector(".big img");                   //Получаем большую кртинку
var min1 = contentImg.querySelector(".min div:nth-child(1) img");   //Получаем маленькую кртинку1
var min2 = contentImg.querySelector(".min div:nth-child(2) img");   //Получаем маленькую кртинку2
var min3 = contentImg.querySelector(".min div:nth-child(3) img");   //Получаем маленькую кртинку3
// Если кликаем по первой картинке
//                                1-Item-min-140x149.jpg
// то должны открыть
//                                1-Item-full-980x1062.jpg
// //
// Если кликаем по второй картинке
//                                2-Item-min-140x149.jpg
// то должны открыть
//                                2-Item-full-980x1062.jpg
// //
// Если кликаем по третьей картинке
//                                3-Item-min-140x149.jpg
// то должны открыть
//                                3-Item-full-980x1062.jpg
min1.addEventListener("click", function () {
    big.src = "image/1-Item-full-980x1062.jpg";
    big.alt = "Full1"
});
min2.addEventListener("click", function () {
    big.src = "image/2-Item-full-980x1062.jpg";
    big.alt = "Full2"
});
min3.addEventListener("click", function () {
    big.src = "image/3-Item-full-980x1062.jpg";
    big.alt = "Full3"
});
