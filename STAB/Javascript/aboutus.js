var navicon = document.getElementById('navicon');
var cheading = document.getElementById('cheading');
var cdetails = document.getElementById('cdetails');
var cheadname = document.getElementById('cheadname');
var cheaddetail = document.getElementById('cheaddetail');
var cimage1 = document.getElementById('cimage1');
var cimage2 = document.getElementById('cimage2');
var cimage3 = document.getElementById('cimage3');
var cimage4 = document.getElementById('cimage4');
var cimage5 = document.getElementById('cimage5');
var individual_common = document.getElementById('individual-common');

function commonbackFunction() {
  navicon.style.display = 'block';
  setTimeout(function() {
    individual_common.style.marginLeft = '100vw';
  }, 0);
}

function commonclubfunction(x) {
  navicon.style.display = 'none';
  setTimeout(function() {
    individual_common.style.marginLeft = '0vw';
  }, 0);
  console.log('comminghere', x);
  if (x == 'architechs') {
    cheading.innerHTML = 'ArchiTechs';
    cdetails.innerHTML =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, expedita dolore ipsam tenetur iure similique pariatur alias minus corporis provident aperiam cupiditate soluta, libero est facere qui itaque reiciendis animi quae odit quis hic praesentium optio nemo. Beatae consectetur distinctio repellendus tempore optio ipsam reiciendis praesentium hic facere.';
    cheadname.innerHTML = 'Architechs-Head';
    cheaddetail.innerHTML = 'Head-detail';
    cimage1.src = './images/1.jpg';
    cimage2.src = './images/2.jpg';
    cimage3.src = './images/3.jpg';
    cimage4.src = './images/4.jpg';
    cimage5.src = './images/5.jpg';
  } else if (x == 'er') {
    cheading.innerHTML = 'E & R';
    cdetails.innerHTML =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, expedita dolore ipsam tenetur iure similique pariatur alias minus corporis provident aperiam cupiditate soluta, libero est facere qui itaque reiciendis animi quae odit quis hic praesentium optio nemo. Beatae consectetur distinctio repellendus tempore optio ipsam reiciendis praesentium hic facere.';
    cheadname.innerHTML = 'e&r-Head';
    cheaddetail.innerHTML = 'Head-detail';
    cimage1.src = './images/1.jpg';
    cimage2.src = './images/2.jpg';
    cimage3.src = './images/3.jpg';
    cimage4.src = './images/4.jpg';
    cimage5.src = './images/5.jpg';
  } else if (x == 'gomyno') {
    cheading.innerHTML = 'GOMYNO';
    cdetails.innerHTML =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, expedita dolore ipsam tenetur iure similique pariatur alias minus corporis provident aperiam cupiditate soluta, libero est facere qui itaque reiciendis animi quae odit quis hic praesentium optio nemo. Beatae consectetur distinctio repellendus tempore optio ipsam reiciendis praesentium hic facere.';
    cheadname.innerHTML = 'gomyno-Head';
    cheaddetail.innerHTML = 'Head-detail';
    cimage1.src = './images/1.jpg';
    cimage2.src = './images/2.jpg';
    cimage3.src = './images/3.jpg';
    cimage4.src = './images/4.jpg';
    cimage5.src = './images/5.jpg';
  } else if (x == 'googledsc') {
    cheading.innerHTML = 'GOOGLE DSC';
    cdetails.innerHTML =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, expedita dolore ipsam tenetur iure similique pariatur alias minus corporis provident aperiam cupiditate soluta, libero est facere qui itaque reiciendis animi quae odit quis hic praesentium optio nemo. Beatae consectetur distinctio repellendus tempore optio ipsam reiciendis praesentium hic facere.';
    cheadname.innerHTML = 'googledsc-Head';
    cheaddetail.innerHTML = 'Head-detail';
    cimage1.src = './images/1.jpg';
    cimage2.src = './images/2.jpg';
    cimage3.src = './images/3.jpg';
    cimage4.src = './images/4.jpg';
    cimage5.src = './images/5.jpg';
  } else if (x == 'motorsports') {
    cheading.innerHTML = 'MOTORSPORTS';
    cdetails.innerHTML =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, expedita dolore ipsam tenetur iure similique pariatur alias minus corporis provident aperiam cupiditate soluta, libero est facere qui itaque reiciendis animi quae odit quis hic praesentium optio nemo. Beatae consectetur distinctio repellendus tempore optio ipsam reiciendis praesentium hic facere.';
    cheadname.innerHTML = 'motorsports-Head';
    cheaddetail.innerHTML = 'Head-detail';
    cimage1.src = './images/1.jpg';
    cimage2.src = './images/2.jpg';
    cimage3.src = './images/3.jpg';
    cimage4.src = './images/4.jpg';
    cimage5.src = './images/5.jpg';
  } else if (x == 'mdash') {
    cheading.innerHTML = 'M-DASH';
    cdetails.innerHTML =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, expedita dolore ipsam tenetur iure similique pariatur alias minus corporis provident aperiam cupiditate soluta, libero est facere qui itaque reiciendis animi quae odit quis hic praesentium optio nemo. Beatae consectetur distinctio repellendus tempore optio ipsam reiciendis praesentium hic facere.';
    cheadname.innerHTML = 'mdash-Head';
    cheaddetail.innerHTML = 'Head-detail';
    cimage1.src = './images/1.jpg';
    cimage2.src = './images/2.jpg';
    cimage3.src = './images/3.jpg';
    cimage4.src = './images/4.jpg';
    cimage5.src = './images/5.jpg';
  }
}

$(document).ready(function() {
  $('.gallery-slider').slick({
    // autoplay: true,
    // autoplaySpeed: 2000,
    // nextArrow: $('.next'),
    // prevArrow: $('.prev')
    arrows: true
  });
  $('.gallery-er').slick({
    // autoplay: true,
    // autoplaySpeed: 2000,
    // nextArrow: $('.next'),
    // prevArrow: $('.prev')
    arrows: true
  });
});
