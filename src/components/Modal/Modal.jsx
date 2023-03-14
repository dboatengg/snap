import "./modal.css";

const Modal = ({ handleDelete, setDeleteNoteId }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Confirm delete</h2>
        <p>Are you sure you want to delete this note?</p>
        <div className="modal-btns">
          <button className="modal-btn" onClick={() => setDeleteNoteId(null)}>
            Cancel
          </button>
          <button className="modal-btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
