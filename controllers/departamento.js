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

module.exports = {
    crearDepartamento
}