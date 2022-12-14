import { body, CustomValidator } from 'express-validator';
import { blogsRepository } from '../repositories/blogs-repository';

export const isValidBlogId = body('blogId')
  .exists()
  .withMessage('Post ID is required')
  .custom(async (id) => {
    if (!(await blogsRepository.findBlogById(id))) {
      throw new Error("Blog with this ID doesn't exist");
    }
    return true;
  });
