const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')

mongoose.connect('mongodb://goweek:goweek123@ds227664.mlab.com:27664/goweek-backend',{
    useNewUrlParser: true
})

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
})

server.start()