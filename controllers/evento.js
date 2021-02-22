
async function crearEvento(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const evento = await prisma.evento.create({
            data: {
                nombre: input.nombre,
                informacion: input.informacion,
                fecha: input.fecha,
                hora_inicio: input.hora_inicio,
                hora_final: input.hora_final,
                usuarioId: parseInt(user.id),
                departamentoId: parseInt(input.departamento_solicitante) ,
                lugarId: parseInt(input.lugar),
                acomodoId: parseInt(input.acomodo),
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
        })

        return evento;

    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    crearEvento
}