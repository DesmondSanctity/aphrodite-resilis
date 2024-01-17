import { Router } from "express";

import * as commentController from "../controllers/commentControllers.js";

const commentRouter = Router();

/** POST Methods */

/**
 * @openapi
 * '/api/v1/comments':
 *  post:
 *     tags:
 *     - Comment Controller
 *     summary: Create a post comment
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - body
 *              - post
 *              - author
 *            properties:
 *              body:
 *                type: string
 *                default: this is a new comment
 *              post:
 *                type: string
 *                default: ''
 *              author:
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
commentRouter.route('/').post(commentController.create)

/** GET Methods */

/**
 * @openapi
 * '/api/v1/comments/{postId}':
 *  get:
 *     tags:
 *     - Comment Controller
 *     summary: Get all the comments for a post
 *     parameters:
 *      - name: postId
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
commentRouter.route("/:postId").get(commentController.getAllByPost);

/**
 * @openapi
 * '/api/v1/comments/{id}':
 *  get:
 *     tags:
 *     - Comment Controller
 *     summary: Get a comment by ID
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The comment ID
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
commentRouter.route("/:id").get(commentController.getOne);


export default commentRouter;
