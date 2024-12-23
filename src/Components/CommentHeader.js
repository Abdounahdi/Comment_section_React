export function CommentHeader({ comment, currentUser, children }) {
  return (
    <div className="comment_inner-header">
      <div className="comment_inner-details">
        <img src={comment.user.image.png} alt="profile pic" />
        <p className="comment_username">{comment.user.username}</p>
        {comment.user.username === currentUser.username ? (
          <p className="current_user-endicator">you</p>
        ) : (
          ""
        )}
        <p className="comment_time">{comment.createdAt}</p>
      </div>
      {children}
    </div>
  );
}
