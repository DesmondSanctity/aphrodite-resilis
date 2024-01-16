import db from "../database/connect.js";
import Users from "./user.model.js";
import Posts from "./post.model.js";
import Comments from "./comment.model.js";

// User and Post Association
Users.hasMany(Posts, {
  foreignKey: "userId",
  onDelete: "SET NULL",
});
Posts.belongsTo(Users, {
  foreignKey: "userId",
  onDelete: "SET NULL",
});

// Post and Comment Association
Posts.hasMany(Comments, {
  foreignKey: "postId",
  onDelete: "SET NULL",
});
Comments.belongsTo(Posts, {
  foreignKey: "postId",
  onDelete: "SET NULL",
});

// User and Comment Association
Users.hasMany(Comments, {
  foreignKey: "userId",
  onDelete: "SET NULL",
});
Comments.belongsTo(Users, {
  foreignKey: "userId",
  onDelete: "SET NULL",
});

try {
  await db
    // .sync({ alter: true })
    .sync()
    .then(() => {
      console.log("Database synced");
      console.log("Database connection has been established successfully.");
    })
    .catch((err) => {
      console.log({ message: "Error syncing database", error: err });
    });
} catch (error) {
  console.log("Unable to connect to the database due to: ", error);
}

export { Users, Posts, Comments };
