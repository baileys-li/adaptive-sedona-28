import { deleteAsync } from "del";
import { Path } from "./_constants.mjs";

export const cleanBuild = async () => await deleteAsync(Path.BUILD);
