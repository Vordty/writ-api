import { SchemaDirectiveVisitor } from "apollo-server-express";
import { defaultFieldResolver } from "graphql";
import { checkAuthentication } from "../../helpers/auth/checkAuth";

class AuthDirective extends SchemaDirectiveVisitor {
	visitFieldDefinition(field) {
		const { resolve = defaultFieldResolver } = field;

		field.resolve = async function(...args) {
			const [, , context] = args;
			await checkAuthentication(context);
			return resolve.apply(this, args);
		};
	}
}
export default AuthDirective;
