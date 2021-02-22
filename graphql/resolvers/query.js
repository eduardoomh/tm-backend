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
    Query: {
        prueba: (_) => {
            return "conexion cliente - servidor funcionando a la perfeccion"
        },
        obtenerUsuarios: (_, {input}, {prisma, usuario}) => UsuarioController.obtenerUsuarios(input, prisma, usuario),
        obtenerUsuario: (_, {id}, {prisma, usuario}) => UsuarioController.obtenerUsuario(id, prisma, usuario),

        //eventos
        obtenerEventos: (_, {input}, {prisma, usuario}) => EventoController.obtenerEventos(input, prisma, usuario),
        obtenerEvento: (_, {id}, {prisma, usuario}) => EventoController.obtenerEvento(id, prisma, usuario),

        //mantenimientos
        obtenerMantenimientos: (_, {input}, {prisma, usuario}) => MantenimientoController.obtenerMantenimientos(input, prisma, usuario),
        obtenerMantenimiento: (_, {id}, {prisma, usuario}) => MantenimientoController.obtenerMantenimiento(id, prisma, usuario),

        //salidas
        obtenerSalidas: (_, {input}, {prisma, usuario}) => SalidaController.obtenerSalidas(input, prisma, usuario),
        obtenerSalida: (_, {id}, {prisma, usuario}) => SalidaController.obtenerSalida(id, prisma, usuario),

        //vehiculos
        obtenerVehiculos: (_, {input}, {prisma, usuario}) => VehiculoController.obtenerVehiculos(input, prisma, usuario),
        obtenerVehiculo: (_, {id}, {prisma, usuario}) => VehiculoController.obtenerVehiculo(id, prisma, usuario),

        //departamentos
        obtenerDepartamentos: (_, {input}, {prisma, usuario}) => DepartamentoController.obtenerDepartamentos(input, prisma, usuario),
        obtenerDepartamento: (_, {id}, {prisma, usuario}) => DepartamentoController.obtenerDepartamento(id, prisma, usuario),
    
        //lugares
        obtenerLugares: (_, {input}, {prisma, usuario}) => LugarController.obtenerLugares(input, prisma, usuario),
        obtenerLugar: (_, {id}, {prisma, usuario}) => LugarController.obtenerLugar(id, prisma, usuario),

        //acomodos
        obtenerAcomodos: (_, {input}, {prisma, usuario}) => AcomodoController.obtenerAcomodos(input, prisma, usuario),
        obtenerAcomodo: (_, {id}, {prisma, usuario}) => AcomodoController.obtenerAcomodo(id, prisma, usuario),

        //extintores
        obtenerExtintores: (_, {input}, {prisma, usuario}) => ExtintorController.obtenerExtintores(input, prisma, usuario),
        obtenerExtintor: (_, {id}, {prisma, usuario}) => ExtintorController.obtenerExtintor(id, prisma, usuario),

    }
}