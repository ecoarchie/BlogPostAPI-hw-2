import { BlogViewModel } from '../models/blogModel';
import { PostInputModel, PostViewModel } from '../models/postModel';
import { blogsRepository } from './blogs-repository';

let postsDB: Array<PostViewModel> = [
  {
    id: '1',
    title: 'Post 1',
    shortDescription: 'Description 1',
    content: 'Content of post 1',
    blogId: '1',
    blogName: 'Blog 1',
  },
  {
    id: '2',
    title: 'Post 2',
    shortDescription: 'Description 2',
    content: 'Content of post 2',
    blogId: '2',
    blogName: 'Blog 2',
  },
  {
    id: '3',
    title: 'Post 3',
    shortDescription: 'Description 3',
    content: 'Content of post 3',
    blogId: '1',
    blogName: 'Blog 1',
  },
];

export const postsRepository = {
  async findPosts(): Promise<PostViewModel[]> {
    return postsDB;
  },

  async deleteAllPosts(): Promise<PostViewModel[]> {
    postsDB = [];
    return postsDB;
  },

  async createPost(data: PostInputModel): Promise<PostViewModel> {
    const { title, shortDescription, content, blogId } = data;
    const blog = (await blogsRepository.findBlogById(blogId)) as BlogViewModel;
    const blogName = blog.name;
    const newPost: PostViewModel = {
      id: (+new Date()).toString(),
      title,
      shortDescription,
      content,
      blogId,
      blogName,
    };
    postsDB.push(newPost);
    return newPost;
  },

  async findPostById(id: string): Promise<PostViewModel | undefined> {
    const post: PostViewModel | undefined = postsDB.find((p) => p.id === id);
    return post;
  },

  async updatePostById(id: string, newDatajson: PostInputModel): Promise<boolean> {
    const postToUpdate: PostViewModel | undefined = postsDB.find((p) => p.id === id);
    if (!postToUpdate) return false;

    const postIndexToChange: number = postsDB.findIndex((p) => p.id === id);
    postsDB[postIndexToChange] = {
      ...postToUpdate,
      ...newDatajson,
    };
    return true;
  },

  async deletePostById(id: string): Promise<boolean> {
    const postToDelete: PostViewModel | undefined = postsDB.find((p) => p.id === id);
    if (!postToDelete) {
      return false;
    } else {
      postsDB = postsDB.filter((p) => p.id !== id);
      return true;
    }
  },
};
