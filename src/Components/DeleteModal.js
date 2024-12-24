export function OpenDeleteModalBtn({ onDelete, id }) {
  return (
    <button className="btn delete_btn" onClick={() => onDelete(id)}>
      <svg className="delete-svg" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
          fill="#ED6368"
        />
      </svg>
      Delete
    </button>
  );
}

export function DeleteModal({ children }) {
  return (
    <>
      <div className="delete_modal-container">
        <div className="delete-modal ">
          <div className="delete-modal--inner">
            <p className="delete_modal-heading">Delete Comment</p>
            <p className="delete_modal-text">
              Are you sure you want to delete this comment ? This will remove
              the comment and can't be undone.
            </p>
          </div>
          <div className="delete_btns-container">{children}</div>
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
}
