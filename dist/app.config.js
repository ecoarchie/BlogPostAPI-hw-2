"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const blog_routers_1 = require("./routes/blog-routers");
const blogs_repository_1 = require("./repositories/blogs-repository");
const post_routers_1 = require("./routes/post-routers");
const posts_repository_1 = require("./repositories/posts-repository");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.app = (0, express_1.default)();
exports.port = process.env.PORT;
exports.app.use(body_parser_1.default.json());
exports.app.use('/blogs', blog_routers_1.blogRouter);
exports.app.use('/posts', post_routers_1.postRouter);
exports.app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.app.delete('/testing/all-data', (req, res) => {
    blogs_repository_1.blogsRepository.deleteAllBlogs();
    posts_repository_1.postsRepository.deleteAllPosts();
    res.sendStatus(204);
});