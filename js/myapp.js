const $usuario = $("#usuarioPrincipal");
const $password = $("#passPrincipal");

const credenciales = {
  usuario: "Angelo",
  pass: "a"

};
$("#login").on("click", function(){ 
  const valueUsuario = $("#usuarioPrincipal").val();
  const valuePassword = $("#passPrincipal").val();

  if (valueUsuario === credenciales.usuario) {
    if (valuePassword === credenciales.pass) {
        localStorage.setItem("#usuarioPrincipal", valueUsuario);
        localStorage.usuario = valueUsuario;
        window.location.href = "dashboard.html";

    } else {
        Swal.fire({
            title: "ERROR",
            text: "Contraseña incorrecta",
            icon: "error"
        });
    }
    
} else {
    Swal.fire({
        title: "ERROR",
        text: "Usuario no encontrado",
        icon: "error"
    });
}

});

