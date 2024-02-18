import {
 createPost,
 deletePost,
 getPost,
 getPosts,
 getUserPosts,
 updatePost,
} from '../services/post/index.js';
import { AppResponse } from '../utils/responseHandler.js';

export const create = async (req, res) => {
 try {
  const post = await createPost(req, res);

  if (post)
   new AppResponse('success', 'Post created successfully', { post }, 200).send(
    res
   );
 } catch (error) {
  res.status(400).json({
   status: error.status,
   message: error.message,
  });
 }
};

export const getAll = async (req, res) => {
 try {
  const posts = await getPosts(req, res);

  if (posts)
   new AppResponse(
    'success',
    'Posts fetched successfully',
    { posts },
    200
   ).send(res);
 } catch (error) {
  res.status(400).json({
   status: error.status,
   message: error.message,
  });
 }
};

export const getAllByUser = async (req, res) => {
 try {
  const posts = await getUserPosts(req, res);

  if (posts)
   new AppResponse(
    'success',
    'Users posts fetched successfully',
    { posts },
    200
   ).send(res);
 } catch (error) {
  res.status(400).json({
   status: error.status,
   message: error.message,
  });
 }
};

export const getOne = async (req, res) => {
 try {
  const post = await getPost(req, res);

  if (post)
   new AppResponse('success', 'Post fetched successfully', { post }, 200).send(
    res
   );
 } catch (error) {
  res.status(400).json({
   status: error.status,
   message: error.message,
  });
 }
};

export const updateOne = async (req, res) => {
 try {
  const post = await updatePost(req, res);

  if (post)
   new AppResponse('success', 'Post updated successfully', { post }, 200).send(
    res
   );
 } catch (error) {
  res.status(400).json({
   status: error.status,
   message: error.message,
  });
 }
};

export const deleteOne = async (req, res) => {
 try {
  const post = await deletePost(req, res);

  if (post)
   new AppResponse('success', 'Post deleted successfully', { post }, 200).send(
    res
   );
 } catch (error) {
  res.status(400).json({
   status: error.status,
   message: error.message,
  });
 }
};
