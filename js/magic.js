$(document).ready(function(){

	var ctxa =$( "#myChart" );

var $test = $( "#woot" );
 
function handler1() {
 console.log( "handler1" );
}
 
function handler2() {
  console.log( "handler2" );
}
 
$test.on( "click", handler1 );


$('#login').on('submit', function (e) {

          e.preventDefault();

          $.ajax({
              
            type: 'post',
            url: 'usrp.php',
            cache: false,
            contentType: false,
            processData: false,
            data: new FormData(this),
            dataType: "json",
            beforeSend: function() {
    //$('#response').html("<img src='img/loading.gif' />");
    $('#modal1').openModal();
  },  
            success: function (data) {

             $('#modal1').closeModal();
    
              if(data.response == "correcto"){      

                 swal({
  title: 'Exito!',
  text: "Bienvenido, " + data.user,
  type: 'success',
  showCancelButton: false,
  confirmButtonText: 'Continuar'
}).then(function() {
  location.reload();
}, function(dismiss) {
  // dismiss can be 'cancel', 'overlay', 'close', 'timer'
  if (dismiss === 'cancel') {
    swal(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
    );
  }
})
               
              }
              else {
                swal("Cancelled", data.comment, "error");
                 $('#modal1').closeModal();
              }


              


            },
            error: function (e){
            	swal("Cancelled", "no hubo ajax", "error");
            }
          });

        });

});