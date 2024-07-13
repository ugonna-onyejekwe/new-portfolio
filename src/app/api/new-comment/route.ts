import Comment from "@/models/comment-model";
import { connectDB } from "@/utils/connetDB";

export const POST = async (req: any) => {
  const { name, comment, postId } = await req.json();

  try {
    await connectDB();
    const newComment = await Comment.create({ name, comment, postId });
    await newComment.save();

    return new Response(JSON.stringify({ message: "comment created" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to create comment" }),
      {
        status: 500,
      }
    );
  }
};
