import { type } from "express/lib/response";
import { model, Model, models, Schema } from "mongoose";

const CommentSchema = new Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  postId: { type: Number, required: true },
});

const Comment = models.Comment || model("Comment", CommentSchema);

export default Comment;
