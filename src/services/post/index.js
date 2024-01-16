import { Comments, Posts, Users } from "../../models/index.js";
import { getPagination } from "../../utils/paginateQuery.js";
import { AppError } from "../../utils/responseHandler.js";

export const createPost = async (req, res) => {
  try {
    const { title, description, body, author } = req.body;

    const post = await Posts.create({
      title,
      description,
      body,
      userId: author,
    });

    if (post) {
      return post;
      // new AppResponse('success', '...', { post }, 200).send(res);
    } else {
      throw new AppError("failed", "Failed to create post, try again", 400);
    }
  } catch (error) {
    res.status(400).json({
      status: error.status,
      message: error.message,
    });
  }
};

export const getPosts = async (req, res) => {
  try {
    const results = getPagination(Posts, {
      ...req.query,
      include: [
        {
          model: Users,
          required: false,
          attributes: {
            exclude: ["password"],
          },
        },
        {
          model: Comments,
          attributes: ["id", "body", "createdAt"],
          include: [
            {
              model: Users,
              required: false,
              attributes: {
                exclude: ["password"],
              },
            },
          ],
        },
      ],
      where: {},
      order: [],
    });

    if (results) {
      return results;
      // new AppResponse('success', '...', { post }, 200).send(res);
    } else {
      throw new AppError("failed", "Failed to fetch posts", 400);
    }
  } catch (error) {
    res.status(400).json({
      status: error.status,
      message: error.message,
    });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const results = getPagination(Posts, {
      ...req.query,
      include: [
        {
          model: Users,
          required: false,
          attributes: {
            exclude: ["password"],
          },
        },
        {
          model: Comments,
          attributes: ["id", "body", "createdAt"],
          include: [
            {
              model: Users,
              required: false,
              attributes: {
                exclude: ["password"],
              },
            },
          ],
        },
      ],
      where: { userId: req.params.userId },
      order: [],
    });

    if (results) {
      return results;
      // new AppResponse('success', '...', { post }, 200).send(res);
    } else {
      throw new AppError("failed", "Failed to fetch author's posts", 400);
    }
  } catch (error) {
    res.status(400).json({
      status: error.status,
      message: error.message,
    });
  }
};

export const getPost = async (req, res) => {
  try {
    if (req.params.id) {
      const post = await Posts.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: Users,
            required: false,
            attributes: {
              exclude: ["password"],
            },
          },
          {
            model: Comments,
            attributes: ["id", "body", "createdAt"],
            include: [
              {
                model: Users,
                required: false,
                attributes: {
                  exclude: ["password"],
                },
              },
            ],
          },
        ],
      });

      if (post) {
        return post;
        // new AppResponse('success', '...', { post }, 200).send(res);
      } else {
        throw new AppError("failed", "Failed to fetch post", 400);
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
