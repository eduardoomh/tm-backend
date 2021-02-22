
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

async function obtenerEventos(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    const {cantidad, pagina} = input;

    try{
        const eventos = await prisma.evento.findMany({
            take: parseInt(cantidad),
            skip: parseInt((pagina - 1 ) * cantidad)
        })

        return eventos;

    }
    catch(err){
        console.log(err)
    }
}

async function obtenerEvento(id, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");


    try{
        const evento = await prisma.evento.findUnique({
            where: {
                id: parseInt(id)
            }
        })

        return evento;

    }
    catch(err){
        console.log(err)
    }
}

async function actualizarEvento(id, input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const evento = await prisma.evento.update({
            where: { 
                id: parseInt(id) 
            },
            data: { 
                ...input,
                updatedAt: Date.now()
            },
         });
    
         return evento
    }
    catch(error){
        console.log(error);
    }

}

module.exports = {
    crearEvento,
    obtenerEventos,
    obtenerEvento,
    actualizarEvento
}