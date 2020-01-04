import express from "express";

import { ApolloServer, makeExecutableSchema } from "apollo-server-express";

import db from "./models";
import typeDefs from "./graphql/types";
import resolvers from "./graphql/resolvers";
import AuthDirective from "./graphql/directives/authDirective";

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config/keys";

const app = express();

const schemaDirectives = { auth: AuthDirective };
const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
	schemaDirectives
});

const apolloServer = new ApolloServer({
	schema,

	context: ({ req, res }) => {
		const context = { req, res };

		try {
			const token = req.headers.authorization;
			if (!token) {
				return undefined;
			}

			const payload = jwt.verify(token, JWT_SECRET);

			const newToken = jwt.sign(payload, JWT_SECRET);
			res.set("Authorization", `Bearer ${newToken}`);

			context.authUserId = payload.id;
		} catch (error) {
			console.log(error);
		}

		return context;
	}
});

apolloServer.applyMiddleware({ app });

db.sequelize.sync().then(async () => {
	app.listen({ port: 4000 }, () => console.log("Listening..."));
});
