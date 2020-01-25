import gql from "graphql-tag";

export default gql`
	type LoginStatus {
		success: Boolean!
		message: String!
		token: String
	}

	type SignupStatus {
		success: Boolean!
		message: String!
		user: User
	}

	input SignupInput {
		email: String!
		username: String!
		password: String!
		rePassword: String!
	}

	type Query {
		getAuthedUser: User
	}

	type Mutation {
		login(email: String!, password: String!): LoginStatus!
		signup(signupInput: SignupInput): SignupStatus!
		signupTest(signupInput: SignupInput): SignupStatus!
	}
`;
