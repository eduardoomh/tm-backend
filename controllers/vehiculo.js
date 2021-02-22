async function crearVehiculo(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const vehiculo = await prisma.vehiculo.create({
            data: {
                ...input,
                usuarioId: user.id,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
        })

        return vehiculo;

    }
    catch(err){
        console.log(err);
    }
}

async function obtenerVehiculos(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    const {cantidad, pagina} = input;

    try{
        const vehiculos = await prisma.vehiculo.findMany({
            take: parseInt(cantidad),
            skip: parseInt((pagina - 1 ) * cantidad)
        })

        return vehiculos;

    }
    catch(err){
        console.log(err)
    }
}

async function obtenerVehiculo(id, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");


    try{
        const vehiculo = await prisma.vehiculo.findUnique({
            where: {
                id: parseInt(id)
            }
        })

        return vehiculo;

    }
    catch(err){
        console.log(err)
    }
}

async function actualizarVehiculo(id, input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const vehiculo = await prisma.vehiculo.update({
            where: { 
                id: parseInt(id) 
            },
            data: { 
                ...input,
                updatedAt: Date.now()
            },
         });
    
         return vehiculo
    }
    catch(error){
        console.log(error);
    }

}

module.exports = {
    crearVehiculo,
    obtenerVehiculos,
    obtenerVehiculo,
    actualizarVehiculo

}