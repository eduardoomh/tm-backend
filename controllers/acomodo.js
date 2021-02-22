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

module.exports = {
   crearAcomodo
}