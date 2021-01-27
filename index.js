const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
require("dotenv").config({path: ".env"});

const app = express();
const prisma = new PrismaClient();

const typeDefs = require("./graphql/schema");
const {Query} = require("./graphql/resolvers/query");
const {Mutation} = require("./graphql/resolvers/mutation");

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation

    },
    context: ({req}) => {
        const token = req.headers.authorization;

        if(token){
            try{
                const usuario = jwt.verify(
                    token.replace("bearer ", ""),
                    process.env.SECRET_KEY
                );
                return {
                    ...req,
                    prisma,
                    usuario,
                };

            }
            catch(error){
                console.log("#### ERROR ####");
                console.log(error);
                throw new Error(" token invalido");
            }
        }
        return {
            ...req,
            prisma
        }
    }
})

server.applyMiddleware({app});
const PORT = process.env.PORT | 4000;

app.listen(PORT, ( ) => {
    console.log(`servidor corriendo en el servidor http://localhost:${PORT}/graphql `)
})
