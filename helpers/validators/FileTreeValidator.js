import { FileTreeItemStruct } from "../structs/FileTreeStruct";

export const validateFileTree = fileTree => {
	try {
		fileTree.map(file => {
			FileTreeItemStruct(file);
		});
	} catch (e) {
		console.log("VALIDATOR ERROR", e);
		return e;
	}
};
