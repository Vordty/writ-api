import db from "../models";
const { Project, User } = db;

import { findByPk as findByPkUser } from "./userService";

export const findByPk = async id => {
	try {
		return await Project.findByPk(id);
	} catch (error) {
		console.log(error);
	}
};

export const findAll = async () => {
	try {
		return await Project.findAll();
	} catch (error) {
		console.log(error);
	}
};

export const findUser = async projectId => {
	try {
		const project = await findByPk(projectId);
		return findByPkUser(project.userId);
	} catch (error) {
		console.log(error);
	}
};

export const createProject = async projectInput => {
	try {
		console.log("projectInput", projectInput.title);

		// set authorized user's id
		// projectInput.userId = context.user.id;

		projectInput.userId = 84;
		return await Project.create(projectInput);
	} catch (error) {
		console.log(error);
	}
};
