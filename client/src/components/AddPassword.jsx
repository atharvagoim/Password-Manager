import { useState } from "react";
import axios from "axios";

export default function AddPassword({ refresh }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const add = async () => {
    await axios.post(
      "http://localhost:5000/api/passwords",
      { title, username, password },
      { headers: { Authorization: localStorage.getItem("token") } }
    );

    setTitle("");
    setUsername("");
    setPassword("");
    setOpen(false);
    refresh();
  };

  return (
    <>
      {/* TOP LEFT BUTTON */}
      <button className="add-btn" onClick={() => setOpen(true)}>
        + Add Password
      </button>

      {/* MODAL */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
  <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>Add Password</h2>

            <input
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <input
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <div className="modal-actions">
              <button onClick={add}>Save</button>
              <button onClick={() => setOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}