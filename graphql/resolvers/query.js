const UsuarioController = require("../../controllers/usuario");

module.exports = {
    Query: {
        iniciarSesion: (parent, args, ctx) => UsuarioController.iniciarSesion(),
        obtenerUsuarios: (parent, {input}, {prisma}) => UsuarioController.obtenerUsuarios(input, prisma),
        obtenerUsuario: (parent, {id}, {prisma}) => UsuarioController.obtenerUsuario(id, prisma),

    }
}