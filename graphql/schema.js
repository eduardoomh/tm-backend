const { gql } = require("apollo-server-express");

const typeDefs = gql`

    #tipos------------------------------------------
    type Usuario{
        id: ID!
        nombre: String!
        apellidos: String!
        correo: String!
        contrasena: String!
        numero_control: String!
        descripcion: String
        telefono: String
        imagen: String
        estado: EstadoUsuarioEnum!
        createdAt: String!
        updatedAt: String!
    }

    type Token{
        token: String!
    }

    type Evento{
        id: ID!
        nombre: String!
        informacion: String!
        fecha: String!
        hora_inicio: String!
        hora_final: String!
        estado: EstadoSolicitudEnum!
        departamento_solicitante: Departamento!
        lugar: Lugar!
        acomodo: Acomodo!
        creado_por: Usuario!
        evidencias: [Evidencia]!
        createdAt: String!
        updatedAt: String!
    }

    type Mantenimiento{
        id: ID!
        nombre: String!
        informacion: String!
        fecha: String!
        hora_inicio: String!
        hora_final: String!
        equipo_proteccion: String!
        asignado_a: MantenimientoTipoEnum!
        tipo: MantenimientoTipoEnum!
        estado: EstadoSolicitudEnum!
        departamento_solicitante: Departamento!
        lugar: lugar!
        creado_por: Usuario!
        evidencias: [Evidencia]!
        createdAt: String!
        updatedAt: String!
    }

    type Salida{
        id: ID!
        nombre: String!
        informacion: String!
        fecha: String!
        hora_salida: String!
        hora_llegada: String!
        chofer: String!
        vehiculos: [Vehiculo]!
        pasajeros: Int!
        evidencias: [Evidencia]!
        creado_por: Usuario!
        createdAt: String!
        updatedAt: String!
    }

    type Vehiculo{
        id: ID!
        nombre: String!
        placas: String!
        modelo: String!
        cantidad_pasajeros: Int!
        evidencias: [Evidencia]!
        estado: EstadoDisponibilidadEnum!
        createdAt: String!
        updatedAt: String!
    }

    type Departamento{
        id: ID!
        nombre: String!
        subdireccion_asignada: String!
        Jefe: Usuario!
        creaqdo_por: Usuario!
        createdAt: String!
        updatedAt: String!
    } 

    type Evidencia{
        id: ID!
        tipo: TipoEvidenciaEnum!
        url: String!
        createdAt: String!
        updatedAt: String!
    }

    type Lugar{
        id: ID!
        nombre: String!
        informacion: String!
        acomodo: [Acomodo]!
        estado: EstadoDisponibilidadEnum!
        createdAt: String!
        updatedAt: String!

    }

    type Acomodo{
        id: ID!
        nombre: String!
        imagen: String!
        createdAt: String!
        updatedAt: String!
    }

    type Extintor{
        id: ID!
        nombre: String!
        numero_serie: String!
        fecha_expiracion: String!
        createdAt: String!
        updatedAt: String!
    }

    type Permisos{
        id: ID!
        usuario_id: ID!
        ver_eventos: Boolean!
        ver_mantenimientos: Boolean!
        ver_salidas: Boolean!
        ver_vehiculos: Boolean!
        ver_departamentos: Boolean!
        ver_usuarios: Boolean!
        ver_extintores: Boolean!
        ver_calendario: Boolean!
        crear_eventos: Boolean!
        crear_mantenimientos: Boolean!
        crear_salidas: Boolean!
        crear_vehiculos: Boolean!
        crear_departamentos: Boolean!
        crear_extintores: Boolean!
        subir_evidencias_mantenimiento: Boolean!
        subir_Evidencias_eventos: Boolean!
        aprobar_eventos: Boolean!
        aprobar_mantenimientos: Boolean!
        verificar_eventos: Boolean!
        verificar_mantenimientos: Boolean!
        actualizar_eventos: Boolean!
        actualizar_mantenimientos: Boolean!
        actualizar_salidas: Boolean!
        actualizar_Extintores: Boolean!
        borrar_evidencias_eventos: Boolean!
        borrar_evidencias_mantenimientos: Boolean!
        borrar_eventos: Boolean!
        borrar_mantenimientos: Boolean!
        borrar_salidas: Boolean!
        borrar_departamentos: Boolean!
        borrar_Extintores: Boolean!
        modificar_permisos: Boolean!
    }

    type subidaAvatar{
        status: Boolean,
        urlAvatar: String
    }

    type Query{
        prueba: String!
        obtenerUsuarios(input: PaginacionInput!): [Usuario]!
        obtenerUsuario(id: ID!): Usuario!
    }

    type Mutation{
        iniciarSesion(input: LoginInput!): Token!
        crearUsuario(input: CrearUsuarioInput!): Usuario!
        actualizarUsuario(id: ID!, input: ActualizarUsuarioInput!): Usuario!
        borrarUsuario(id: ID!): Usuario!
        subirAvatar: Boolean!
        borrarAvatar: Boolean!
    }

    #Enums-----------------------------------------------

    enum EstadoUsuarioEnum{
        PENDIENTE
        ACTIVO
        SUSPENDIDO
        ADMINISTRADOR
    }

    enum EstadoSolicitudEnum{
        PENDIENTE
        VERIFICADA
        APROBADA
        REPROGRAMADA
    }

    enum MantenimientoTipoEnum{
        INTERNO
        EXTERNO
    }

    enum EstadoDisponibilidadEnum{
        DIPONIBLE
        NO_DISPONIBLE
    }

    enum TipoEvidenciaEnum{
        EVENTO
        MANTENIMIENTO
        SALIDA
        VEHICULO
    }

    #Inputs----------------------------------------------------

    input LoginInput{
        correo: String!
        contrasena: String!
    }

    input CrearUsuarioInput{
        nombre: String!
        apellidos: String!
        correo: String!
        contrasena: String!
        numero_control: String!
    }

    input ActualizarUsuarioInput{
        nombre: String
        apellidos: String
        correo: String
        contrasena: String
        numero_control: String
        descripcion: String
        telefono: String
        estado: EstadoUsuarioEnum
    }

    input crearEvento{
        nombre: String!
        informacion: String!
        fecha: String!
        hora_inicio: String!
        hora_final: String!
        departamento_solicitante: ID!
        lugar: ID!
        acomodo: ID!
    }

    input actualizarEvento{
        nombre: String
        informacion: String
        fecha: String
        hora_inicio: String
        hora_final: String
        departamento_solicitante: ID
        lugar: ID
        acomodo: ID
        estado: EstadoSolicitudEnum
    }

    input crearMantenimiento{
        nombre: String!
        informacion: String!
        fecha: String!
        hora_inicio: String!
        hora_final: String!
        equipo_proteccion: String!
        asignado_a: MantenimientoTipoEnum!
        tipo: MantenimientoTipoEnum!
        estado: EstadoSolicitudEnum!
        departamento_solicitante: ID!
        lugar: String!
    }

    input actualizarMantenimiento{
        nombre: String
        informacion: String
        fecha: String
        hora_inicio: String
        hora_final: String
        equipo_proteccion: String
        asignado_a: MantenimientoTipoEnum
        tipo: MantenimientoTipoEnum
        estado: EstadoSolicitudEnum
        departamento_solicitante: ID
        lugar: String
    }

    input crearSalida{
        nombre: String!
        informacion: String!
        fecha: String!
        hora_salida: String!
        hora_llegada: String!
        chofer: String!
        vehiculos: [ID]!
        pasajeros: Int!
    }

    input actualizarSalida{
        nombre: String
        informacion: String
        fecha: String
        hora_salida: String
        hora_llegada: String
        chofer: String
        vehiculos: [ID]
        pasajeros: Int
    }

    input crearVehiculo{
        nombre: String!
        placas: String!
        modelo: String!
        cantidad_pasajeros: Int!
        estado: EstadoDisponibilidadEnum!
    }

    input actualizarVehiculo{
        nombre: String
        placas: String
        modelo: String
        cantidad_pasajeros: Int
        estado: EstadoDisponibilidadEnum
    }

    input crearDepartamento{
        nombre: String!
        subdireccion_asignada: String!
        Jefe: ID!
    }

    input actualizarDepartamento{
        nombre: String
        subdireccion_asignada: String
        Jefe: ID
    }

    input PaginacionInput{
        cantidad: Int!
        pagina: Int!
    }

    
    input crearLugar{
        nombre: String!
        informacion: String!
        acomodo: [ID]!
        estado: EstadoDisponibilidadEnum!

    }

    input actualizarLugar{
        nombre: String
        informacion: String
        acomodo: [ID]
        estado: EstadoDisponibilidadEnum

    }

    input crearAcomodo{
        nombre: String!
        imagen: String!
    }

    
    input actualizarAcomodo{
        nombre: String
        imagen: String
    }

    input crearExtintor{
        nombre: String!
        numero_serie: String!
        fecha_expiracion: String!
    }

    input actualizarExtintor{
        nombre: String
        numero_serie: String
        fecha_expiracion: String
    }

    input actualizarPermisos{
        ver_eventos: Boolean
        ver_mantenimientos: Boolean
        ver_salidas: Boolean
        ver_vehiculos: Boolean
        ver_departamentos: Boolean
        ver_usuarios: Boolean
        ver_extintores: Boolean
        ver_calendario: Boolean
        crear_eventos: Boolean
        crear_mantenimientos: Boolean
        crear_salidas: Boolean
        crear_vehiculos: Boolean
        crear_departamentos: Boolean
        crear_extintores: Boolean
        subir_evidencias_mantenimiento: Boolean
        subir_Evidencias_eventos: Boolean
        aprobar_eventos: Boolean
        aprobar_mantenimientos: Boolean
        verificar_eventos: Boolean
        verificar_mantenimientos: Boolean
        actualizar_eventos: Boolean
        actualizar_mantenimientos: Boolean
        actualizar_salidas: Boolean
        actualizar_Extintores: Boolean
        borrar_evidencias_eventos: Boolean
        borrar_evidencias_mantenimientos: Boolean
        borrar_eventos: Boolean
        borrar_mantenimientos: Boolean
        borrar_salidas: Boolean
        borrar_departamentos: Boolean
        borrar_Extintores: Boolean
        modificar_permisos: Boolean
    }
    
`
module.exports = typeDefs;