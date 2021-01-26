const UsuarioController = require("../../controllers/usuario");

module.exports = {
    Mutation: {
        crearUsuario: (parent, {input}, {prisma}) => UsuarioController.crearUsuario(input, prisma),
        actualizarUsuario: (parent, {id, input}, {prisma}) => UsuarioController.actualizarUsuario(id, input, prisma),
        borrarUsuario: (parent, {id}, {prisma}) => UsuarioController.borrarUsuario(id, prisma),
        subirAvatar: (parent, args, ctx) => UsuarioController.subirAvatar(),
        borrarAvatar: (parent, args, ctx) => UsuarioController.borrarAvatar()

    }
}