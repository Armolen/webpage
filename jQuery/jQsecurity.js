

function PokazAkapit(element){
    if($('#'+element).css('display')=='none'){ $('#'+element).fadeIn('slow'); }else{ $('#'+element).fadeOut('fast'); }
}


function slider_topLoad(page,sdata){ 
          
     $("#slider_top").fadeOut("fast"); 
     $.ajax({   
     method: "get",url: page, data: sdata, 
     beforeSend: function(){$("#bg_loading").show();}, //show loading just when link is clicked   
     complete: function(){ $("#bg_loading").fadeOut("fast");}, //stop showing loading when the process is complete   
     success: function(get_response){ //the result from GET method is always stored on 
         $("#slider_top").html(get_response); 
         $("#slider_top").fadeIn("slow"); 
   }//close success of request   
   }); //close $.ajax(   
} 



function menu2Load(page,sdata){ 
          
     $("#menu2").fadeOut("fast"); 
     $.ajax({   
     method: "get",url: page, data: sdata, 
     beforeSend: function(){$("#loading").show();}, //show loading just when link is clicked   
     complete: function(){ $("#loading").fadeOut("fast");}, //stop showing loading when the process is complete   
     success: function(get_response){ //the result from GET method is always stored on 
         $("#menu2").html(get_response); 
         $("#menu2").fadeIn("slow"); 
   }//close success of request   
   }); //close $.ajax(   
} 

function menu1Load(page,sdata){ 
          
     $("#menu1").fadeOut("fast"); 
     $.ajax({   
     method: "get",url: page, data: sdata, 
     success: function(get_response){ //the result from GET method is always stored on 
         $("#menu1").html(get_response); 
         $("#menu1").fadeIn("slow"); 
   }//close success of request   
   }); //close $.ajax(   
}

function contentLoad(page,sdata){ 
          
     $("#content").fadeOut("fast"); 
     $.ajax({   
     method: "get",url: page, data: sdata, 
     beforeSend: function(){$("#loading").show();}, //show loading just when link is clicked   
     complete: function(){ $("#loading").fadeOut("fast");}, //stop showing loading when the process is complete   
     success: function(get_response){ //the result from GET method is always stored on 
         $("#content").html(get_response); 
         $("#content").fadeIn("slow"); 
   }//close success of request   
   }); //close $.ajax(   
} 

function playerLoad(page,sdata){ 
          
     $("#player").fadeOut("fast"); 
     $.ajax({   
     method: "get",url: page, data: sdata, 
     beforeSend: function(){$("#loading").show();}, //show loading just when link is clicked   
     complete: function(){ $("#loading").fadeOut("fast");}, //stop showing loading when the process is complete   
     success: function(get_response){ //the result from GET method is always stored on 
         $("#player").html(get_response); 
         $("#player").fadeIn("slow"); 
   }//close success of request   
   }); //close $.ajax(   
} 

function welcomeinLoad(page,sdata){ 
          
     $("#welcome").fadeOut("fast"); 
     $.ajax({   
     method: "get",url: page, data: sdata, 
     beforeSend: function(){$("#loading").show();}, //show loading just when link is clicked   
     complete: function(){ $("#loading").fadeOut("fast");}, //stop showing loading when the process is complete   
     success: function(get_response){ //the result from GET method is always stored on 
         $("#welcome").html(get_response); 
         $("#welcome").fadeIn("fast"); 
   }//close success of request   
   }); //close $.ajax(   
}

function photo_bgLoad(page,sdata){ 
          
     $("#photo_bg").fadeOut("fast"); 
     $.ajax({   
     method: "get",url: page, data: sdata, 
     beforeSend: function(){$("#loading").show();}, //show loading just when link is clicked   
     complete: function(){ $("#loading").fadeOut("fast");}, //stop showing loading when the process is complete   
     success: function(get_response){ //the result from GET method is always stored on 
         $("#photo_bg").html(get_response); 
         $("#photo_bg").fadeIn("slow"); 
   }//close success of request   
   }); //close $.ajax(   
}

function content_bgLoad(page,sdata){ 
          
     $("#content_bg").fadeOut("fast"); 
     $.ajax({   
     method: "get",url: page, data: sdata, 
     beforeSend: function(){$("#loading").show();}, //show loading just when link is clicked   
     complete: function(){ $("#loading").fadeOut("fast");}, //stop showing loading when the process is complete   
     success: function(get_response){ //the result from GET method is always stored on 
         $("#content_bg").html(get_response); 
         $("#content_bg").fadeIn("slow"); 
   }//close success of request   
   }); //close $.ajax(   
}

function loza_infoLoad(page,sdata){ 
          
     $("#loza_info").fadeOut("fast"); 
     $.ajax({   
     method: "get",url: page, data: sdata, 
     beforeSend: function(){$("#loading").show();}, //show loading just when link is clicked   
     complete: function(){ $("#loading").fadeOut("fast");}, //stop showing loading when the process is complete   
     success: function(get_response){ //the result from GET method is always stored on 
         $("#loza_info").html(get_response); 
         $("#loza_info").fadeIn("slow"); 
   }//close success of request   
   }); //close $.ajax(   
}
function loza_info_outLoad(page,sdata){ 
          
     $("#loza_info").fadeOut("fast"); 
     
};

function lozeLoad(page,sdata){ 
          
     $("#loze").fadeOut("fast"); 
     $.ajax({   
     method: "get",url: page, data: sdata, 
     beforeSend: function(){$("#loading").show();}, //show loading just when link is clicked   
     complete: function(){ $("#loading").fadeOut("fast");}, //stop showing loading when the process is complete   
     success: function(get_response){ //the result from GET method is always stored on 
         $("#loze").html(get_response); 
         $("#loze").fadeIn("slow"); 
   }//close success of request   
   }); //close $.ajax(   
}

function check_data1Load(page,sdata){ 
          
     $("#check_data").fadeOut("fast"); 
     $.ajax({   
     method: "get",url: page, data: sdata, 
     beforeSend: function(){$("#loading").show();}, //show loading just when link is clicked   
     complete: function(){ $("#loading").fadeOut("fast");}, //stop showing loading when the process is complete   
     success: function(get_response){ //the result from GET method is always stored on 
         $("#check_data1").html(get_response); 
         $("#check_data1").fadeIn("slow"); 
   }//close success of request   
   }); //close $.ajax(   
}

function check_registLoad(page,sdata){ 
          
     $("#check_regist").fadeOut("fast"); 
     $.ajax({   
     method: "get",url: page, data: sdata, 
     beforeSend: function(){$("#loading").show();}, //show loading just when link is clicked   
     complete: function(){ $("#loading").fadeOut("fast");}, //stop showing loading when the process is complete   
     success: function(get_response){ //the result from GET method is always stored on 
         $("#check_regist").html(get_response); 
         $("#check_regist").fadeIn("slow"); 
   }//close success of request   
   }); //close $.ajax(   
}

function wylogujLoad(page,sdata){ 
          
     $("#wyloguj").fadeOut("fast"); 
     $.ajax({   
     method: "get",url: page, data: sdata, 
     beforeSend: function(){$("#loading").show();}, //show loading just when link is clicked   
     complete: function(){ $("#loading").fadeOut("fast");}, //stop showing loading when the process is complete   
     success: function(get_response){ //the result from GET method is always stored on 
         $("#wyloguj").html(get_response); 
         $("#wyloguj").fadeIn("slow"); 
   }//close success of request   
   }); //close $.ajax(   
}




function welcomeoutLoad(page,sdata){ 
          
     $("#welcome").fadeOut("slow"); 
     
};


function bottom_maincloseLoad(page,sdata){ 
          
     $("#full_gallery").fadeOut("slow"); 
     
};
