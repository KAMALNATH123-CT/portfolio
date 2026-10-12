function Profile({ user }) {
  const { name, email, role } = user || {};

  return (
    <section className="profile">
      <div>
        <h2>Welcome, {name || "User"}! 👋</h2>
        <p>Let's manage your tasks today.</p>

        {user && (
          <small>
            {email} • {role}
          </small>
        )}
      </div>
    </section>
  );
}

export default Profile;