export function AddComment({ currentUser }) {
  return (
    <div className="add__comment">
      <div className="add_comment input">
        <img src={currentUser.image.png} alt="profile pic"></img>
        <textarea
          name="input"
          className="input_comment"
          placeholder="Add a comment..."
        ></textarea>
        <button className="send_comment-btn">SEND</button>
      </div>
    </div>
  );
}
