import type { NextApiRequest } from "next";
import { connectDB } from "../../../utils/connetDB";

import Comment from "../../../models/comment-model";

export const GET = async (req: NextApiRequest) => {
  try {
    await connectDB();
    const comments = await Comment.find({});
    return new Response(JSON.stringify(comments), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all comments", { status: 500 });
  }
};
