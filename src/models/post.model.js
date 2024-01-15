import { Sequelize } from "sequelize";
import db from "../database/connect.js";

const { DataTypes } = Sequelize;

const Posts = db.define('posts', {
    postId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

}, {
    freezeTableName: true,
});


export default Posts;