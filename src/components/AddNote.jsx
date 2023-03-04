import { useState } from "react";
import { serverTimestamp, addDoc, updateDoc, doc } from "firebase/firestore";
import { auth } from "../firebase-config";

const AddNote = ({ collectionRef }) => {
  // const [formData, setFormData] = useState({ title: "", text: "" });
  const [formData, setFormData] = useState({ title: "", text: "" });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collectionRef, {
        title: formData.title,
        text: formData.text,
        createdAt: serverTimestamp(),
        user_id: auth.currentUser.uid,
      });
      event.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     if (editNote) {
  //       await updateDoc(doc(collectionRef, editNote.id), {
  //         title: formData.title,
  //         text: formData.text,
  //       });
  //       setEditNote(null);
  //     } else {
  //       await addDoc(collectionRef, {
  //         title: formData.title,
  //         text: formData.text,
  //         createdAt: serverTimestamp(),
  //         user_id: auth.currentUser.uid,
  //       });
  //     }
  //     event.target.reset();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        <p>Title</p>
        <input
          type="text"
          name="title"
          className="title"
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="text">
        <p>Text</p>
        <textarea
          name="text"
          id="text"
          className="text"
          required
          onChange={handleChange}
        ></textarea>
      </label>
      <button className="btn-add">
        {/* {editNote ? "Update note" : "Add note"} */}
        Add note
      </button>
    </form>
  );
};

export default AddNote;