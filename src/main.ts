import { join } from "path";
import { UserServiceInterface } from "./lib/user/user_interface";

const UserProtofile = join(__dirname, "..", "protos", "user.proto");
console.log(UserProtofile);

export { UserProtofile, UserServiceInterface };
