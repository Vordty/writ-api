import { mergeResolvers } from "merge-graphql-schemas";

import userResolver from "./userResolver";
import projectResolver from "./projectResolver";

const resolvers = [userResolver, projectResolver];

export default mergeResolvers(resolvers);
