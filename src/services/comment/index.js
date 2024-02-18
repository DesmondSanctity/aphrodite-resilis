import { Comments, Users } from "../../models/index.js";
import { getPagination } from "../../utils/paginateQuery.js";
import { AppError } from "../../utils/responseHandler.js";

export const createComment = async (req, res) => {
  try {
    const { body, author, post } = req.body;

    const comment = await Comments.create({
      body,
      userId: author,
      postId: post,
    });

    if (comment) {
      return comment;
      // new AppResponse('success', '...', { comment }, 200).send(res);
    } else {
      throw new AppError("failed", "Failed to create comment, try again", 400);
    }
  } catch (error) {
    res.status(400).json({
      status: error.status,
      message: error.message,
    });
  }
};

export const getPostComments = async (req, res) => {
  try {
    const results = getPagination(Comments, {
      ...req.query,
      include: [
        {
          model: Users,
          required: false,
          attributes: {
            exclude: ["password"],
          },
        },
      ],
      where: { postId: req.params.postId },
      order: [],
    });

    if (results) {
      return results;
      // new AppResponse('success', '...', { comment }, 200).send(res);
    } else {
      throw new AppError("failed", "failed to fetch comments for this post", 400);
    }
  } catch (error) {
    res.status(400).json({
      status: error.status,
      message: error.message,
    });
  }
};

export const getComment = async (req, res) => {
  try {
    if (req.params.id) {
      const post = await Comments.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (post) {
        return post;
        // new AppResponse('success', '...', { comment }, 200).send(res);
      } else {
        throw new AppError("failed", "Failed to fetch comment", 400);
      }
    } else {
      throw new AppError("failed", "Invalid Id, try again", 400);
    }
  } catch (error) {
    res.status(400).json({
      status: error.status,
      message: error.message,
    });
  }
};

export const updateComment = async (req, res) => {
 try {
  if (req.params.id) {
   const comment = await Comments.update(req.body, {
    where: {
     id: req.params.id,
    },
   });
   if (comment) {
    return comment;
    // new AppResponse('success', '...', { comment }, 200).send(res);
   } else {
    throw new AppError('failed', '...', 400);
   }
  } else {
   throw new AppError('failed', '...', 400);
  }
 } catch (error) {
  res.status(400).json({
   status: error.status,
   message: error.message,
  });
 }
};

export const deleteComment = async (req, res) => {
 try {
  if (req.params.id) {
   const comment = await Comments.destroy({
    where: {
     id: req.params.id,
    },
   });
   if (comment) {
    return comment;
    // new AppResponse('success', '...', { comment }, 200).send(res);
   } else {
    throw new AppError('failed', '...', 400);
   }
  } else {
   throw new AppError('failed', '...', 400);
  }
 } catch (error) {
  res.status(400).json({
   status: error.status,
   message: error.message,
  });
 }
};
