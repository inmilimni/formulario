//definir funcion

function formulario(){
    var form = "";
    var usuario = document.form1.usuario.value;
    var nombre = document.form1.nombre.value;
    var apellido = document.form1.apellido.value;
    var email = document.form1.email.value;
    var p1 = document.form1.password.value;
    var p2 = document.form1.password1.value;
    var hobbies = "";
    var b = document.form1.hobby.length;

    for(a=0; a<b; a++){
        if(document.form1.hobby[a].checked){
            hobbies = hobbies + document.form1.hobby[a].value + " ";
        }
    }

    var pais = document.form1.pais.value;
    var sexo = document.form1.sexo.value;

    //validacion que no sean vacio los campos

    if(usuario == "" || nombre == "" || apellido == "" || pais == "" || email == "" || sexo == "" ){
        alert("Los campos con astericos son obligatorios");
    }
    if(hobbies.length == 0){
        alert("Debes seleccionar la menos un hobby");
    }
    if(p1 != p2 || p1==""){
        alert("Las claves tienen que ser iguales y no pueden estar en blanco");
    }
    form = "Usuario: " + usuario + "\nNombre:" + nombre + "\nApellido: " +apellido + "\nEmail: " +email +"\nHobbies: " +hobbies + "\nPais: " + pais;
    alert(form);
}