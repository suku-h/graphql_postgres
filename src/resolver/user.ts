export const UserResolver = {
  Query: {
    getUser: (parent, { username }, { models }) => models.User.findOne({
      where: {
        username
      }
    }),

    allUsers: async (parent, args, { models }) => {
      console.log('models', models)
      console.log('*************************************************')
      console.log('models.models.User, models.User', models.models.User, models.user)
      return await models.user.findAll()
    }
  },

  Mutation: {
    createUser: (parent, args, { models }) => models.User.create(args),
    updateUser: (parent, args, { models }) => models.User.update(args),
    deleteUser: (parent, args, { models }) => models.User.destroy({
      where: args
    }),
  }
}
