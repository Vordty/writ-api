import gql from "graphql-tag";

export default gql`
	scalar JSON
	scalar JSONObject
	directive @auth on FIELD_DEFINITION

	type FileTree {
		id: Int
		data: JSON
		projectId: Int
	}

	type FileTreeStatus {
		success: Boolean!
		message: String!
		data: JSON
	}

	type Query {
		fileTree: FileTree
	}

	type Mutation {
		updateFileTree(id: Int!, data: JSON!): FileTreeStatus
	}
`;
