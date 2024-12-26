import { useState } from "react";

export function AddComment({
  currentUser,
  onAddComment,
  isReply = false,
  commentId,
  onAdded,
  replyTo,
}) {
  const [commentContent, setCommentContent] = useState("");

  function handleAddComment(commentContent) {
    if (commentContent && commentContent.trim().length !== 0) {
      if (!isReply) {
        onAddComment((comments) => [
          ...comments,
          {
            id: Date.now(),
            content: commentContent.trim(),
            createdAt: dateNowFormated(),
            score: 0,
            user: currentUser,
            replies: [],
          },
        ]);
      } else {
        onAddComment((comments) =>
          comments.map((comment) => {
            if (comment.id === commentId) {
              return {
                ...comment,
                replies: [
                  ...comment.replies,
                  {
                    id: Date.now(),
                    content: commentContent.trim(),
                    createdAt: dateNowFormated(),
                    score: 0,
                    user: currentUser,
                  },
                ],
              };
            } else {
              return { ...comment };
            }
          })
        );
        onAdded(null);
      }
      setCommentContent("");
    }
  }

  return (
    <div className="add__comment">
      <div className="add_comment input">
        <img src={currentUser.image.png} alt="profile pic"></img>
        <textarea
          name="input"
          className="input_comment"
          placeholder={isReply ? `Reply to ${replyTo}...` : `Add a comment...`}
          onChange={(e) => {
            setCommentContent(e.target.value);
          }}
          value={commentContent}
        ></textarea>
        <button
          className="send_comment-btn"
          onClick={(e) => handleAddComment(commentContent)}
        >
          {isReply ? `REPLY` : `SEND`}
        </button>
      </div>
    </div>
  );
}

function dateNowFormated() {
  return `Today at ${new Date()
    .getHours()
    .toString()
    .padStart(2, "0")}:${new Date().getMinutes().toString().padEnd(2, "0")}`;
}
