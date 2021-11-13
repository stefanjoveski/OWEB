function izbrisi(kade){
    element= document.getElementById(kade);
    localStorage.removeItem(element);
   loadKom(kade);
}

$(document).ready(function(){
    $(".del").on("click", function(){
      $(this).hide();
    });
});
