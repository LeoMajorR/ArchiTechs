function openNav() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (window.innerWidth < window.innerHeight) ){
        document.getElementById("mySidenav").style.left = "-10vw";
        document.getElementById("navicon").style.display= "none";
    } else {
       document.getElementById("mySidenav").style.left = "-6vh";
       document.getElementById("navicon").style.display= "none";
       document.querySelector('body').style.filter= "blur (100px)";
    }
}

function closeNav() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (window.innerWidth < window.innerHeight) ){
        document.getElementById("mySidenav").style.left = "-100vw";
        document.getElementById("navicon").style.display= "inline";
    } else {
       document.getElementById("mySidenav").style.left = "-64.3vh";
       document.getElementById("navicon").style.display= "inline";
    }


}