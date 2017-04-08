<!--Вход Прорисовка попапа и оверлей -->
var link = document.querySelector(".main-navigation .login");             //поиск по классу
var link_toggle = document.querySelector(".menuToggle .login");             //поиск по классу
var popup = document.querySelector(".modal-content");    //поиск по классу
var overlay = document.querySelector(".modal-overlay");  //поиск по классу
var login = popup.querySelector("[name=login]"); //Поиск в ПОПАПЕ элемента по атрибуту ВНИМАНИЕ!!!
var password = popup.querySelector("[name=password]"); //Поиск в ПОПАПЕ элемента по атрибуту ВНИМАНИЕ!!!
var form = popup.querySelector("form"); //Поиск в ПОПАПЕ элемента по тегу ВНИМАНИЕ!!!
var close = popup.querySelector(".modal-content-close");
var btn = form.querySelector(".btn"); // сама кнопка

var storage = localStorage.getItem("login");//ЛОКАЛЬНОЕ ХРАНИЛИЩЕ

//При клики на обьект login вызываем ПОПАП и ОВЕЛЕЙ
link.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("click!");
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");

    if (storage) {
        login.value = storage;
        password.focus();
    }
    else {
        login.focus();//Альтернатива autofocus в CSS как атрибут НО ОН НЕ ПОДХОДИТ ТК КАК работает ПРИ ЗАГРУЗКИ СТРАНИЦИ
    }
});
//При клики на обьект login вызываем ПОПАП и ОВЕЛЕЙ
link_toggle.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("click!");
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");

    if (storage) {
        login.value = storage;
        password.focus();
    }
    else {
        login.focus();//Альтернатива autofocus в CSS как атрибут НО ОН НЕ ПОДХОДИТ ТК КАК работает ПРИ ЗАГРУЗКИ СТРАНИЦИ
    }
});

<!--Закрытие попапа и оверлей на КРЕСТИК-->
close.addEventListener("click", function () {
    console.log("close!");
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-overlay-show");
    popup.classList.remove("modal-error");
});

//ОТправка всей формы
form.addEventListener("submit", function (event) {
    console.log("Отправка фрмы---------------->>>");
    console.log("login= " + login.value);
    console.log("password= " + password.value);

    if (!login.value) {
        event.preventDefault();
        console.log("Логин не заполнен!");
        //дальше работает анимация
        popup.classList.add("modal-error");
    }
    else {
        localStorage.setItem("login", login.value);
    }

    if (!password.value) {
        event.preventDefault();
        console.log("Паррль не заполнен!");
        //дальше работает анимация
        popup.classList.add("modal-error");
    }

});
//пытаюсь поймать клик одной кнопки для повторной анимации modal-error
btn.addEventListener("click",function (e) {
    //e.preventDefault();
    console.log("aaaaaaaaaaaaaaaaa");
    //для повторного напоминания об ОШИБКЕ
    if (popup.classList.contains("modal-error")) {
        popup.classList.remove("modal-error");
    }
});

//переписываю на jquery код рабочий
// $('form').submit(function (e) {
//     alert('Форма foo отправлена на сервер.');
//     if (!login.value) {
//         event.preventDefault();
//         console.log("Логин не заполнен!");
//         //дальше работает анимация
//         popup.classList.add("modal-error");
//     }
//     else {
//         localStorage.setItem("login", login.value);
//     }
//
//     if (!password.value) {
//         event.preventDefault();
//         console.log("Паррль не заполнен!");
//         //дальше работает анимация
//         popup.classList.add("modal-error");
//     }
//
// });

<!--Закрываем модальное окно по ESC-->
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        console.log("Был нажат ESC");
        if (popup.classList.contains("modal-content-show") && overlay.classList.contains("modal-overlay-show")) {
            popup.classList.remove("modal-content-show");
            overlay.classList.remove("modal-overlay-show");
            popup.classList.remove("modal-error");
        }
    }
});
<!--Закрываем модальное окно по клику в любое место Overlay-->
overlay.addEventListener("click", function () {
    console.log("Был клик на Overlay");
    if (popup.classList.contains("modal-content-show") && overlay.classList.contains("modal-overlay-show")) {
        popup.classList.remove("modal-content-show");
        overlay.classList.remove("modal-overlay-show");
        popup.classList.remove("modal-error");
    }
});

// Второй ПОПАП КАРТА
var button = document.querySelector(".js-open-map");
var map = document.querySelector(".modal-content-map");
var mapClose = map.querySelector(".modal-content-close");
var overlayMap = document.querySelector(".modal-overlay");
<!--Открытие карты-->
button.addEventListener("click", function (event) {
    event.preventDefault();
    //console.log(map);


    //На JavaScript определяем размер клиентской части окна браузера
    var mapWidth = document.body.clientWidth;
    ///Разворачиваем карту на всю
    if (mapWidth<900) {

        map.classList.add("modal-content-show-map");
        overlayMap.classList.add("modal-overlay-show");

       //(меняем свойство CSS)
        map.style.cssText =
            "width:" + 100 + "%;" +
            "background-size:" + client_w + "px " + client_h + "px;" +
            "left: 0%;" +
            "top: 10%;" +
            "margin-left:" + 0 + "%;" +
            "margin-top:" + 0 + "%;" +
            "";
    } else {
        map.classList.add("modal-content-show-map");
        overlayMap.classList.add("modal-overlay-show");
    }
});
<!--Закрытие КАРТЫ на КРЕСТИК-->
mapClose.addEventListener("click", function () {
    console.log("Крестик!");
    map.classList.remove("modal-content-show-map");
    overlayMap.classList.remove("modal-overlay-show");
});
<!--Закрываем КАРТУ по ESC-->
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        console.log("Был нажат ESC");
        if (map.classList.contains("modal-content-show-map") && overlayMap.classList.contains("modal-overlay-show")) {
            map.classList.remove("modal-content-show-map");
            overlayMap.classList.remove("modal-overlay-show");
        }
    }
});
<!--Закрываем КАРТУ по клику в любое место Overlay-->
overlayMap.addEventListener("click", function () {
    console.log("Был клик на Overlay");
    if (map.classList.contains("modal-content-show-map") && overlayMap.classList.contains("modal-overlay-show")) {
        map.classList.remove("modal-content-show-map");
        overlayMap.classList.remove("modal-overlay-show");
    }
});

// Работаем со СЛАЙДЕРОМ
var gallery = document.querySelector(".gallery figure");
var gallery_prev = document.querySelector(".gallery-prev");//НАЗАД
var gallery_next = document.querySelector(".gallery-next");//ВПЕРЕД
var currentSlide = 0; //Счетчик слайдера

//Отслеживаем клик
gallery_prev.addEventListener("click", function () {
    ////gallery.children[currentSlide].className = "";
    //проверяем есть ли класс удаления
    if (gallery.children[currentSlide].classList.contains("showing")) {
        gallery.children[currentSlide].classList.remove("showing");
    }
    currentSlide = currentSlide - 1;
    if (currentSlide < 0) {currentSlide = 7};
    gallery.children[currentSlide].classList.add("showing");
    //gallery.children[currentSlide].classList.toggle("showing");
});
gallery_next.addEventListener("click", function () {
    ////gallery.children[currentSlide].className = "";
    //проверяем есть ли класс удаления
    if (gallery.children[currentSlide].classList.contains("showing")) {
        gallery.children[currentSlide].classList.remove("showing");
    }

    currentSlide = currentSlide + 1;
    if (currentSlide == 8) {currentSlide = 0};
    gallery.children[currentSlide].classList.add("showing");
    //gallery.children[currentSlide].classList.toggle("showing");
});

window.onload = function () {
    // console.log("-----------------------------------------");
    // console.log("window.onload = function () СРАБОТАЛА");
    // console.log(gallery);
    // console.log(" "+gallery.length);
    // console.log(gallery["2"]);
    // console.log(gallery.children[0]);
    // console.log(gallery.children.length);
    // console.log("-----------------------------------------");

    // setInterval(function(){
    //     gallery.children[currentSlide].className = "";
    //     currentSlide = currentSlide + 1;
    //     if (currentSlide == 8) {currentSlide = 0};
    //     gallery.children[currentSlide].className = "showing";
    // },3000);

    //Рекурсивный setTimeout
    var timerId = setTimeout(function timerAD() {
        ////gallery.children[currentSlide].className = "";
        //проверяем есть ли класс удаления
        if (gallery.children[currentSlide].classList.contains("showing")) {
            gallery.children[currentSlide].classList.remove("showing");
        }

        currentSlide = currentSlide + 1;
        if (currentSlide == 8) {currentSlide = 0};
        gallery.children[currentSlide].classList.add("showing");
        //gallery.children[currentSlide].classList.toggle("showing");

        //и сам вызов рекурсии
        timerId = setTimeout(timerAD, 3000);
    },3000)
};


//Работа с адаптивным попапом который разварачивается на клик по минеатюре фотографии-->
var popupAdaptiv = document.querySelector(".modal-photo");//этот сам попап
var minPhoto = document.querySelector(".gallery figure");
var photoClose = popupAdaptiv.querySelector(".modal-content-close");//закрытие фотки
var overlayPhoto = document.querySelector(".modal-overlay");//оверлей фотки

var leftPrev = popupAdaptiv.querySelector(".fa-chevron-circle-left");//левая галка
var rightNext = popupAdaptiv.querySelector(".fa-chevron-circle-right");//правая галка
var currentSlideFull;
//На JavaScript определяем размер клиентской части окна браузера
var client_w;
var client_h;
/////////////////////////САМА ПРОПОРЦИЯ///////////
//1024x768 и 800x600. где высота 600 нам не ясна
//768/(1024/800) = 600.

// 1920x1080 и [переменная] x [искомая высота]. где высота 600 нам не ясна
//1080/(1920/[переменная ширина]) = [искомая переменная высота].
/////////////////////////САМА ПРОПОРЦИЯ///////////
//Отслеживаем клик
minPhoto.addEventListener("click", function (e) {
    e.preventDefault();
    //На JavaScript определяем размер клиентской части окна браузера
    var cr3 = document.body.clientWidth;
    client_w = document.body.clientWidth;
    client_h = document.body.clientHeight;
    client_h = 1080/(1920/client_w);//основная формула
    console.log("100% client_w:"+client_w);
    console.log("100% client_h:"+client_h);

    //Делаем попап 80% от общей ширины экрана
    client_w = (client_w/100)*80;
    client_h = (client_h/100)*80;

    console.log("80% client_w:"+client_w);
    console.log("80% client_h:"+client_h);

    //Важное условие на минимальный размер экрана для показа ПОПАПА и ОВЕРЛЕЯ
    //         460 это 480 ---> 20 px сам скрол
    if (cr3 >= 460) {

        //начальное значение слайдера
        currentSlideFull = currentSlide + 1;

        popupAdaptiv.classList.add("modal-photo-show");
        overlayPhoto.classList.add("modal-overlay-show");

        //Full слайдер сделал через бекграунд (меняем свойство CSS)
        popupAdaptiv.style.cssText =
            "background-image: url(" + "image/gallery-" + (currentSlideFull) + "-1920х1080.jpg" + ");" +
            "width:" + client_w + "px;" +
            "height:" + client_h + "px;" +
            "background-size:" + client_w + "px " + client_h + "px;" +
            "left: 10%;" +
            "top: 3%;" +
            "margin-left:" + 0 + "%;" +
            "margin-top:" + 0 + "%;" +
            "";
    }

});
photoClose.addEventListener("click", function () {
    popupAdaptiv.classList.remove("modal-photo-show");
    overlayPhoto.classList.remove("modal-overlay-show");
});

//Отслеживаем клик на адаптивный попап (галка вперед и галка назад)
leftPrev.addEventListener("click", function () {
    console.log("leftPrev = "+currentSlideFull);
    //Обязательный блок - считаем старый счетчик
    //gallery.children[currentSlideFull].className = "";
    currentSlideFull = currentSlideFull - 1;
    if (currentSlideFull < 1) {currentSlideFull = 7};

    //Full слайдер сделал через бекграунд (меняем свойство CSS)
    popupAdaptiv.style.cssText =
        "background-image: url(" + "image/gallery-"+(currentSlideFull)+"-1920х1080.jpg" + ");" +
        "width:"+ client_w +"px;" +
        "height:"+ client_h +"px;" +
        "background-size:"+ client_w +"px "+ client_h +"px;" +
        "left: 10%;" +
        "top: 3%;" +
        "margin-left:"+ 0 +"%;" +
        "margin-top:"+ 0 +"%;" +
        "";
});
rightNext.addEventListener("click", function () {
    console.log("rightNext ="+currentSlideFull);
    //Обязательный блок - считаем старый счетчик
    //gallery.children[currentSlideFull].className = "";
    currentSlideFull = currentSlideFull + 1;
    if (currentSlideFull == 8) {currentSlideFull = 1};

    //Full слайдер сделал через бекграунд (меняем свойство CSS)
    popupAdaptiv.style.cssText =
        "background-image: url(" + "image/gallery-"+(currentSlideFull)+"-1920х1080.jpg" + ");" +
        "width:"+ client_w +"px;" +
        "height:"+ client_h +"px;" +
        "background-size:"+ client_w +"px "+ client_h +"px;" +
        "left: 10%;" +
        "top: 3%;" +
        "margin-left:"+ 0 +"%;" +
        "margin-top:"+ 0 +"%;" +
        "";
});
<!--Нажатие на стрелки ВРЕПЕД И НАЗАД-->
//left
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 37) {
         leftPrev.click();
    }
});
//right
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 39) {
        rightNext.click();
    }
});

<!--Закрываем PHOTO по ESC-->
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        console.log("Был нажат ESC");
        if (popupAdaptiv.classList.contains("modal-photo-show") && overlayPhoto.classList.contains("modal-overlay-show")) {
            popupAdaptiv.classList.remove("modal-photo-show");
            overlayPhoto.classList.remove("modal-overlay-show");
        }
    }
});
<!--Закрываем PHOTO по клику в любое место Overlay-->
overlayPhoto.addEventListener("click", function () {
    console.log("Был клик на Overlay");
    if (popupAdaptiv.classList.contains("modal-photo-show") && overlayPhoto.classList.contains("modal-overlay-show")) {
        popupAdaptiv.classList.remove("modal-photo-show");
        overlayPhoto.classList.remove("modal-overlay-show");
    }
});

<!--Функция РЕСАЙЗ получаем высоту и ширину акна в режиме реального времени (сделано для всплываещнго ПОПАПА "слайдер"+"карта")-->
// window.onresize = function () {
//     width = document.documentElement.clientWidth;
//     height = document.documentElement.clientHeight;
//     console.log("width: "+width);
//     console.log("height: "+height);
// };
<!--На JavaScript определяем размер клиентской части окна браузера-->
// var client_w = document.body.clientWidth;
// var client_h = document.body.clientHeight;


