//SE ACTIVA AL INICIAR LA PAGINA

$(document).ready(function () {
    // DELETE USER
    const id = $("#editar").data("id");
    $("#delete").click(async function (e) {
        e.preventDefault();
        const data = await fetch(`/users/${id}`, {
            method: "delete"
        });
        const res = await data.json();
        if (res.estado) {
            window.location.href = "/users";
        } else {
            console.log(res);
        }
    });

    // PUT USER
    $("#edit").click(async function (e) {
        e.preventDefault();
        const formEditar = document.querySelector("#editar");
        const nombre = formEditar.elements["nombre"].value;
        const correo = formEditar.elements["correo"].value;
        const apellidos = formEditar.elements["apellidos"].value;
        const rol = formEditar.elements["rol"].value;
        const ciudad = formEditar.elements["ciudad"].value;
        const telefono = formEditar.elements["telefono"].value;
        const metodoPago = formEditar.elements["metodoPago"].value;
        const grupoPago = formEditar.elements["grupoPago"].value;
       
        const id = formEditar.dataset.id
        try {
            
            const data = await fetch(`/perfil/editarperfil/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre,correo,apellidos,rol,ciudad,telefono,metodoPago,grupoPago })
            })
            const res = await data.json();
            
            if (res.estado) {
                window.location.href = "/inicio";
            } else {
                console.log(res);
            }
        } catch (error) {
            console.log(error);
        }
    });
});


/*
const nombre = formEditar.elements["nombre"].value;
        const correo = formEditar.elements["correo"].value;
        const apellidos = formEditar.elements["apellidos"].value;
        const rol = formEditar.elements["rol"].value;
        const password = formEditar.elements["password"].value;
        const dni = formEditar.elements["dni"].value;
        const ciudad = formEditar.elements["ciudad"].value;
        const direccion = formEditar.elements["direccion"].value;
        const telefono = formEditar.elements["telefono"].value;
        const metodoPago = formEditar.elements["metodoPago"].value;
        const grupoPago = formEditar.elements["grupoPago"].value;
        const fechaIngreso = formEditar.elements["fechaIngreso"].value;
        const fechaRenovacion = formEditar.elements["fechaRenovacion"].value;
*/