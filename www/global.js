//Load Inital Content
function loadContent() {
  var content = document.getElementById('content');
  content.style.opacity = '1';
}

  var aboutBg = 'images/bg_index.jpg';
  var servicesBg = 'images/bg_services.jpg';
  var contactBg = 'images/bg_contact.jpg';
  
// window.onload = function() {
//   //Nav
//   var navAbout = document.getElementById('nav_about');
//   var navServices = document.getElementById('nav_services');
//   var navContact = document.getElementById('nav_contact');

  

  // navAbout.onclick=function(e){
  //   loadPage('index', aboutBg);
  //   e.preventDefault();
  // }

  // navServices.onclick=function(e){
  //   loadPage('services', servicesBg);
  //   e.preventDefault();
  // }

  // navContact.onclick=function(e){
  //   loadPage('contact', contactBg);
  //   e.preventDefault();
  // }

// }

  window.onpopstate = function(event) {
    var page = location.pathname.replace('/', '');
    var pageBg = 'images/bg_' + page.replace('/', '') + '.jpg';
    if (page == '') {
      page = 'index';
      pageBg = 'images/bg_index.jpg';
    };
    console.log("pathname: "+page+'imagename:'+pageBg);
    loadPage(page, pageBg);
  };