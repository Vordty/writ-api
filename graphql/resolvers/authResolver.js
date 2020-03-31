import { login, signup } from "../../services/authService";
import { findByEmail, findByPk } from "../../services/userService";

import { LoginStatus, SignupStatus, ConfirmationStatus } from "../../helpers/status/AuthStatus";

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/keys";

const authResolver = {
	Query: {
		getAuthedUser: (parent, args, context, info) => {
			return findByPk(context.authUserId);
		}
	},

	Mutation: {
		login: async (parent, args, context, info) => {
			const { email, password } = args;

			const user = await login(email, password);

			if (!user) {
				return LoginStatus.FAILURE;
			}

			const options = {
				issuer: "hmm.com",
				expiresIn: "1h",
				algorithm: "HS256"
			};

			const token = jwt.sign({ id: user.id }, JWT_SECRET, options);

			return LoginStatus.SUCCESS(token);
		},

		signup: async (parent, args, context, info) => {
			const { signupInput } = args;

			const user = await findByEmail(signupInput.email);
			if (user) {
				return SignupStatus.FAILURE("Email Taken");
			}

			const newUser = signup(signupInput);

			return SignupStatus.SUCCESS(newUser);
		},

		signupTest: async (parent, args, context, info) => {
			const { signupInput } = args;

			const user = await findByEmail(signupInput.email);
			if (user) {
				return SignupStatus.FAILURE("Email Taken");
			}

			return SignupStatus.SUCCESS(null);
		},

		sendConfirmationCode: async (parent, args, context, info) => {
			// for now
			return ConfirmationStatus.FAILURE;
		}
	}
};

export default authResolver;
