import { useEffect, useState } from "react";
import axios from "axios";
import AddPassword from "../components/AddPassword";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState({});

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/passwords", {
      headers: { Authorization: localStorage.getItem("token") }
    });
    setData(res.data);
  };

  const togglePassword = (id) => {
    setVisible(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const deletePassword = async (id) => {
    await axios.delete(`http://localhost:5000/api/passwords/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    });
    fetchData();
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="top-bar">
        <h1>Your Passwords</h1>
        <button onClick={logout}>Logout</button>
      </div>

      <AddPassword refresh={fetchData} />

      <div className="card-grid">
        {data.map(p => (
          <div className="card" key={p._id}>
            <h3>{p.title}</h3>
            <p>{p.username}</p>

            <p>
              {visible[p._id] ? p.password : "••••••••"}
            </p>

            <div className="card-actions">
              <button onClick={() => togglePassword(p._id)}>
                👁
              </button>

              <button onClick={() => deletePassword(p._id)}>
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}