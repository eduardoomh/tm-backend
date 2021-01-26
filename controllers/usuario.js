
async function iniciarSesion(){

}

async function obtenerUsuarios(input, prisma){
    const usuarios = await prisma.usuario.findMany()
    return usuarios;
}

async function obtenerUsuario(id, prisma){
    const usuario = await prisma.usuario.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    return usuario;
}

async function crearUsuario(input, prisma){

    const nuevoUsuario = await prisma.usuario.create({
        data: {
            ...input,
            estado: "PENDIENTE",
            createdAt: Date.now(),
            updatedAt: Date.now()
        },
      });
      console.log("hola")

      return nuevoUsuario;
  
}

async function actualizarUsuario(id, input, prisma){
    const Usuario = await prisma.usuario.update({
        where: { 
            id: parseInt(id) 
        },
        data: { 
            ...input,
            updatedAt: Date.now()
        },
     });

     return Usuario
    }

async function borrarUsuario(id, prisma){
    const Usuario = await prisma.usuario.delete({
    where: { 
        id: parseInt(id)
    },
    });

    return Usuario;
}

async function subirAvatar(){

}

async function borrarAvatar(){

}

module.exports = {
    iniciarSesion,
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario,
    subirAvatar,
    borrarAvatar
}