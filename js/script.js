$(document).ready(function(){

  $('a.js-modal-start').on('click', function(){
    $('#myModal').modal('show').find('.js-room').text(
      $(this).attr('data-rooms-type')
    );
  });

});

var toggler = document.getElementById('toggler');
toggler.onclick = function(e){
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
  document.getElementById('nav').classList.toggle('nav--visible');
}
