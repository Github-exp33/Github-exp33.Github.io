var button=document.querySelector(".js-open-map"),map=document.querySelector(".modal-content-map"),mapClose=map.querySelector(".modal-content-close"),overlayMap=document.querySelector(".modal-overlay");button.addEventListener("click",function(e){e.preventDefault(),document.body.clientWidth<900?(map.classList.add("modal-content-show-map"),overlayMap.classList.add("modal-overlay-show"),map.style.cssText="width:100%;background-size:"+client_w+"px "+client_h+"px;left: 0%;top: 10%;margin-left:0%;margin-top:0%;"):(map.classList.add("modal-content-show-map"),overlayMap.classList.add("modal-overlay-show"))}),mapClose.addEventListener("click",function(){map.classList.remove("modal-content-show-map"),overlayMap.classList.remove("modal-overlay-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&map.classList.contains("modal-content-show-map")&&overlayMap.classList.contains("modal-overlay-show")&&(map.classList.remove("modal-content-show-map"),overlayMap.classList.remove("modal-overlay-show"))}),overlayMap.addEventListener("click",function(){map.classList.contains("modal-content-show-map")&&overlayMap.classList.contains("modal-overlay-show")&&(map.classList.remove("modal-content-show-map"),overlayMap.classList.remove("modal-overlay-show"))});var gallery=document.querySelector(".gallery figure"),gallery_prev=document.querySelector(".gallery-prev"),gallery_next=document.querySelector(".gallery-next"),currentSlide=0;gallery_prev.addEventListener("click",function(){gallery.children[currentSlide].classList.contains("showing")&&gallery.children[currentSlide].classList.remove("showing"),currentSlide-=1,currentSlide<0&&(currentSlide=7),gallery.children[currentSlide].classList.add("showing")}),gallery_next.addEventListener("click",function(){gallery.children[currentSlide].classList.contains("showing")&&gallery.children[currentSlide].classList.remove("showing"),currentSlide+=1,8==currentSlide&&(currentSlide=0),gallery.children[currentSlide].classList.add("showing")});var popupAdaptiv=document.querySelector(".modal-photo"),minPhoto=document.querySelector(".gallery figure"),photoClose=popupAdaptiv.querySelector(".modal-content-close"),overlayPhoto=document.querySelector(".modal-overlay"),leftPrev=popupAdaptiv.querySelector(".fa-chevron-circle-left"),rightNext=popupAdaptiv.querySelector(".fa-chevron-circle-right"),currentSlideFull,client_w,client_h;minPhoto.addEventListener("click",function(e){e.preventDefault();var t=document.body.clientWidth;client_w=document.body.clientWidth,client_h=document.body.clientHeight,client_h=1080/(1920/client_w),client_w=client_w/100*80,client_h=client_h/100*80,t>=460&&(currentSlideFull=currentSlide+1,popupAdaptiv.classList.add("modal-photo-show"),overlayPhoto.classList.add("modal-overlay-show"),popupAdaptiv.style.cssText="background-image: url(image/gallery-"+currentSlideFull+"-1920х1080.jpg);width:"+client_w+"px;height:"+client_h+"px;background-size:"+client_w+"px "+client_h+"px;left: 10%;top: 3%;margin-left:0%;margin-top:0%;")}),photoClose.addEventListener("click",function(){popupAdaptiv.classList.remove("modal-photo-show"),overlayPhoto.classList.remove("modal-overlay-show")}),leftPrev.addEventListener("click",function(){currentSlideFull-=1,currentSlideFull<1&&(currentSlideFull=7),popupAdaptiv.style.cssText="background-image: url(image/gallery-"+currentSlideFull+"-1920х1080.jpg);width:"+client_w+"px;height:"+client_h+"px;background-size:"+client_w+"px "+client_h+"px;left: 10%;top: 3%;margin-left:0%;margin-top:0%;"}),rightNext.addEventListener("click",function(){currentSlideFull+=1,8==currentSlideFull&&(currentSlideFull=1),popupAdaptiv.style.cssText="background-image: url(image/gallery-"+currentSlideFull+"-1920х1080.jpg);width:"+client_w+"px;height:"+client_h+"px;background-size:"+client_w+"px "+client_h+"px;left: 10%;top: 3%;margin-left:0%;margin-top:0%;"}),window.addEventListener("keydown",function(e){37===e.keyCode&&leftPrev.click()}),window.addEventListener("keydown",function(e){39===e.keyCode&&rightNext.click()}),window.addEventListener("keydown",function(e){27===e.keyCode&&popupAdaptiv.classList.contains("modal-photo-show")&&overlayPhoto.classList.contains("modal-overlay-show")&&(popupAdaptiv.classList.remove("modal-photo-show"),overlayPhoto.classList.remove("modal-overlay-show"))}),overlayPhoto.addEventListener("click",function(){popupAdaptiv.classList.contains("modal-photo-show")&&overlayPhoto.classList.contains("modal-overlay-show")&&(popupAdaptiv.classList.remove("modal-photo-show"),overlayPhoto.classList.remove("modal-overlay-show"))});