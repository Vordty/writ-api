import gql from "graphql-tag";

export default gql`
	type Project {
		id: Int!
		title: String
		user: User
	}

	type Query {
		project(id: Int!): Project
		projects: [Project]
	}
`;
