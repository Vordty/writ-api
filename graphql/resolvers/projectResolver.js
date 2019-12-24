import { findByPk, findAll, findUser, createProject } from "../../services/projectService";

const projectResolver = {
	Query: {
		project: (parent, args, context, info) => {
			return findByPk(args.id);
		},
		projects: (parent, args, context, info) => {
			return findAll();
		}
	},

	Mutation: {
		createProject: (parent, args, context, info) => {
			return createProject(args.input);
		}
	},

	Project: {
		user: (parent, args, context, info) => {
			return findUser(parent.id);
		}
	}
};

export default projectResolver;
