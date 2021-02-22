async function crearExtintor(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const extintor = await prisma.extintor.create({
            data: {
                ...input,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
        })

        return extintor;

    }
    catch(err){
        console.log(err);
    }
}

async function obtenerExtintores(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    const {cantidad, pagina} = input;

    try{
        const extintores = await prisma.extintor.findMany({
            take: parseInt(cantidad),
            skip: parseInt((pagina - 1 ) * cantidad)
        })

        return extintores;

    }
    catch(err){
        console.log(err)
    }
}

async function obtenerExtintor(id, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");


    try{
        const extintor = await prisma.extintor.findUnique({
            where: {
                id: parseInt(id)
            }
        })

        return extintor;

    }
    catch(err){
        console.log(err)
    }
}

async function actualizarExtintor(id, input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const extintor = await prisma.extintor.update({
            where: { 
                id: parseInt(id) 
            },
            data: { 
                ...input,
                updatedAt: Date.now()
            },
         });
    
         return extintor
    }
    catch(error){
        console.log(error);
    }

}

module.exports = {
    crearExtintor,
    obtenerExtintores,
    obtenerExtintor,
    actualizarExtintor
}