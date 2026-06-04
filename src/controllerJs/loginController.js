import { handleNavigation } from "/src/router.js";

export function initLogin(){

    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const form = document.getElementById('loginForm');

    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');


    //validacion del email
    function validarEmail(){
        if(email.value ===""){ //value valida que la entrada del usuario no es un campo vacio
            emailError.textContent = "el correo es obligatorio"
            email.style.border = "2px solid red";
            return false; // retorna false porque hay error o porque el campo esta vacio y hace detener la funcion

        }else{
            emailError.textContent = "";
            email.style.border = "2px solid gray";

        }
        return true;  // se coloca afuera del else porque ya que en el if no hubo error  la funcion retorna true osea que los campos son correctos
    }


    function validarPassword(){
        if(password.value ==="" || password.value.length < 6){ //validacion para que la contraseña no sea vacia y no tenga menos de 6 digitos
            passwordError.textContent = "la contraseña invalida"
            password.style.border = "2px solid red";
            return false; // retorna false porque hay error porque el campo esta vacio y hace detener la funcion

        }else{
            passwordError.textContent = "";
            password.style.border = "2px solid gray";

        }
        return true;  // se coloca afuera del else porque ya que en el if no hubo error  la funcion retorna true osea que los campos son correctos
    }

    //validacion de usuarion en json server
    async function validarUsuario() {

        try {


            const respuestaUsuario = await fetch(`http://localhost:3000/users?email=${email.value}`)

            const datosUsuarios = await respuestaUsuario.json();
            console.log(datosUsuarios);

            //validacion existencia del usuario
            if (datosUsuarios.length === 0) {
                alert("Usuario no encontrado")
                return
            }

            const usuario = datosUsuarios[0]

            // validacion de existencia de password

            if (usuario.password === password.value) {
                alert("login correcto")
                console.log(usuario)

                //guardar sesion

                 localStorage.setItem(
                     "usuario",
                     JSON.stringify(usuario)
                 )
                handleNavigation("/listar")


            } else {
                alert("contraseña incorrecta")
            }

        } catch (error) {
            console.error(error)
            alert("Error al conectar el servidor")
        }
    }

    //validacion a tiempo real

    email.addEventListener("input",validarEmail)
    password.addEventListener("input",validarPassword)

    //submit del formulario

    form.addEventListener("submit", function (event){
        event.preventDefault()
        const emailValido = validarEmail()
        const passwordValido = validarPassword()

        if (emailValido && passwordValido){
            validarUsuario()
    }
    });
}
