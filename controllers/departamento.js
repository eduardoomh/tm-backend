async function crearDepartamento(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");
    console.log(user)

    try{
        const departamento = await prisma.departamento.create({
            data: {
                ...input,
                usuarioId: user.id,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
        })

        return departamento;

    }
    catch(err){
        console.log(err);
    }
}

async function obtenerDepartamentos(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    const {cantidad, pagina} = input;

    try{
        const departamentos = await prisma.departamento.findMany({
            take: parseInt(cantidad),
            skip: parseInt((pagina - 1 ) * cantidad)
        })

        return departamentos;

    }
    catch(err){
        console.log(err)
    }
}

async function obtenerDepartamento(id, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");


    try{
        const departamento = await prisma.departamento.findUnique({
            where: {
                id: parseInt(id)
            }
        })

        return departamento;

    }
    catch(err){
        console.log(err)
    }
}

async function actualizarDepartamento(id, input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const departamento = await prisma.departamento.update({
            where: { 
                id: parseInt(id) 
            },
            data: { 
                ...input,
                updatedAt: Date.now()
            },
         });
    
         return departamento
    }
    catch(error){
        console.log(error);
    }

}

module.exports = {
    crearDepartamento,
    obtenerDepartamentos,
    obtenerDepartamento,
    actualizarDepartamento
}