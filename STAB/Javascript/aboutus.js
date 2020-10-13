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
var headpic = document.getElementById('headpic');
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
            '‘Archi-‘, taken from Architect represents the designing aspect and ‘-Techs’, taken from Technology represents \
             the programming aspect. Basically, the group indulges in app and web development, which is bifurcated into \
             designing and programming.The members of the Design team are the creative brains of the group, who lay down \
             the basis for the programming to work on. ArchiTechs team ensures the practicality and is responsible \
             for making the apps and sites operational for users.';
        cheadname.innerHTML = 'ArchiTechs-Head';
        cheaddetail.innerHTML = 'Head-detail';
        cimage1.src = './images/clubs/archi/1.jpg';
        cimage2.src = './images/clubs/archi/2.jpg';
        cimage3.src = './images/clubs/archi/3.jpg';
        cimage4.src = './images/clubs/archi/4.jpg';
        cimage5.src = './images/clubs/archi/5.jpg';
        headpic.src = './images/clubhead/kakashi.jpg'
    } else if (x == 'er') {
        cheading.innerHTML = 'E & R';
        cdetails.innerHTML =
            'The Electronics and Robotics club of IIT Goa provides students with a platform to interested students in pursuing electronic and mechanical design aspects.Several workshops, events and competitions based on\
        Arduino, IOT, etc have been organised in the past and the club continues to be one of the most active clubs\
        under student technical Activities Body.The club caters to every individual with or without experience and\
        helps students gain the required knowledge and experience.';
        cheadname.innerHTML = 'E & R-Head';
        cheaddetail.innerHTML = 'Head-detail';
        cimage1.src = './images/clubs/er/er1.jpg';
        cimage2.src = './images/clubs/er/er2.jpg';
        cimage3.src = './images/clubs/er/er3.jpg';
        cimage4.src = './images/clubs/er/er4.jpg';
        cimage5.src = './images/clubs/er/er5.jpg';
        headpic.src = './images/clubhead/janim.jpg'
    } else if (x == 'gomyno') {
        cheading.innerHTML = 'GOMYNO';
        cdetails.innerHTML =
            'As a part of Student Technical Activities Body, Go Myno, the coding club of IIT Goa has always encouraged \
             students to join the coding community. Along with various events and workshops held regularly, many  \
             hackathons and coding competitions like Game of Codes, etc are organised by the club. The aim of the club \
              is to build a strong coding culture among the passionate students of the institute so that they can get \
              assistance and enhance their coding ability.';
        cheadname.innerHTML = 'GoMyno-Head';
        cheaddetail.innerHTML = 'Head-detail';
        cimage1.src = './images/clubs/gomyno/gomynoa.jpg';
        cimage2.src = './images/clubs/gomyno/gomynob.jpg';
        cimage3.src = './images/clubs/gomyno/gomynoc.jpg';
        cimage4.src = './images/clubs/gomyno/gomynod.jpg';
        cimage5.src = './images/clubs/gomyno/gomynoe.jpg';
        headpic.src = './images/clubhead/yash.jpg'
    } else if (x == 'googledsc') {
        cheading.innerHTML = 'GOOGLE DSC';
        cdetails.innerHTML =
            'DSC IIT Goa powered by Google Developers is a programming club based in IIT Goa. It is a globally recognized student body which helps \
            students to have the opportunity to not only learn development skills, but it also acts as a medium to \
            apply them to real life problems by finding solutions, and then showcasing their work within their \
            communities.By developing solutions, the talented students can now help the local community and have a \
            hands-on experience for building real world applications.';
        cheadname.innerHTML = 'DSC-Head';
        cheaddetail.innerHTML = 'Head-detail';
        cimage1.src = './images/clubs/dsc/dsc1.jpg';
        cimage2.src = './images/clubs/dsc/dsc2.jpg';
        cimage3.src = './images/clubs/dsc/dsc3.jpg';
        cimage4.src = './images/clubs/dsc/dsc4.jpg';
        cimage5.src = './images/clubs/dsc/dsc5.jpg';
        headpic.src = './images/clubhead/aditi.jpeg';
    } else if (x == 'motorsports') {
        cheading.innerHTML = 'INFOSEC';
        cdetails.innerHTML =
            'Infosec IIT Goa consists of students enthusiastic about the domain of Cyber Security. There are currently 103 members\
             in the club. The members have been reporting vulnerabilities in various websites. It also regularly participates in\
              Capture The Flag Competitions. The team is actively involved in educating the students about the Cyber Security domain\
               and assists them in the learning process. It has been the organizing partner for the HCL Cyber Security Hackathon 2020\
                conducted IIT Kanpur.';
        cheadname.innerHTML = 'InfoSec-Head';
        cheaddetail.innerHTML = 'Head-detail';
        cimage1.src = './images/clubs/infosec/infosec1.jpg';
        cimage2.src = './images/clubs/infosec/infosec2.jpg';
        cimage3.src = './images/clubs/infosec/infosec3.jpg';
        cimage4.src = './images/clubs/infosec/infosec4.jpg';
        cimage5.src = './images/clubs/infosec/infosec5.jpg';
        headpic.src = './images/clubhead/rahul.jpg'
    } else if (x == 'mdash') {
        cheading.innerHTML = 'M-DASH';
        cdetails.innerHTML =
            'M-DASH club here at IIT Goa aims to generate interest and impart knowledge among students especially having \
             a mechanical engineering based background. Various workshops and events are held regularly to make the students \
            comfortable with various designing softwares like AutoCAD, Solidworks, etc.Things are taught from scratch to \
            freshmen and hence, everyone is welcome to join the club and gain knowledge and experience.';
        cheadname.innerHTML = 'M-Dash-Head';
        cheaddetail.innerHTML = 'Head-detail';
        cimage1.src = './images/clubs/mdash/mdash1.JPG';
        cimage2.src = './images/clubs/mdash/mdash2.JPG';
        cimage3.src = './images/clubs/mdash/mdash3.JPG';
        cimage4.src = './images/clubs/mdash/mdash4.JPG';
        cimage5.src = './images/clubs/mdash/mdash5.JPG';
        headpic.src = './images/clubhead/darshay.jpg';
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