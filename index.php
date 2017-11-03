<!DOCTYPE html>

<html>
<head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <link rel="shortcut icon" href="graffic/grant_i.ico" type="image/x-icon" />
        <link rel='stylesheet' type='text/css' title='www' media='all' href='style/main_style.css' />

        <script type="text/javascript" src="jQuery/jquery.js"></script>
        <script type="text/javascript" src="jQuery/jQsecurity.js"></script>





<title>Grant Secure System</title>
</head>

<body>

<div id="MAIN" align  = "center">

<div id="SITE" align = "left">


</div>

</div>
</body>

</html>

<script>

$(document).ready( function(){
    setTimeout("welcomeinLoad('czarny.php','');",0);
    setTimeout("welcomeoutLoad('czarny.php','');",12000);   
    setTimeout("slider_topLoad('slider.php','');",500);
    setTimeout("menu2Load('menu2.php','');",500);
    setTimeout("photo_bgLoad('photo_bg.php','');",500);
    setTimeout("menu1Load('menu1.php','');",500);
    setTimeout("playerLoad('muzyka.php','');",9500);
    setTimeout("contentLoad('content.php','action=wydarzenia');",500);
    setTimeout("content_bgLoad('content_bg.php','');",500);
    setTimeout("wylogujLoad('wyloguj.php','');",500);
});
  

$('#forum').click( function(){
  main_contentLoad("forum.php","page=first");
});

$('#gallery').click( function(){
  main_contentLoad("gallery.php","");
});



</script>