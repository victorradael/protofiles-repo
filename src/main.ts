import { join } from "path";
import { UserServiceInterface } from "./lib/user/user_interface";

const UserProtofile = join(__dirname, "lib", "user", "user.proto");

export { UserProtofile, UserServiceInterface };
