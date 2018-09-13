export const UserResolver = {
  Query: {
    getUser: (parent, { username }, { models }) => models.User.findOne({
      where: {
        username
      }
    }),

    allUsers: async (parent, args, { models }) => models.User.findAll()
  },

  Mutation: {
    createUser: (parent, args, { models }) => models.User.create(args),
    updateUser: (parent, args, { models }) => models.User.update(args),
    deleteUser: (parent, args, { models }) => models.User.destroy({
      where: args
    }),
  }
}
