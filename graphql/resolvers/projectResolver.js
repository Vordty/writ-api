import { findByPk, findAll } from "../../services/userService";

const projectResolver = {
	Query: {
		project: (parent, args, context, info) => {},
		projects: (parent, args, context, info) => {}
	}
};

export default projectResolver;
