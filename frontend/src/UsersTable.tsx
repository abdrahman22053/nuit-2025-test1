
import "./UsersTable.css";
import { FaEdit, FaEye, FaTrash, FaEllipsisV } from "react-icons/fa";
import {FaSearch, FaTable, FaFolder, FaChartBar } from "react-icons/fa";

export default function UserTable() {
  const users = [
    { name: "John Doe", email: "john.doe@example.com", role: "Administrator" },
    { name: "Jane Smith", email: "john.doe@example.com", role: "Editor" },
    { name: "Alex Johnson", email: "alex johnson@member", role: "Member" },
    { name: "Emily Davis", email: "emily.davis@member", role: "Member" },
  ];

  return (
    <div className="page-container">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Navbar</h2>

        <ul className="menu">
          <li className="active">
            <FaTable className="icon" /> Dashboard
          </li>
          <li>
            <FaFolder className="icon" /> Projects
          </li>
          <li>
            <FaChartBar className="icon" /> Reports
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <section className="content">

        {/* Top Navbar */}
        <div className="topbar">
          <div></div>
          <div className="top-links">
            <a href="/">Home</a>
            <a href="/">About</a>
          </div>
        </div>

        {/* Search + Add */}
        <div className="search-add">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>

          <button className="btn-add">Add</button>
        </div>

        {/* Table */}
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td className="actions">
                  <FaEdit className="action-icon" />
                  <FaEye className="action-icon" />
                  <FaTrash className="action-icon" />
                  <FaEllipsisV className="action-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </section>
    </div>
  );
}
