async function crearMantenimiento(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const mantenimiento = await prisma.mantenimiento.create({
            data: {
                nombre: input.nombre,
                informacion: input.informacion,
                fecha: input.fecha,
                hora_inicio: input.hora_inicio,
                hora_final: input.hora_final,
                asignado_a: input.asignado_a,
                tipo: input.tipo,
                departamentoId: parseInt(input.departamento_solicitante),
                lugarId: parseInt(input.lugar),
                usuarioId: parseInt(user.id),
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
        })

        return mantenimiento;

    }
    catch(err){
        console.log(err);
    }
}

async function obtenerMantenimientos(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    const {cantidad, pagina} = input;

    try{
        const mantenimientos = await prisma.mantenimiento.findMany({
            take: parseInt(cantidad),
            skip: parseInt((pagina - 1 ) * cantidad)
        })

        return mantenimientos;

    }
    catch(err){
        console.log(err)
    }
}

async function obtenerMantenimiento(id, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");


    try{
        const mantenimiento = await prisma.mantenimiento.findUnique({
            where: {
                id: parseInt(id)
            }
        })

        return mantenimiento;

    }
    catch(err){
        console.log(err)
    }
}

async function actualizarMantenimiento(id, input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const mantenimiento = await prisma.mantenimiento.update({
            where: { 
                id: parseInt(id) 
            },
            data: { 
                ...input,
                updatedAt: Date.now()
            },
         });
    
         return mantenimiento
    }
    catch(error){
        console.log(error);
    }

}


module.exports = {
    crearMantenimiento,
    obtenerMantenimientos,
    obtenerMantenimiento,
    actualizarMantenimiento
}