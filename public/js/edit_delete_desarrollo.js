$(document).ready(function () {
    // DELETE TAREA DESARROLLO
    const id = $("#editar").data("id");
    $("#delete").click(async function (e) {
        e.preventDefault();
        const data = await fetch(`/tareasdesarollo/${id}`, {
            method: "delete"
        });
        const res = await data.json();
        if (res.estado) {
            window.location.href = "/tareasdesarrollo";
        } else {
            console.log(res);
        }
    });

    // PUT TAREA DESARROLLO
    $("#edit").click(async function (e) {
        e.preventDefault();
        const formEditar = document.querySelector("#editar");
        const nota = formEditar.elements["nota"].value;
        const observaciones = formEditar.elements["observaciones"].value;
        const tema = formEditar.elements["tema"].value;
        const pregunta = formEditar.elements["pregunta"].value;
        const respuesta = formEditar.elements["respuesta"].value;
        
        const id = formEditar.dataset.id
        try {
            
            const data = await fetch(`/tareasdesarrollo/${id}/correcciondesarrollo`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nota,observaciones,tema,pregunta,respuesta, })
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
