import { useState, useEffect } from "react";
import { db, auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import {
  doc,
  onSnapshot,
  collection,
  query,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import AddNote from "../../components/AddNote/AddNote";
import Modal from "../../components/Modal/Modal";
import spinner from "../../assets/spinner.gif";

import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";

import "./posts.css";

const Posts = ({ isAuth }) => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteNoteId, setDeleteNoteId] = useState(null);
  const [editNote, setEditNote] = useState(null);

  // collection reference
  const collectionRef = collection(db, "notes");

  //access all notes from firestore
  useEffect(() => {
    const q = query(collectionRef, orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(newData);
      setIsLoading(false);
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

  // edit note on delete btn click
  const handleEdit = (note) => {
    setEditNote(note);
  };

  //Prevent unauthenticated users from accessing the posts page
  let navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, []);

  return (
    <div className="wrapper">
      <AddNote
        collectionRef={collectionRef}
        editNote={editNote}
        setEditNote={setEditNote}
      />
      <div className="notes">
        <h2 className="notes-title">Notes</h2>
        <hr />
        {isLoading ? (
          <img className="spinner" src={spinner} />
        ) : (
          <div className="notes-wrapper">
            {notes.map(
              (note) =>
                isAuth &&
                auth.currentUser &&
                note.user_id === auth.currentUser.uid && (
                  <div key={note.id} className="note">
                    <h3>{note.title}</h3>
                    <p>{note.text}</p>
                    <div className="note-btns">
                      <button
                        className="delete__button"
                        onClick={() => setDeleteNoteId(note.id)}
                      >
                        delete <RiDeleteBin7Line />
                      </button>
                      <button
                        className="edit__button"
                        onClick={() => handleEdit(note)}
                      >
                        edit <FiEdit />
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </div>
      {deleteNoteId && (
        <Modal handleDelete={handleDelete} setDeleteNoteId={setDeleteNoteId} />
      )}
    </div>
  );
};

export default Posts;
