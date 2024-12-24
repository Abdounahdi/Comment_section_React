export function EditCommentBtn({ onEdit, id, currentId, checkUpdate }) {
  // function handleUpdateComment(newContent) {
  //   console.log(newContent)
  //   updateComment((comments) =>
  //     comments.map((comment) => {
  //       if (comment.id === currentId) {
  //         return { ...comment, content: newContent };
  //       } else {
  //         let newReplies = comment.replies.map((reply) => {
  //           if (reply.id === currentId) {
  //             return { ...reply, content: newContent };
  //           } else {
  //             return reply;
  //           }
  //         });
  //         return { ...comment, replies: newReplies };
  //       }
  //     })
  //   );
  //   onEdit(null);
  // }

  return !(id === currentId) ? (
    <button className="btn edit_btn " onClick={() => onEdit(currentId)}>
      <svg className="edit-svg" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
          fill="#5357B6"
        />
      </svg>
      Edit
    </button>
  ) : (
    <button
      className="sumbit_btn"
      // onClick={() => handleUpdateComment(newContent)}
      onClick={() => (checkUpdate ? onEdit(null) : "")}
    >
      UPDATE
    </button>
  );
}

export function DeleteCommentBtn({ id, onDeleteComment, closeModal }) {
  function handleDeleteComment(id) {
    closeModal(null);
    onDeleteComment((comments) =>
      // comments.filter((comment) => {
      //   if (comment.id !== id) {
      //     let newReplies = comment.replies.filter((reply) => reply.id !== id);
      //     return { ...comment, replies: newReplies };
      //   } else {
      //   }
      // })
      comments.filter((comment) => comment.id !== id)
    );
    onDeleteComment((comments) =>
      comments.map((comment) => {
        return {
          ...comment,
          replies: comment.replies.filter((reply) => reply.id !== id),
        };
      })
    );
  }

  return (
    <button className="yes_btn" onClick={() => handleDeleteComment(id)}>
      YES , DELETE
    </button>
  );
}
