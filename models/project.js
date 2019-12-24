"use strict";
module.exports = (sequelize, DataTypes) => {
	const Project = sequelize.define(
		"Project",
		{
			title: DataTypes.STRING,
			userId: DataTypes.INTEGER
		},
		{}
	);
	Project.associate = function(models) {
		Project.belongsTo(models.User);
	};
	return Project;
};
