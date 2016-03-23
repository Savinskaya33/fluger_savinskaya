$(document).ready(function(){

  $('a.js-modal-start').on('click', function(){
    $('#myModal').modal('show').find('.js-room').text(
      $(this).attr('data-rooms-type')
    );
  });

});