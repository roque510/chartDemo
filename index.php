<?php 
require_once('funciones.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
  <title>Charts Demo</title>
  <link rel="icon" type="image/vnd.microsoft.icon"
     href="img/graph.ico" />

  <!-- CSS  -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
</head>
<body>
  <?php 
  modulo('header');
  $page = "inicio";
  
  if(isset($_GET['pg']))
    $page = $_GET['pg'];

  if (file_exists ("Modulos/".$page.".modulo.php")) {
    modulo($page);
  }
  else{
    modulo('error');
  }
  

  
 

  ?>




  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="js/materialize.js"></script>
  <script src="js/init.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.1/Chart.js"></script>
  <script>
    var myChart = new Chart({...})
    var line = new Chart({...})
  </script>
  <script src="js/magic.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.1/Chart.bundle.js"></script>
  

  </body>
  <footer class="page-footer" style="bottom:0;">
  <?php  modulo("footer"); ?>
  </footer>
</html>
