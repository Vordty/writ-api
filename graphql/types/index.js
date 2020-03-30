import { mergeTypes } from "merge-graphql-schemas";

import authType from "./authType";
import userType from "./userType";
import projectType from "./projectType";
import fileTreeType from "./fileTreeType";

const types = [authType, userType, projectType, fileTreeType];

export default mergeTypes(types, { all: true });
