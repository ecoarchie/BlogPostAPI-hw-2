"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = require("express");
const post_controllers_1 = require("../controllers/post-controllers");
const basic_auth_middleware_1 = require("../middlewares/basic-auth-middleware");
const blog_id_custom_validator_1 = require("../middlewares/blog-id-custom-validator");
const input_validation_middleware_1 = require("../middlewares/input-validation-middleware");
const jwt_auth_mware_1 = require("../middlewares/jwt-auth-mware");
exports.postRouter = (0, express_1.Router)();
exports.postRouter.get('/', post_controllers_1.getAllPostsController);
exports.postRouter.post('/', basic_auth_middleware_1.basicAuthMiddleware, blog_id_custom_validator_1.isValidBlogId, (0, input_validation_middleware_1.postBodyValidation)(), input_validation_middleware_1.inputValidatiomMiddleware, post_controllers_1.createPostController);
exports.postRouter.get('/:id', post_controllers_1.findPostByIdController);
exports.postRouter.put('/:id', basic_auth_middleware_1.basicAuthMiddleware, blog_id_custom_validator_1.isValidBlogId, (0, input_validation_middleware_1.postBodyValidation)(), input_validation_middleware_1.inputValidatiomMiddleware, post_controllers_1.updatePostByIdController);
exports.postRouter.delete('/:id', basic_auth_middleware_1.basicAuthMiddleware, post_controllers_1.deletePostByIdController);
exports.postRouter.get('/:postId/comments', post_controllers_1.getCommentsForPostController);
exports.postRouter.post('/:postId/comments', jwt_auth_mware_1.jwtAuthMware, (0, input_validation_middleware_1.commentBodyValidation)(), input_validation_middleware_1.inputValidatiomMiddleware, post_controllers_1.createCommentForPostController);
