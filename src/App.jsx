import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  doc,
  onSnapshot,
  collection,
  query,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import Add from "./components/Add";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [deleteNoteId, setDeleteNoteId] = useState(null);

  // collection reference
  const collectionRef = collection(db, "notes");

  //get all notes from firestore
  useEffect(() => {
    const q = query(collectionRef, orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(newData);
      console.log(newData);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // delete note on delete btn click
  const handleDelete = async () => {
    try {
      if (deleteNoteId) {
        await deleteDoc(doc(collectionRef, deleteNoteId));
        setDeleteNoteId(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="wrapper">
      <Add collectionRef={collectionRef} />
      <div className="notes">
        <h2 className="notes-title">Notes</h2>
        <hr />
        <div className="notes-wrapper">
          {notes.map((note) => (
            <div key={note.id} className="note">
              <h3>{note.title}</h3>
              <p>{note.text}</p>
              <div className="note-btns">
                <button onClick={() => setDeleteNoteId(note.id)}>delete</button>
                <button>edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* display modal to let users confirm deleting a note  */}
      {deleteNoteId && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirm delete</h2>
            <p>Are you sure you want to delete this note?</p>
            <div className="modal-btns">
              <button
                className="modal-btn"
                onClick={() => setDeleteNoteId(null)}
              >
                Cancel
              </button>
              <button className="modal-btn" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
