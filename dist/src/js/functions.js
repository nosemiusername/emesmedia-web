console.log("\n\n%cDevelopment by \n%cEmesmedia\n%cwww.emesmedia.com%c\n\n","font-size: 20px; color:#000; font-weight:300","font-size: 30px; color:#D9487D; font-weight:800",'<a href="/" target="_blank" style="font-size: 20px">',"</a><hr/>");let btnGoTop=document.querySelector("#btn-go-top");function scrollFunction(){document.body.scrollTop>50||document.documentElement.scrollTop>50?btnGoTop.classList="active":btnGoTop.classList="inactive"}function topFuction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}document.onscroll=function(){scrollFunction()},btnGoTop.addEventListener("click",topFuction);let btnOpen=document.querySelector(".icon-burger-open"),btnClosed=document.querySelector(".icon-burger-closed"),menuMobile=document.querySelector(".menu-mobile"),cuerpo=document.querySelector("body"),enlacesMenu=document.querySelectorAll(".menu-mobile li a");btnOpen.addEventListener("click",function(){menuMobile.classList.add("active"),cuerpo.style.overflow="hidden",btnOpen.classList.add("active"),btnClosed.classList.add("active")}),btnClosed.addEventListener("click",function(){menuMobile.classList.remove("active"),cuerpo.style.overflow="",btnOpen.classList.remove("active"),btnClosed.classList.remove("active")}),enlacesMenu.forEach(function(a){a.addEventListener("click",function(){menuMobile.classList.remove("active"),cuerpo.style.overflow="",btnOpen.classList.remove("active"),btnClosed.classList.remove("active")})})