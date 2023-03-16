nombre_alumno_array = [];

function submit()
{
    var ver_alumno_array = [];

    for (var j =1; j <= 18; j++) {
        var nombre_alumno = document.getElementById("nombre_Invitado_"+j).value;
        nombre_alumno_array.push(nombre_alumno);
        
    }

    var longitud_nombre_alumnos_array = nombre_alumno_array.length;
     console.log(longitud_nombre_alumnos_array);
    for (var k = 0; k < longitud_nombre_alumnos_array; k++)
    {
        ver_alumno_array.push("NOMBRE- "+ nombre_alumno_array[k] + "</h4>");
        console.log(ver_alumno_array);
    }
    
    console.log(ver_alumno_array); 
    document.getElementById("ver_nombre_con_comas").innerHTML = ver_alumno_array;
    var remover_comas = ver_alumno_array.join(" "); 
    console.log(remover_comas); 
    document.getElementById("ver_nombre_sin_comas").innerHTML = remover_comas; 
    document.getElementById("boton_enviar").style.display = "none";
    document.getElementById("boton_ordenar").style.display = "inline-block";
}

function sorting() { 
    nombre_alumno_array.sort(); 
    console.log(nombre_alumno_array); 
    var ver_alumno_array_ordenar = []; 
    var longitud_nombre_alumnos_array = nombre_alumno_array.length; 
    console.log(longitud_nombre_alumnos_array); 
    for (var k = 0; k < longitud_nombre_alumnos_array; k++) { 
    ver_alumno_array_ordenar.push("NOMBRE- " + nombre_alumno_array[k] + "</h4>"); 
    console.log(ver_alumno_array_ordenar); } 
    var remover_comas = ver_alumno_array_ordenar.join(" "); 
    console.log(remover_comas); 
    document.getElementById("ver_nombre_sin_comas").innerHTML = remover_comas; }

function searching() {
    var s= document.getElementById("S1").value;
    var found=0;
    var j;
    for(j=0; j<nombre_alumno_array.length; j++)
    {if(s==nombre_alumno_array[j])
    {
        found=found+1;
    }
    }
    document.getElementById("p_2").innerHTML="Numero de Veces Encontrado "+found;
}