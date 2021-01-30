const UsuarioController = require("../../controllers/usuario");

module.exports = {
    Query: {
        prueba: (_) => {
            return "conexion cliente - servidor funcionando a la perfeccion"
        },
        obtenerUsuarios: (_, {input}, {prisma, usuario}) => UsuarioController.obtenerUsuarios(input, prisma, usuario),
        obtenerUsuario: (_, {id}, {prisma, usuario}) => UsuarioController.obtenerUsuario(id, prisma, usuario),

    }
}