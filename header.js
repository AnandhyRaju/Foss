$(document).ready(function(){

   $("#open_contact").click(function(){
    showpopup();
   });

   });

function showpopup()
{
   $("#contact").fadeIn();
   $("#contact").css({"visibility":"visible","display":"block"});

}