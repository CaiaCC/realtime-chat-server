import GraphQLServer from 'graphql-yoga';

const server = new GraphQLServer();

server.start(({port}) => {
    console.log(`Server on localhost:${port}`);
})