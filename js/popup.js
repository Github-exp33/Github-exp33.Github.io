var link=document.querySelector(".main-navigation .login"),link_toggle=document.querySelector(".menuToggle .login"),popup=document.querySelector(".modal-content"),overlay=document.querySelector(".modal-overlay"),login=popup.querySelector("[name=login]"),password=popup.querySelector("[name=password]"),form=popup.querySelector("form"),close=popup.querySelector(".modal-content-close"),btn=form.querySelector(".btn"),storage=localStorage.getItem("login");link.addEventListener("click",function(o){o.preventDefault(),popup.classList.add("modal-content-show"),overlay.classList.add("modal-overlay-show"),storage?(login.value=storage,password.focus()):login.focus()}),link_toggle.addEventListener("click",function(o){o.preventDefault(),popup.classList.add("modal-content-show"),overlay.classList.add("modal-overlay-show"),storage?(login.value=storage,password.focus()):login.focus()}),close.addEventListener("click",function(){popup.classList.remove("modal-content-show"),overlay.classList.remove("modal-overlay-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(o){login.value?localStorage.setItem("login",login.value):(o.preventDefault(),popup.classList.add("modal-error")),password.value||(o.preventDefault(),popup.classList.add("modal-error"))}),btn.addEventListener("click",function(o){popup.classList.contains("modal-error")&&popup.classList.remove("modal-error")}),window.addEventListener("keydown",function(o){27===o.keyCode&&popup.classList.contains("modal-content-show")&&overlay.classList.contains("modal-overlay-show")&&(popup.classList.remove("modal-content-show"),overlay.classList.remove("modal-overlay-show"),popup.classList.remove("modal-error"))}),overlay.addEventListener("click",function(){popup.classList.contains("modal-content-show")&&overlay.classList.contains("modal-overlay-show")&&(popup.classList.remove("modal-content-show"),overlay.classList.remove("modal-overlay-show"),popup.classList.remove("modal-error"))});