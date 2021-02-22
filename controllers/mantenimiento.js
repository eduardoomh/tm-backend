async function crearMantenimiento(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const mantenimiento = await prisma.mantenimiento.create({
            data: {
                nombre: input.nombre,
                informacion: input.informacion,
                fecha: input.fecha,
                hora_inicio: input.hora_inicio,
                hora_final: input.hora_final,
                asignado_a: input.asignado_a,
                tipo: input.tipo,
                departamentoId: parseInt(input.departamento_solicitante),
                lugarId: parseInt(input.lugar),
                usuarioId: parseInt(user.id),
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
        })

        return mantenimiento;

    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    crearMantenimiento
}