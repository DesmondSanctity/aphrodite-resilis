import { Sequelize } from "sequelize";
import db from "../database/connect.js";

const { DataTypes } = Sequelize;

const Comments = db.define('comments', {
    commentId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

}, {
    freezeTableName: true,
});


export default Comments;