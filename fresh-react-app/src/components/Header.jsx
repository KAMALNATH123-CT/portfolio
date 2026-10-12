function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div>
        <h1>Task Manager</h1>
        <p>Manage your daily tasks easily</p>
      </div>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}

export default Header;