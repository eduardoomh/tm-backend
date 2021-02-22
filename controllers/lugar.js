async function crearLugar(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const lugar = await prisma.lugar.create({
            data: {
                ...input,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
        })
        console.log(input)

        return lugar;

    }
    catch(err){
        console.log(err);
    }

}

async function obtenerLugares(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    const {cantidad, pagina} = input;

    try{
        const lugares = await prisma.lugar.findMany({
            take: parseInt(cantidad),
            skip: parseInt((pagina - 1 ) * cantidad)
        })

        return lugares;

    }
    catch(err){
        console.log(err)
    }
}

async function obtenerLugar(id, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");


    try{
        const lugar = await prisma.lugar.findUnique({
            where: {
                id: parseInt(id)
            }
        })

        return lugar;

    }
    catch(err){
        console.log(err)
    }
}

async function actualizarLugar(id, input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const lugar = await prisma.lugar.update({
            where: { 
                id: parseInt(id) 
            },
            data: { 
                ...input,
                updatedAt: Date.now()
            },
         });
    
         return lugar
    }
    catch(error){
        console.log(error);
    }

}

module.exports = {
    crearLugar,
    obtenerLugares,
    obtenerLugar,
    actualizarLugar
}