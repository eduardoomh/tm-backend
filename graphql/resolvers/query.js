const UsuarioController = require("../../controllers/usuario");

module.exports = {
    Query: {
        iniciarSesion: (_, {input}, {prisma}) => UsuarioController.iniciarSesion(input, prisma),
        obtenerUsuarios: (_, {input}, {prisma, usuario}) => UsuarioController.obtenerUsuarios(input, prisma, usuario),
        obtenerUsuario: (_, {id}, {prisma, usuario}) => UsuarioController.obtenerUsuario(id, prisma, usuario),

    }
}