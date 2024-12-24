export function CommentContent({
  comment,
  id,
  isReply = false,
  updateComment,
  username,
  setCheck,
}) {
  let text = comment.content;
  return !(id === comment.id) ? (
    <p className="comment_text">
      {isReply ? <span className="reply_tag"> @ {username} </span> : ""}
      {comment.content}
    </p>
  ) : (
    <textarea
      name="input"
      className="input_comment"
      placeholder="Add a comment..."
      defaultValue={text}
      onChange={(e) => {
        text = e.target.value.trim().length !== 0 ? e.target.value : "";
        setCheck(text !== "");
        updateComment((comments) =>
          comments.map((Comment) => {
            if (Comment.id === comment.id) {
              return { ...Comment, content: text.trim() };
            } else {
              return {
                ...Comment,
                replies: Comment.replies.map((reply) => {
                  if (reply.id === id) {
                    return { ...reply, content: text.trim() };
                  } else {
                    return reply;
                  }
                }),
              };
            }
          })
        );
        // console.log(updatedContent);
      }}
    />
    //   {comment.content}
    // </textarea>
  );
}
