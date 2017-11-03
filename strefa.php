
<?php
require('SQLconnection.php');
?>


<?php 
$getU1 = $_GET['data'];
if($getU1 == 'strefaP1'){$s1 = 1;}
if($getU1 == 'strefaP2'){$s1 = 2;}
if($getU1 == 'strefaP3'){$s1 = 3;}
if($getU1 == 'strefaP4'){$s1 = 4;}
if($getU1 == 'strefaP5'){$s1 = 5;}
if($getU1 == 'strefaP6'){$s1 = 6;}
if($getU1 == 'strefaP7'){$s1 = 7;}
if($getU1 == 'strefaP8'){$s1 = 8;}




        if($_GET['status'] == 'danger'){
        
        echo"<div id='srodkowy' class='danger'>";
        echo"<div id='centered'><div id='rolling'><img src='images/details/rolling.gif' /></div></div>";
        echo"</div>";
              
        }
        
        if($_GET['status'] == 'medium'){
            
                $odczyt_zdarzenO = mysql_query("SELECT * FROM zdarzeniaSecurity ORDER BY id DESC LIMIT 1") or die ("Nie udalo sie pobrac danych");
                for ($i = 0; $i < mysql_num_rows($odczyt_zdarzenO); $i++)
                        {
             	    $row = mysql_fetch_array($odczyt_zdarzenO);
                    $czas = date('H:i:s');
                    $wynikCzas = (strtotime($czas) - strtotime($row[2]));
                      if($wynikCzas > 30){     
                        echo "<a href='#' onclick='openOglosalarm($s1)'>";
                        }else{ 
                            echo "<a href='#' onclick='openWycofajalarmO($s1)'>";
                        }}
                echo"<div id='srodkowy' class='medium'>";
                echo"<input type='hidden' value=$getU1  id='dataS' />";
                echo"<input type='hidden' value='1'  id='ranga' />";
                echo"<div id='bottomed'>
                     <div id='rolling'><img src='images/details/triangle.gif' /></div>
                     </div>";
                echo""; 
                echo"</div></a>";
        
        }
        
        if($_GET['status'] == 'safe'){
            

        echo "<a href='#' onclick='openWprowadzalarm($s1)'>";
        echo"<div id='srodkowy' class='safe'>";
        echo"<input type='hidden' value=$getU1  id='dataS' />";
        echo"<input type='hidden' value='1'  id='ranga' />";
        echo"<div id='bottomed'><div id='ball'><img src='images/details/ball.gif' /></div></div>";
        echo"</div>";
        echo"</a>";

        
       }    
        unset($getU1);  
        unset($s1);
       
 ?>
 
 <script>

function openWprowadzalarm(idS){
    
  $('#eventer1').fadeOut('fast');
  $.post("strefa.php?data=strefaP"+idS, { 
  dataS: $('#dataS').val(),
  ranga: $('#ranga').val()
  }, 
  function(data){
      $('#eventer1').html(data);
      $('#eventer1').fadeIn('fast');
        openstrefaLoad("strefa.php","data=strefaP"+idS+"&status=medium");
        odwolywanieLoad("odwolaj.php","data=strefaP"+idS);
        
  }); 
}


  
function openOglosalarm(idS){
    
  $('#eventer1').fadeOut('fast');
  $.post("zdarzenia.php?data=strefaP"+idS, { 
  dataS: $('#dataS').val(),
  ranga: $('#ranga').val()
  }, 
  function(data){
      $('#eventer1').html(data);
      $('#eventer1').show('fast');
        openstrefaLoad("strefa.php","data=strefaP"+idS+"&status=danger");
        openTimerLoad("timer.php","timer=start");
        zamknijodwolanieLoad("odwolaj.php",""); 
  }); 
}

 function openWycofajalarmO(idS){
    
  $('#eventer1').fadeOut('fast');
  $.post("strefa.php?data=strefaP"+idS, { 
  dataS: $('#dataS').val(),
  ranga: $('#ranga').val()
  }, 
  function(data){
      $('#eventer1').html(data);
      $('#eventer1').fadeIn('fast');
        openstrefaLoad("strefa.php","data=strefaP"+idS+"&status=safe");
        zamknijodwolanieLoad("odwolaj.php","");
        
  }); 
}

 
  

 
 </script>
  

 
