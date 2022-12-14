"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = require("express");
const input_validation_middleware_1 = require("../middlewares/input-validation-middleware");
const blog_controllers_1 = require("../controllers/blog-controllers");
const basic_auth_middleware_1 = require("../middlewares/basic-auth-middleware");
exports.blogRouter = (0, express_1.Router)();
exports.blogRouter.get('/', blog_controllers_1.getAllBlogsController);
exports.blogRouter.post('/', basic_auth_middleware_1.basicAuthMiddleware, (0, input_validation_middleware_1.blogBodyValidation)(), input_validation_middleware_1.inputValidatiomMiddleware, blog_controllers_1.createBlogController);
exports.blogRouter.post('/:blogId/posts', basic_auth_middleware_1.basicAuthMiddleware, (0, input_validation_middleware_1.postBodyValidation)(), input_validation_middleware_1.inputValidatiomMiddleware, blog_controllers_1.createBlogPostController);
exports.blogRouter.get('/:id', blog_controllers_1.getBlogByIdcontroller);
exports.blogRouter.put('/:id', basic_auth_middleware_1.basicAuthMiddleware, (0, input_validation_middleware_1.blogBodyValidation)(), input_validation_middleware_1.inputValidatiomMiddleware, blog_controllers_1.updateBlogByIdController);
exports.blogRouter.delete('/:id', basic_auth_middleware_1.basicAuthMiddleware, blog_controllers_1.deleteBlogByIdController);
exports.blogRouter.get('/:blogId/posts', blog_controllers_1.getPostsByBlogIdController);
