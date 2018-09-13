import * as bodyParser from 'body-parser'
import * as express from 'express'
import User from './models/user'
import { ApolloServer } from 'apollo-server-express'
import { Sequelize } from 'sequelize-typescript'
import { UserResolver } from './resolver/user'
import { UserTypeDef } from './typeDef/user'

const models = new Sequelize({
  name: 'graphqltutdb',
  dialect: 'postgres',
  host: 'localhost',
  username: 'graphqltut',
  password: 'password',
  port: 5432
})

models.addModels([User])

const server = new ApolloServer({ typeDefs: UserTypeDef, resolvers: UserResolver, context: { models } });

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

server.applyMiddleware({ app })

models
  .sync({ force: true })
  .then(() => {
    app.listen({ port: 1331 }, () =>
      console.log(`🚀 Server ready at http://localhost:1331${server.graphqlPath}`),
    );
  })

