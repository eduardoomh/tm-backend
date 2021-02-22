async function crearSalida(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const salida = await prisma.salida.create({
            data: {
                nombre: input.nombre,
                informacion: input.informacion,
                fecha: input.fecha,
                hora_salida: input.hora_salida,
                hora_llegada: input.hora_llegada,
                chofer: input.chofer,
                pasajeros: parseInt(input.pasajeros),
                usuarioId: parseInt(user.id),
                vehiculoId: parseInt(input.vehiculo),
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
        })

        return salida;

    }
    catch(err){
        console.log(err);
    }
}

async function obtenerSalidas(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    const {cantidad, pagina} = input;

    try{
        const salidas = await prisma.salida.findMany({
            take: parseInt(cantidad),
            skip: parseInt((pagina - 1 ) * cantidad)
        })

        return salidas;

    }
    catch(err){
        console.log(err)
    }
}

async function obtenerSalida(id, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");


    try{
        const salida = await prisma.salida.findUnique({
            where: {
                id: parseInt(id)
            }
        })

        return salida;

    }
    catch(err){
        console.log(err)
    }
}

async function actualizarSalida(id, input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const salida = await prisma.salida.update({
            where: { 
                id: parseInt(id) 
            },
            data: { 
                ...input,
                updatedAt: Date.now()
            },
         });
    
         return salida
    }
    catch(error){
        console.log(error);
    }

}

module.exports = {
    crearSalida,
    obtenerSalidas,
    obtenerSalida,
    actualizarSalida
}