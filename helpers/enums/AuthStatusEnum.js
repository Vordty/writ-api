export const LoginStatusEnum = {
	SUCCESS: token => ({ success: true, message: "Success", token: token }),

	FAILURE: {
		success: false,
		message: "Inavlid Credentials",
		token: undefined
	}
};

export const SignupStatusEnum = {
	SUCCESS: user => ({ success: true, message: "Success!", user: user }),

	FAILURE: {
		success: false,
		message: "Email Taken",
		user: undefined
	}
};
