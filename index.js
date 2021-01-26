const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { PrismaClient } = require("@prisma/client");

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
    context: ({request}) => {
        return {
            ...request,
            prisma
        }
    }
})

server.applyMiddleware({app});
const PORT = process.env.PORT | 4000;

app.listen(PORT, ( ) => {
    console.log(`servidor corriendo en el servidor http://localhost:${PORT}/graphql `)
})
