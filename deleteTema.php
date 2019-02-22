<?php

require 'bbdd.php';
require 'JsonEsperadoTemasDelete.php'


$arrMensaje = array();
$parameters = file_get_contents("php://input");

if(isset($parameters)){

    // Parseamos el string json y lo convertimos a objeto JSON
    $mensajeRecibido = json_decode($parameters, true);

  if(JSONCorrectoDelete($mensajeRecibido)){ // Este array es el codificaremos como JSON tanto si hay resultado como si hay error
        $ID = $tema["ID"];

        $query  = "DELETE FROM temas WHERE ID = '" . $ID . "'";
        $query .= "VALUES ('$ID')";

        $result = $conn->query ( $query );

        if (isset ( $result ) && $result) { // Si pasa por este if, la query está está bien y se ha insertado correctamente

            $arrMensaje["estado"] = "ok";
            $arrMensaje["mensaje"] = "Entity eliminado correctamente";

        }else{ // Se ha producido algún error al ejecutar la query

            $arrMensaje["estado"] = "error";
            $arrMensaje["mensaje"] = "SE HA PRODUCIDO UN ERROR AL ACCEDER A LA BASE DE DATOS";
            $arrMensaje["error"] = $conn->error;
            $arrMensaje["query"] = $query;

          }

        }else{
          $arrMensaje["estado"] = "error";
          $arrMensaje["mensaje"] = "EL JSON NO CONTIENE LOS CAMPOS ESPERADOS";
          $arrMensaje["recibido"] = $mensajeRecibido;
          $arrMensaje["esperado"] = $arrEsperado;
        }
      }else{
        $arrMensaje["estado"] = "error";
        $arrMensaje["mensaje"] = "EL JSON NO SE HA ENVIADO CORRECTAMENTE";
      }


$mensajeJSON = json_encode($arrMensaje,JSON_PRETTY_PRINT);

//echo "<pre>";  // Descomentar si se quiere ver resultado "bonito" en navegador. Solo para pruebas
echo $mensajeJSON;
//echo "</pre>"; // Descomentar si se quiere ver resultado "bonito" en navegador

$conn->close ();

die();

?>
