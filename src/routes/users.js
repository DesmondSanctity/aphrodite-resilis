import { Router } from 'express';

import * as userController from '../controllers/userControllers.js';

const userRouter = Router();

/** GET Methods */

/**
 * @openapi
 * '/api/v1/users':
 *  get:
 *     tags:
 *     - User Controller
 *     summary: Get all the user's accounts in the model
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
userRouter.route('/').get(userController.getAll);

/**
 * @openapi
 * '/api/v1/users/{id}':
 *  get:
 *     tags:
 *     - User Controller
 *     summary: Get user account by ID
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The user account ID
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
userRouter.route('/:id').get(userController.getOne);

/** PUT Methods */

/**
 * @openapi
 * '/api/v1/users/{id}':
 *  put:
 *     tags:
 *     - User Controller
 *     summary: Update a user by ID
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The user ID
 *        required: true
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - phone
 *            properties:
 *              name:
 *                type: string
 *                default: Doe John
 *              email:
 *                type: string
 *                default: doejohn@mail.com
 *              phone:
 *                type: string
 *                default: 0987654321
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
userRouter.route('/:id').get(userController.updateOne);

/** DELETE Methods */

/**
 * @openapi
 * '/api/v1/users/{id}':
 *  delete:
 *     tags:
 *     - User Controller
 *     summary: Delete a user by ID
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The user ID
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
userRouter.route('/:id').get(userController.deleteOne);

export default userRouter;
