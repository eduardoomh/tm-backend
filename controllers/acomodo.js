async function crearAcomodo(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const acomodo = await prisma.acomodo.create({
            data:{
                ...input,
                createdAt: Date.now(),
                updatedAt: Date.now()
            },
        })

        return acomodo;

    }
    catch(err){
        console.log(err)
    }
}

async function obtenerAcomodos(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    const {cantidad, pagina} = input;

    try{
        const acomodos = await prisma.acomodo.findMany({
            take: parseInt(cantidad),
            skip: parseInt((pagina - 1 ) * cantidad)
        })

        return acomodos;

    }
    catch(err){
        console.log(err)
    }
}

async function obtenerAcomodo(id, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");


    try{
        const acomodo = await prisma.acomodo.findUnique({
            where: {
                id: parseInt(id)
            }
        })

        return acomodo;

    }
    catch(err){
        console.log(err)
    }
}

async function actualizarAcomodo(id, input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const acomodo = await prisma.acomodo.update({
            where: { 
                id: parseInt(id) 
            },
            data: { 
                ...input,
                updatedAt: Date.now()
            },
         });
    
         return acomodo
    }
    catch(error){
        console.log(error);
    }

}

module.exports = {
   crearAcomodo,
   obtenerAcomodos,
   obtenerAcomodo,
   actualizarAcomodo
}