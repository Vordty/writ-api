import { mergeTypes } from "merge-graphql-schemas";

import userType from "./userType";
import projectType from "./projectType";

const types = [userType, projectType];

export default mergeTypes(types, { all: true });
