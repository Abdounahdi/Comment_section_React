export function AddComment({ currentUser, onAddComment }) {
  function handleAddComment(commentContent) {
    console.log(commentContent);
  }

  let commentContent;

  return (
    <div className="add__comment">
      <div className="add_comment input">
        <img src={currentUser.image.png} alt="profile pic"></img>
        <textarea
          name="input"
          className="input_comment"
          placeholder="Add a comment..."
          onChange={(e) => (commentContent = e.value)}
        ></textarea>
        <button
          className="send_comment-btn"
          onClick={(e) => handleAddComment(commentContent)}
        >
          SEND
        </button>
      </div>
    </div>
  );
}
