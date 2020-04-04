import db from "../models";
const { FileTree } = db;
import { FileTreeUpdateStatus } from "../helpers/status/FileTreeStatus";
import { validateFileTree } from "../helpers/validators/FileTreeValidator";

export const findByProjectId = async id => {
	console.log("FIND FILE TREE BY PROJECT ID", id);
	try {
		const result = await FileTree.findAll({
			where: { projectId: id },
			plain: true,
			raw: true,
		});
		return result;
	} catch (error) {
		console.log(error);
	}
};

export const updateFileTree = async args => {
	console.log("UPDATE FILE TREE", args);
	try {
		const error = validateFileTree(args.data);
		if (error) throw error;

		const result = await FileTree.update(
			{
				data: args.data,
			},
			{ where: { id: args.id } },
		);

		console.log("RESULT OF UPDATE FILETREE", result);
		return FileTreeUpdateStatus.SUCCESS(args.data);
	} catch (error) {
		console.log(error);
		return FileTreeUpdateStatus.FAILURE;
	}
};
