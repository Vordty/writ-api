import db from "../models";
const { Project, User } = db;

import { findByEmail, createUser } from "./userService";
import { compare, genSalt, hash } from "bcryptjs";

export const login = async (email, password) => {
	const user = findByEmail(email);

	if (!user) return;

	const isSame = await compare(password, user.password);
	if (!isSame) return;

	delete user.password;

	return user;
};

export const register = async signupInput => {
	const salt = await genSalt(10);
	const hashedPassword = await hash(password, salt);

	signupInput.password = hashedPassword;
	return createUser(signupInput);
};
