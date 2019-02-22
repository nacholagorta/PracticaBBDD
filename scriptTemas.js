function cambia(){
    var capa = document.getElementById("principalCurses");

    borraHijos(capa);

    var nodoTexto = document.createTextNode("HAS PULSADO EL BOTON PULSAR Y HAS HECHO MAGIA!!!!");

    var nodoElement = document.createElement("h2");

    nodoElement.appendChild(nodoTexto);

    capa.appendChild(nodoElement);

    console.log("FIN PRUEBA");
}

function borraHijos(elemento){

    //alert(elemento.innerHTML);

    var hijos = elemento.childNodes;

    //alert(hijos.length);
    for(var i=0; i < hijos.length ; i++){
        elemento.removeChild(hijos[i]);
    }

}

function cambiaDos(){

    var capa = document.getElementById("principalTemas");

    borraHijos(capa);

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText)
            pintaTabla(this.responseText);
        }else{
            console.log(this.readyState + " " + this.status);
        }
    };

    //xhttp.open("GET", "http://localhost/DavidAngulo/crudJson/readEntity.php", true);
    xhttp.open("GET", "readTema.php", true);
    xhttp.send();


}

function pintaTabla(respuesta){

    var respuestaJSON = JSON.parse(respuesta);
    console.log(respuesta)

    var capa = document.getElementById("principalTemas");

    if(respuestaJSON["estado"] == "ok"){
        console.log("VAMOS BIEN");

        var arrTemas =  respuestaJSON["temas"];

        for(var i = 0; i < arrTemas.length; i++){
            //console.log(arrTemas[i])
            var fila = document.createElement("div");
            fila.setAttribute("ID","tema_"+ arrTemas[i].ID );
            fila.setAttribute("class","tema");
            fila.setAttribute("onclick","prueba(this)");

            var id = document.createElement("h2");
            var texto = document.createTextNode(arrTemas[i].ID);
            id.appendChild(texto);
            id.setAttribute("ID","ID"+ arrTemas[i].ID );

            var nombre = document.createElement("h2");
            var textonum = document.createTextNode(arrTemas[i].Nombre);
            nombre.appendChild(textonum);
            nombre.setAttribute("Nombre","Nombre"+ arrTemas[i].ID );

            var instrumental = document.createElement("h2");
            var textoequipo = document.createTextNode(arrTemas[i].Instrumental);
            instrumental.appendChild(textoequipo);
            instrumental.setAttribute("Instrumental","Instrumental"+ arrTemas[i].ID );

            var instrumentalId = document.createElement("h2");
            var textoequipo = document.createTextNode(arrTemas[i].ID_Instrumental);
            instrumentalId.appendChild(textoequipo);
            instrumentalId.setAttribute("ID_Instrumental","ID_Instrumental"+ arrTemas[i].ID_Instrumental);

            fila.appendChild(id);
            fila.appendChild(nombre);
            fila.appendChild(instrumental);
            fila.appendChild(instrumentalId)


            capa.appendChild(fila);
        }

    }else{
        console.log("VAMOS MAL");
    }



}

function prueba(elemento){

    id = elemento.id;

    pos = id.indexOf("_");

    tam = id.length

    idjugador = id.substring(pos+1,tam);

    id = document.getElementById("id" + idjugador).innerHTML;
    nombre = document.getElementById("nombre" + idjugador).innerHTML;
    caracteristicaUno = document.getElementById("caracteristicaUno" + idjugador).innerHTML;
    caracteristicaDos = document.getElementById("caracteristicaDos" + idjugador).innerHTML;
    caracteristicaTres = document.getElementById("caracteristicaTres" + idjugador).innerHTML;


    document.getElementById("id").value = id;
    document.getElementById("nombre").value = nombre;
    document.getElementById("caracteristicaUno").value = caracteristicaUno;
    document.getElementById("caracteristicaDos").value = caracteristicaDos;
    document.getElementById("caracteristicaTres").value = caracteristicaTres;


}
function limpia() {
    document.getElementById('principalTemas').innerHTML='';
}

function insertarTema(){
    var tema = {};

    tema.ID = document.getElementById("ID").value;
    tema.Nombre = document.getElementById("Nombre").value;
    tema.Instrumental = document.getElementById("Instrumental").value;
    tema.ID_Instrumental = document.getElementById("ID_Instrumental").value;


    console.log(tema);

    var peticion = {};

    peticion.peticion = "add";
    peticion.tema = tema;

    console.log("esta es la peticion")
    console.log(peticion);

    peticionJSON = JSON.stringify(peticion);

    console.log(peticionJSON);

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance

    xmlhttp.open("POST", "writeTema.php");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {


            console.log(this.responseText)

            var respuestaJSON = JSON.parse(this.responseText);
            alert(this.readyState + "" + this.status)
            if(respuestaJSON["estado"] == "ok"){
                alert("INSERTADO CORRECTAMENTE. ID: " + respuestaJSON["lastId"] );
                limpia()
                cambiaDos()


            }else{
                alert(respuestaJSON["mensaje"]);
            }
        }else{

            console.log(this.readyState + " " + this.status);
            if (this.readyState == 4 && this.status == 404) {
                alert("URL INCORRECTA");

            }
        }
    };

    xmlhttp.send(peticionJSON);


}

function updateColega(){
    var jugador = {};

    jugador.int_id = document.getElementById("id").value;
    jugador.str_mname = document.getElementById("nombre").value;
    jugador.str_mfirst_characteristic = document.getElementById("caracteristicaUno").value;
    jugador.str_msecond_characteristic = document.getElementById("caracteristicaDos").value;
    jugador.str_mthird_characteristic = document.getElementById("caracteristicaTres").value;

    console.log(jugador);

    var peticion = {};

    peticion.peticion = "add";
    peticion.curse = jugador;

    console.log("esta es la peticion")
    console.log(peticion);

    peticionJSON = JSON.stringify(peticion);

    console.log(peticionJSON);

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    //xmlhttp.open("POST", "http://localhost/davidangulo/crudJson/writeEntity.php");

    xmlhttp.open("POST", "http://localhost/Nacho/DataAccessJSON/UpdateCurse.php");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {


            console.log(this.responseText)

            var respuestaJSON = JSON.parse(this.responseText);
            alert(this.readyState + "" + this.status)
            if(respuestaJSON["estado"] == "ok"){
                alert("INSERTADO CORRECTAMENTE. ID: " + respuestaJSON["lastId"] );
                limpia()
                cambiaDos()


            }else{
                alert(respuestaJSON["mensaje"]);
            }
        }else{

            console.log(this.readyState + " " + this.status);
            if (this.readyState == 4 && this.status == 404) {
                alert("URL INCORRECTA");

            }
        }
    };

    xmlhttp.send(peticionJSON);


}


function deletecolega() {
    alert("has pulsado eliminar")
    var jugador = {};
    jugador.str_mid = document.getElementById("id_delete").value;
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    //xmlhttp.open("POST", "http://localhost/davidangulo/crudJson/writeEntity.php");

    xmlhttp.open("POST", "http://localhost/Nacho/DataAccessJSON/DeleteEntity.php");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {


            console.log(this.responseText)

            var respuestaJSON = JSON.parse(this.responseText);
            alert(this.readyState + "" + this.status)
            if (respuestaJSON["estado"] == "ok") {
                alert("INSERTADO CORRECTAMENTE. ID: " + respuestaJSON["lastId"]);
                limpia()
                cambiaDos()


            } else {
                alert(respuestaJSON["mensaje"]);
            }
        } else {

            console.log(this.readyState + " " + this.status);
            if (this.readyState == 4 && this.status == 404) {
                alert("URL INCORRECTA");

            }
        }

    }
};

console.log("JS CARGADO");
