import db from "../models";
import { FileTreeUpdateStatus } from "../helpers/status/FileTreeStatus";
const { FileTree } = db;

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
