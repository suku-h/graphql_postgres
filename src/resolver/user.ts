export const UserResolver = {
  Query: {
    getUser: (parent, { userName }, { db }) => db.User.findOne({
      where: {
        userName
      }
    }),

    allUsers: async (parent, args, { db }) => db.User.findAll()
  },

  Mutation: {
    createUser: (parent, args, { db }) => db.User.create(args),
    updateUser: (parent, args, { db }) => db.User.update(args),
    deleteUser: (parent, args, { db }) => db.User.destroy({
      where: args
    }),
  }
}
