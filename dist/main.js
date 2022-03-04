"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProtofile = void 0;
var path_1 = require("path");
var UserProtofile = (0, path_1.join)(__dirname, "..", "protos", "user.proto");
exports.UserProtofile = UserProtofile;
console.log(UserProtofile);
