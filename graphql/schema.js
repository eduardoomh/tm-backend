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

    input PaginacionInput{
        cantidad: Int!
        pagina: Int!
    }
    
`
module.exports = typeDefs;