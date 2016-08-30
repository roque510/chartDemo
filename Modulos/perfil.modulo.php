<?php require("config.php"); 



$usuario = $database->get("usuarios", "*", [
	"Usuario" => 'aroque'
]);



?>
<div class="row container" style="padding-top:20px;">
	
      <div class="row">
        <div class="col s12 m6">
          <div class="card grey lighten-5">
            <div class="card-content black-text">
              <span class="card-title"><h3><?php echo $usuario['Nombre'].' '.$usuario['Apellido']; ?></h1></span>
              
				<h5>Alias: <?php echo $usuario['Usuario']; ?></h5>
				<h5><?php echo $usuario['Correo']; ?></h5>

				<!--a href="#"><h5 class="cyan-text lighten-3">Deseas cambiar de clave?</h5></a -->

				<h5 class="">Tema: <a href=""><span id="light" class="highlight blue-text lighten-4">Light</span></a> - <a href="" ><span id="dark" class="blue-grey-text Darken-4 highlight">Dark</span></a></h5>

				<h5>Tema-activo: <?php if($_COOKIE['Status'] == 1){echo "<span class='blue-text lighten-4'> Light";}else echo "<span class='blue-grey-text Darken-4'>Dark"; ?></span></h5>
            </div>
            <div class="card-action">
             
            </div>
          </div>
        </div>
      </div>
	
</div>