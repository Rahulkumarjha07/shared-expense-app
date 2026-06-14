function Settlement() {

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🤝 Settlement Page</h1>

      <button
        className="btn btn-danger mt-3"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

export default Settlement;