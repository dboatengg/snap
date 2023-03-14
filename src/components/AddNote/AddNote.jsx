import { useState, useEffect } from "react";
import { serverTimestamp, addDoc, updateDoc, doc } from "firebase/firestore";
import { auth } from "../../firebase-config";

import "./addnote.css";

const AddNote = ({ collectionRef, editNote, setEditNote }) => {
  const [formData, setFormData] = useState({ title: "", text: "" });

  // populate form fields with the editNote data when editNote prop changes
  useEffect(() => {
    if (editNote) {
      setFormData({ title: editNote.title, text: editNote.text });
    }
  }, [editNote]);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editNote) {
        const docRef = doc(collectionRef, editNote.id);
        await updateDoc(docRef, {
          title: formData.title,
          text: formData.text,
        });
        setEditNote(null);
      } else {
        await addDoc(collectionRef, {
          title: formData.title,
          text: formData.text,
          createdAt: serverTimestamp(),
          user_id: auth.currentUser.uid,
        });
      }
      setFormData({ title: "", text: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="title">
        <p>Title</p>
        <input
          type="text"
          name="title"
          className="title"
          value={formData.title}
          onChange={handleChange}
          required
          placeholder="Note title here ..."
        />
      </label>
      <label htmlFor="text">
        <p>Text</p>
        <textarea
          name="text"
          id="text"
          className="text"
          value={formData.text}
          required
          onChange={handleChange}
          maxLength="200"
          placeholder="Write a maximum of 200 characters..."
        ></textarea>
      </label>
      <button className="btn-add">
        {editNote ? "Update note" : "Add note"}
      </button>
    </form>
  );
};

export default AddNote;
