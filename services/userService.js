import db from "../models";
const { User, Project } = db;

export const findByPk = async id => {
	try {
		return await User.findByPk(id);
	} catch (error) {
		console.log(error);
	}
};

export const findByEmail = async email => {
	try {
		return await User.findOne({
			where: { email: email }
		});
	} catch (error) {
		console.log(error);
	}
};

export const findAll = async () => {
	try {
		return await User.findAll();
	} catch (error) {
		console.log(error);
	}
};

export const findProjects = async id => {
	try {
		return await Project.findAll({
			where: {
				userId: id
			}
		});
	} catch (error) {
		console.log(error);
	}
};

export const createUser = async signupInput => {
	const { firstName, lastName, email, password } = signupInput;

	try {
		return await User.create({ firstName, lastName, email, password });
	} catch (error) {
		console.log(error);
	}
};
