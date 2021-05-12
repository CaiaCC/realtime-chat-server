import GraphQLServer from 'graphql-yoga';

const typeDefs = `
    type Message {
        id: ID!,
        user: String!,
        content: String!
    }

    type Query {
        messages: [Message!]
    }
`

const server = new GraphQLServer({ typeDefs });

server.start(({port}) => {
    console.log(`Server on localhost:${port}`);
})