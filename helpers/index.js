const bcrypt = require("bcrypt");

async function Evaluar(data, prisma){

    const evaluate = await prisma.findFirst({
        where: data
    })
    console.log(evaluate)

    if(evaluate === null) return false
    return true

   
}

function Encriptar(contrasena){
    const salt = bcrypt.genSaltSync(10);
    return  bcrypt.hash(contrasena, salt);
}

function Resetear(data, object){
    const {trim = false, lowercase = false, uppercase = false} = object;

    if(trim) data.trim();
    if(lowercase) data.toLowerCase();
    if(uppercase) data.toUpperCase();

    return data;
}

async function Crear(prisma, data){
    try{
        const nuevoElemento = await prisma.create({
            data: {
                ...data,
                createdAt: Date.now(),
                updatedAt: Date.now()
            },
          });

        
          return nuevoElemento;

    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    Evaluar,
    Encriptar,
    Resetear,
    Crear
};
