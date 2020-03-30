"use strict";
module.exports = (sequelize, DataTypes) => {
	const FileTree = sequelize.define(
		"FileTree",
		{
			data: DataTypes.JSON,
			projectId: DataTypes.INTEGER
		},
		{}
	);
	FileTree.associate = function(models) {
		FileTree.belongsTo(models.Project, {
			foreignKey: {
				fieldName: "projectId",
				allowNull: true,
				require: true
			},
			targetKey: "id"
		});
	};
	return FileTree;
};
