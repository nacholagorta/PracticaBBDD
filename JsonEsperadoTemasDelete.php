<?php


    $arrEsperado = array();
    $arrTemaEsperado = array();

    $arrEsperado["peticion"]="add";

    $arrTemaEsperado["ID"]=0;



    $arrEsperado["tema"] = $arrTemaEsperado;



    function JSONCorrectoDelete($recibido){

        $auxCorrecto = false;

        if(isset($recibido["peticion"]) && $recibido["peticion"] ="add" && isset($recibido["tema"])){

            $auxTema = $recibido["tema"];
            if(isset($auxTema["ID"])){
                $auxCorrecto = true;

            }

        }


        return $auxCorrecto;

    }
