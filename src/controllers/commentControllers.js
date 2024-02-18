import {
  createComment,
  deleteComment,
  getComment,
  getPostComments,
  updateComment,
} from "../services/comment/index.js";
import { AppResponse } from "../utils/responseHandler.js";

export const create = async (req, res) => {
  try {
    const comment = await createComment(req, res);

    if (comment)
      new AppResponse(
        "success",
        "Comment created successfully",
        { comment },
        200
      ).send(res);
  } catch (error) {
    res.status(400).json({
      status: error.status,
      message: error.message,
    });
  }
};

export const getAllByPost = async (req, res) => {
  try {
    const comments = await getPostComments(req, res);

    if (comments)
      new AppResponse(
        "success",
        "Comments for this post fetched successfully",
        { comments },
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
    const comment = await getComment(req, res);

    if (comment)
      new AppResponse(
        "success",
        "Comment fetched successfully",
        { comment },
        200
      ).send(res);
  } catch (error) {
    res.status(400).json({
      status: error.status,
      message: error.message,
    });
  }
};

export const updateOne = async (req, res) => {
 try {
  const comment = await updateComment(req, res);

  if (comment)
   new AppResponse('success', 'Comment updated successfully', { comment }, 200).send(
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
  const comment = await deleteComment(req, res);

  if (comment)
   new AppResponse('success', 'Comment deleted successfully', { comment }, 200).send(
    res
   );
 } catch (error) {
  res.status(400).json({
   status: error.status,
   message: error.message,
  });
 }
};