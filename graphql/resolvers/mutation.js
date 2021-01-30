const UsuarioController = require("../../controllers/usuario");

module.exports = {
    Mutation: {
        iniciarSesion: (_, {input}, {prisma}) => UsuarioController.iniciarSesion(input, prisma),
        crearUsuario: (_, {input}, {prisma}) => UsuarioController.crearUsuario(input, prisma),
        actualizarUsuario: (_, {id, input}, {prisma, usuario}) => UsuarioController.actualizarUsuario(id, input, prisma, usuario),
        borrarUsuario: (_, {id}, {prisma, usuario}) => UsuarioController.borrarUsuario(id, prisma, usuario),
        subirAvatar: () => UsuarioController.subirAvatar(),
        borrarAvatar: () => UsuarioController.borrarAvatar()

    }
}