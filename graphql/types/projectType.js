import gql from "graphql-tag";

export default gql`
	type Project {
		id: Int!
		title: String
		user: User
	}

	input ProjectInput {
		title: String
	}

	type Query {
		project(id: Int!): Project
		projects: [Project]
	}

	type Mutation {
		createProject(input: ProjectInput!): Project!
	}
`;
