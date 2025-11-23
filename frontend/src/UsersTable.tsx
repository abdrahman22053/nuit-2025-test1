import "./UsersTable.css";

function UsersTable() {
  const users = [
    { name: "John Doe", email: "john.doe@example.com", role: "Administrator" },
    { name: "Jane Smith", email: "jane.smith@example.com", role: "Editor" },
    { name: "Alex Johnson", email: "alex.johnson@member", role: "Member" },
    { name: "Emily Davis", email: "emily.davis@member", role: "Member" },
  ];

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2 className="sidebar-title">Navbar</h2>
        <ul className="sidebar-menu">
          <li className="active">Dashboard</li>
          <li>Projects</li>
          <li>Reports</li>
        </ul>
      </aside>

      <main className="main">
        <header className="topnav">
          <a href="#">Home</a>
          <a href="#">About</a>
        </header>

        <div className="controls">
          <input className="search" placeholder="Search" />
          <button className="add-btn">Add</button>
        </div>

        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th style={{ textAlign: "center" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td className="actions">
                  <span className="icon">✏</span>
                  <span className="icon">👁</span>
                  <span className="icon">🗑</span>
                  <span className="icon">⋮</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default UsersTable;