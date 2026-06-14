import { Link } from "react-router-dom";


const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};

function Layout({ children }) {
  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-2 bg-dark text-white vh-100 p-3">

          <h3>💰 SplitWise</h3>

          <hr />

          <Link className="btn btn-outline-light w-100 mb-2" to="/dashboard">
            Dashboard
          </Link>

          <Link className="btn btn-outline-light w-100 mb-2" to="/groups">
            Groups
          </Link>

          <Link className="btn btn-outline-light w-100 mb-2" to="/members">
            Members
          </Link>

          <Link className="btn btn-outline-light w-100 mb-2" to="/expenses">
            Expenses
          </Link>

          <Link className="btn btn-outline-light w-100 mb-2" to="/balance">
            Balance
          </Link>

          <Link className="btn btn-outline-light w-100" to="/settlement">
            Settlement
          </Link>

        </div>

        <div className="col-10 p-4">
          {children}
        </div>

      </div>
    </div>
  );
}

export default Layout;