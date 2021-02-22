async function crearSalida(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const salida = await prisma.salida.create({
            data: {
                nombre: input.nombre,
                informacion: input.informacion,
                fecha: input.fecha,
                hora_salida: input.hora_salida,
                hora_llegada: input.hora_llegada,
                chofer: input.chofer,
                pasajeros: parseInt(input.pasajeros),
                usuarioId: parseInt(user.id),
                vehiculoId: parseInt(input.vehiculo),
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
        })

        return salida;

    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    crearSalida
}