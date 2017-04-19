function loadGallery(close) {
  var modal = document.getElementById('modal');
  modal.classList.toggle('modal_active');
  // stop function if we exited
  if (close == true) {
    modal.innerHTML = '';
    return;
  };
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      modal.innerHTML = xhttp.responseText;
      modal.style.opacity = '1';
    }
  };
  xhttp.open("GET", 'gallery_view.php', true);
  xhttp.send();
}

function galleryNext(dir) {
  var activeImg = document.getElementsByClassName('gallery_active');
  var galleryImgs = document.getElementsByClassName('gallery_img');
  var arrowNext = document.getElementsByClassName('gallery_arrow_right');
  var arrowPrevious = document.getElementsByClassName('gallery_arrow_left');
  for (var i = 0; i < galleryImgs.length; i++) {
    arrowNext[0].style.display = 'block';
    arrowPrevious[0].style.display = 'block';
    if (galleryImgs[i].classList.contains('gallery_active')) {
      if (dir == 'next') {
        galleryImgs[i + 1].classList.add('gallery_active');
        galleryImgs[i].classList.remove('gallery_active');
        if (!(galleryImgs[i + 2])) {
          arrowNext[0].style.display = 'none';
        };
      };
      if (dir == 'previous') {
        galleryImgs[i - 1].classList.add('gallery_active');
        galleryImgs[i].classList.remove('gallery_active');
        if (!(galleryImgs[i - 2])) {
          arrowPrevious[0].style.display = 'none';
        };
      };
      // Stop when we've done this once
      return;
    };
  }
}

  function loadPage(page, bg) {
    var content = document.getElementById('content');
    var body = document.body;
    var active_slide = document.getElementById('bg_slide_active');
    var nonactive_slide = document.getElementById('bg_slide_nonactive');

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {

        //Set background images
        nonactive_slide.style.backgroundImage = 'url(' + bg + ')';
        active_slide.id = 'bg_slide_float';
        nonactive_slide.id = 'bg_slide_active';
        //Load content
        content.style.opacity = '0';
        //wait for opacity transition before loading content
        setTimeout(function(){
          content.innerHTML = xhttp.responseText;
          content.style.opacity = '1';
        }, 1000);
        //Change body ID to new page
        body.id = page;
        //Don't move the below slide until the top one has finished transitioning
        setTimeout(function(){document.getElementById('bg_slide_float').id = 'bg_slide_nonactive';}, 2000);
      }
    };
    xhttp.open("GET", page + '_view.php', true);
    xhttp.send();
    //to change the browser URL to the given link location
    window.history.pushState('','',page);
  }