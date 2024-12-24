export function KeepCommentBtn({ onCancel }) {
  return (
    <button className="no_btn" onClick={() => onCancel(null)}>
      NO , CANCEL
    </button>
  );
}
