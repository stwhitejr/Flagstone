<?
$url = $_GET['p'];
if (!$url) {
  $url = 'index';
}
?>

<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <title>Flagstone Landscape - DESIGN BUILD MAINTAIN - Weymouth, MA</title>
    <link href="global.css" rel="stylesheet" type="text/css" />
    <script src="global.js" type="text/javascript"></script>
  </head>

  <body id="<?=$url?>" onload="loadContent();">
    <div id="bg_slide_wrap">
      <div id="bg_slide_active" class="bg_slide" style="background-image:url(images/bg_<?=$url?>.jpg);"></div>
      <div id="bg_slide_nonactive" class="bg_slide"></div>
    </div>
    <div class="wrap">
      <div class="header_info">
          <a href="mailto:flagstonelandscape@gmail.com" target="_blank">flagstonelandscape@gmail.com</a> | 339-201-7552
      </div>
      <header>
        <a href="index">
          <img src="images/logo.jpg" class="logo" />
        </a>
        <nav>
          <a id="nav_about" onclick="loadPage('index', aboutBg);">
            About Us
          </a>
          <a id="nav_services" onclick="loadPage('services', servicesBg);">
            Services
          </a>
          <a id="nav_contact" onclick="loadPage('contact', contactBg);">
            Contact
          </a>
          <a id="nav_gallery" onclick="loadGallery()">
            Gallery
          </a>
        </nav>
      </header>
      <section id="content">
        <?include($url . '_view.php');?>
      </section>
      <footer>
        &#169; Copyright Flagstone Landscape 2016
      </footer>
    </div>
    <div id="modal"></div>
    <script src="footer.js" type="text/javascript"></script>
  </body>

</html>