"use client";
import { blogs, comments } from "@/components/data";
import { NavBar } from "@/components/navbar";
import Image from "next/image";
import { useParams } from "next/navigation";
import "./style.scss";
import { FormEvent, useEffect, useState } from "react";
import { CiCircleCheck } from "react-icons/ci";

type CommentType = {
  name: string;
  comment: string;
  postId: number;
};

export default function Blog() {
  const [commentDetails, setCommentDetails] = useState({
    input_name: "",
    input_comment: "",
  });
  const [isActive, setIsActive] = useState(false);
  const [commentsIsActive, setCommentsIsActive] = useState(false);
  const [postComments, setPostComments] = useState<CommentType[]>([]);
  const { blogId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const openModal = () => setIsActive(true);
  const closeModal = () => {
    setIsActive(false);
    setCommentDetails({ ...commentDetails, input_comment: "", input_name: "" });
  };

  // Get all comment for the blog
  const getComments = async () => {
    try {
      const response = await fetch("/api/comments");
      const data = await response.json();

      const filteredComments = data.filter(
        (i: CommentType) => i.postId === Number(blogId)
      );
      setPostComments(filteredComments);
    } catch (error) {
      console.log(error);
    }
  };

  // Post comment
  const postComment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("/api/new-comment", {
      method: "POST",
      body: JSON.stringify({
        name: commentDetails.input_name,
        comment: commentDetails.input_comment,
        postId: Number(blogId),
      }),
    });

    if (response.status !== 200) {
      alert(
        "Unknown error ocuured: Make sure you fill in all  field.\n If error persist pls reload page"
      );
      return setIsLoading(false);
    }

    getComments();
    setIsLoading(false);
    closeModal();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <NavBar routeLink="blogs" routeName="blogs" />

      <div className="blog_container">
        <div className="container">
          {blogs.map((i, key) => {
            if (i.id.toString() === blogId)
              return (
                <div className="wrapper" key={key}>
                  <div className="blog_section">
                    <h3>{i.title}</h3>
                    <div className="img_con">
                      <Image src={i.image} alt="image" />
                    </div>
                    <div
                      className="txt"
                      dangerouslySetInnerHTML={{ __html: i.desc }}
                    ></div>

                    <div
                      className="view_btn"
                      onClick={() => setCommentsIsActive(true)}
                    >
                      <button>view comments</button>
                    </div>
                  </div>

                  <div
                    className={
                      commentsIsActive
                        ? "comment_section active"
                        : "comment_section"
                    }
                  >
                    <h5 className="title">comments</h5>
                    <div className="main_warpper">
                      <div className="comment_wrapper">
                        {postComments.length !== 0 ? (
                          postComments.map((i, key) => {
                            return (
                              <div className="comment_box" key={key}>
                                <h6>- {i.name}</h6>
                                <p>{i.comment}</p>
                                <p>red</p>
                              </div>
                            );
                          })
                        ) : (
                          <h6 className="no_comment">no comments </h6>
                        )}
                      </div>

                      <div className="comment_input_box">
                        <div
                          onClick={() => {
                            openModal();
                            setCommentsIsActive(false);
                          }}
                          className="placeHolder_input"
                        >
                          <span>write your comment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
      </div>

      <form
        onSubmit={postComment}
        className={isActive ? "main_input_con active" : "main_input_con"}
      >
        <h3>write your comment</h3>
        <div className="input_con">
          <input
            type="text"
            placeholder="your name"
            value={commentDetails.input_name}
            onChange={(e) => {
              setCommentDetails({
                ...commentDetails,
                input_name: e.target.value,
              });
            }}
            required
          />
        </div>

        <div className="input_con">
          <textarea
            placeholder="your comment"
            value={commentDetails.input_comment}
            onChange={(e) => {
              setCommentDetails({
                ...commentDetails,
                input_comment: e.target.value,
              });
            }}
            required
          ></textarea>
        </div>

        <div className="btn">
          <button onClick={closeModal}>cancel</button>
          <button type="submit" disabled={isLoading ? true : false}>
            {isLoading ? "loading..." : "comment"}
          </button>
        </div>
      </form>

      <div
        onClick={() => {
          closeModal();
          setCommentsIsActive(false);
        }}
        className={isActive || commentsIsActive ? "overlay active" : "overlay"}
      ></div>

      <div className={success ? "success_msg active" : "success_msg "}>
        <p>
          {" "}
          <span>
            <CiCircleCheck />
          </span>
          Your comment was successful
        </p>
      </div>
    </>
  );
}
