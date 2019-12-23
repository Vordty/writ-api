import { findByPk, findAll } from "../../services/userService";

const userResolver = {
	Query: {
		user: (parent, args, context, info) => {
			return findByPk(args.id);
		},
		users: (parent, args, context, info) => {
			return findAll();
		}
	},

	Mutation: {
		createUser: (parent, args, context, info) => {
			return "user created";
		}
	}
};

export default userResolver;
