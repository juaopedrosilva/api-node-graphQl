const User = require('./User')
const Todo = require('./Todo')

module.exports = {
    Query: {
        users: () => User.find(),
        user: (_, { id }) => User.findById(id),
        todos: () => Todo.find(),
        todo: (_, { id }) => Todo.findById(id)
    },
    
    Mutation: {
        createUser: (_, { name, email}) => User.create({ name, email }),
        createTodo: (_, { title }) => Todo.create({ title })
    }
}