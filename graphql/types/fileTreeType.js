import gql from "graphql-tag";

export default gql`
	scalar JSON
	scalar JSONObject
	directive @auth on FIELD_DEFINITION

	type FileTree {
		id: Int
		data: JSONObject
		projectId: Int
	}

	type Query {
		fileTree: FileTree
	}

	type Mutation {
		updateFileTree(id: Int!, data: JSONObject!): FileTree
	}
`;
