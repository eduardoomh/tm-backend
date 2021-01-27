const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {Evaluar, Encriptar, Resetear, Crear} = require("../helpers/index");

async function crearToken(usuario, SECRET_KEY, expiresIn){

    const payload = {
        ...usuario
    }

    return jwt.sign(payload, SECRET_KEY, {expiresIn});
    
    
}

async function iniciarSesion(input, prisma){
    const {correo, contrasena} = input;

    const usuario = await prisma.usuario.findFirst({
        where: {
            correo: correo
        }
    });

    if(!usuario) throw new Error("El correo o contrasena son incorrectos");

    const contrasenaExitosa = await bcrypt.compare(contrasena, usuario.contrasena);
    if(!contrasenaExitosa) throw new Error("El correo o contrasena son incorrectos");

    return{
        token: crearToken(usuario, process.env.SECRET_KEY, "24h")
    }
}

async function obtenerUsuarios(input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    const {cantidad, pagina} = input;

    try{
        const usuarios = await prisma.usuario.findMany({
            take: parseInt(cantidad),
            skip: parseInt((pagina - 1 ) * cantidad)
        })
        return usuarios;
    }
    catch(error){
        console.log(error);
    }

}

async function obtenerUsuario(id, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    const usuario = await prisma.usuario.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    return usuario;
}

async function crearUsuario(input, prisma){
    const usuarioInput = input;

    //resetear
    usuarioInput.correo = Resetear(usuarioInput.correo, {lowercase: true, trim: true});
    usuarioInput.numero_control = Resetear(usuarioInput.numero_control, {trim: true});
    usuarioInput.contrasena = Resetear(usuarioInput.contrasena, {trim: true});

    const {correo, numero_control, contrasena} = usuarioInput;

    //evaluar si existen en la base de datos
     const correoEvaluar = await Evaluar({correo}, prisma.usuario);
    if(correoEvaluar) throw new Error("El correo electronico ya esta en uso, elija otro ")
  
   const numero_controlEvaluar = await Evaluar({numero_control}, prisma.usuario);
    if(numero_controlEvaluar) throw new Error("El numero de control ya ha sido registrado por otro usuario")

    //Evaluar requisitos minimos
    if(usuarioInput.nombre.length < 3) throw new Error("El nombre debe tener al menos 3 letras");
    if(usuarioInput.apellidos.length < 3) throw new Error("El apellido debe tener al menos 3 letras");
    if(usuarioInput.contrasena.length < 8) throw new Error("La contrasena debe tener al menos 8 caracteres");

    //cifrar la contrasena
    usuarioInput.contrasena = await Encriptar(contrasena);

    //guardar el usuario en la base de datos
    const nuevoUsuario = Crear(prisma.usuario, {
        ...usuarioInput,
        estado: "PENDIENTE"
    });

    return nuevoUsuario;
  
}

async function actualizarUsuario(id, input, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
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
    catch(error){
        console.log(error);
    }

    }

async function borrarUsuario(id, prisma, user){
    if(!user) throw new Error("Necesita estar logueado para poder ver el contenido");

    try{
        const Usuario = await prisma.usuario.delete({
            where: { 
                id: parseInt(id)
            },
            });
        
         return Usuario;

    }
    catch(error){
        console.log(error);
    }

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