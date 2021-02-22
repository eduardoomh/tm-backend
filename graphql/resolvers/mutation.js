const UsuarioController = require("../../controllers/usuario");
const EventoController = require("../../controllers/evento");
const MantenimientoController = require("../../controllers/mantenimiento");
const SalidaController = require("../../controllers/salida");
const VehiculoController = require("../../controllers/vehiculo");
const DepartamentoController = require("../../controllers/departamento");
const LugarController = require("../../controllers/lugar");
const AcomodoController = require("../../controllers/acomodo");
const ExtintorController = require("../../controllers/extintor");

module.exports = {
    Mutation: {
        iniciarSesion: (_, {input}, {prisma}) => UsuarioController.iniciarSesion(input, prisma),
        crearUsuario: (_, {input}, {prisma}) => UsuarioController.crearUsuario(input, prisma),
        actualizarUsuario: (_, {id, input}, {prisma, usuario}) => UsuarioController.actualizarUsuario(id, input, prisma, usuario),
        borrarUsuario: (_, {id}, {prisma, usuario}) => UsuarioController.borrarUsuario(id, prisma, usuario),
        subirAvatar: () => UsuarioController.subirAvatar(),
        borrarAvatar: () => UsuarioController.borrarAvatar(),

        //eventos
        crearEvento: (_, {input}, {prisma, usuario}) => EventoController.crearEvento(input, prisma, usuario),

        //mantenimientos
        crearMantenimiento: (_, {input}, {prisma, usuario}) => MantenimientoController.crearMantenimiento(input, prisma, usuario),

        //salidas
        crearSalida: (_, {input}, {prisma, usuario}) => SalidaController.crearSalida(input, prisma, usuario),

        //vehiculos
        crearVehiculo: (_, {input}, {prisma, usuario}) => VehiculoController.crearVehiculo(input, prisma, usuario),

        //departamentos
        crearDepartamento: (_,{input}, {prisma, usuario}) => DepartamentoController.crearDepartamento(input, prisma, usuario),

        //lugares
        crearLugar: (_, {input}, {prisma, usuario}) => LugarController.crearLugar(input, prisma, usuario),
        actualizarLugar: (_, {id, input}, {prisma, usuario}) => LugarController.actualizarLugar(id, input, prisma, usuario),

        //acomodos
        crearAcomodo: (_, {input}, {prisma, usuario}) => AcomodoController.crearAcomodo(input, prisma, usuario),

        //extintores
        crearExtintor: (_,{input}, {prisma, usuario}) => ExtintorController.crearExtintor(input, prisma, usuario)


    }
}