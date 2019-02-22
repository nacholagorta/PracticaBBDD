<?php


    $arrEsperado = array();
    $arrTemaEsperado = array();

    $arrEsperado["peticion"] = "add";

    $arrTemaEsperado["ID"] = 0;
    $arrTemaEsperado["Nombre"] = "PisoFranko (Un string)";
    $arrTemaEsperado["Instrumental"] = "Chilling in the bathtub five feet apart becouse we are not GAY(Un string)";
    $arrTemaEsperado["ID_Instrumental"] = 0;


    $arrEsperado["temas"] = $arrTemaEsperado;



    function JSONCorrectoAnnadir($recibido){

        $auxCorrecto = false;

        if(isset($recibido["peticion"]) && $recibido["peticion"] ="add" && isset($recibido["temas"])){

            $auxTema = $recibido["temas"];
            if(isset($auxTema["ID"]) && isset($auxTema["Nombre"]) && isset($auxTema["Instrumental"])&& isset($auxTema["ID_Instrumental"])){
                $auxCorrecto = true;
            }

        }


        return $auxCorrecto;

    }
