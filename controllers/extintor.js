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

module.exports = {
    crearExtintor
}