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

module.exports = {
    crearLugar
}