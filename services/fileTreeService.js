import db from "../models";
const { FileTree } = db;

export const findByProjectId = async id => {
	console.log("FIND FILE TREE BY PROJECT ID", id);
	try {
		const result = await FileTree.findAll({
			where: { projectId: id },
			plain: true,
			raw: true
		});
		return result;
	} catch (error) {
		console.log(error);
	}
};

export const updateFileTree = async args => {
	console.log("UPDATE FILE TREE", args);
};
