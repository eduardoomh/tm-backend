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

module.exports = {
    crearVehiculo
}