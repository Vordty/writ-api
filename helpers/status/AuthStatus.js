export const LoginStatus = {
	SUCCESS: token => ({ success: true, message: "Success", token: token }),

	FAILURE: {
		success: false,
		message: "Inavlid Credentials",
		token: undefined
	}
};

export const SignupStatus = {
	SUCCESS: user => ({ success: true, message: "Success!", user: user }),

	FAILURE: message => ({
		success: false,
		message: message,
		user: undefined
	})
};

export const ConfirmationStatus = {
	SUCCESS: {
		success: true,
		message: "Confirmation Success"
	},

	FAILURE: {
		success: false,
		message: "Confirmation Failure"
	}
};
