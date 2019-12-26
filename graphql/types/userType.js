import gql from "graphql-tag";

export default gql`
	type User {
		id: Int!
		firstName: String
		lastName: String
		email: String
		password: String
		projects: [Project!]!
	}

	input UserInput {
		firstName: String
		lastName: String
		email: String
		password: String
	}

	type Query {
		user(id: Int!): User
		users: [User]
	}

	type Mutation {
		createUser(input: UserInput!): User!
	}
`;
