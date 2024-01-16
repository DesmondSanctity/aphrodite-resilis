import { Router } from "express";

import * as postController from "../controllers/postControllers.js";

const postRouter = Router();

/** POST Methods */

/**
 * @openapi
 * '/api/v1/posts':
 *  post:
 *     tags:
 *     - Post Controller
 *     summary: Create a new post
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - title
 *              - description
 *              - body
 *              - userId
 *            properties:
 *              title:
 *                type: string
 *                default: New Post
 *              description:
 *                type: string
 *                default: this is a new post for today
 *              body:
 *                type: string
 *                default: ''
 *              userId:
 *                type: string
 *                default: ''
 *     responses:
 *      201:
 *        description: Created Successfully
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
postRouter.route('/').post(postController.create)

/** GET Methods */

/**
 * @openapi
 * '/api/v1/posts':
 *  get:
 *     tags:
 *     - Post Controller
 *     summary: Get all the posts in database
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
postRouter.route("/").get(postController.getAll);

/**
 * @openapi
 * '/api/v1/posts/{userId}':
 *  get:
 *     tags:
 *     - Post Controller
 *     summary: Get all the posts for an author
 *     parameters:
 *      - name: userId
 *        in: path
 *        description: The author's userId
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
postRouter.route("/:userId").get(postController.getAllByUser);

/**
 * @openapi
 * '/api/v1/posts/{id}':
 *  get:
 *     tags:
 *     - Post Controller
 *     summary: Get a post by ID
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The post ID
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
postRouter.route("/:id").get(postController.getOne);


export default postRouter;
