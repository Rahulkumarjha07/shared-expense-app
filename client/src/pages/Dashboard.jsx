import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

function Dashboard() {

  const [groupCount, setGroupCount] = useState(0);

  const loadData = async () => {
    try {
      const res = await API.get("/groups");
      setGroupCount(res.data.length);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Layout>

      <h2>Dashboard</h2>

      <div className="row mt-4">

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Total Groups</h5>
            <h2>{groupCount}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Total Expenses</h5>
            <h2>--</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Outstanding Balance</h5>
            <h2>--</h2>
          </div>
        </div>

      </div>

    </Layout>
  );
}

export default Dashboard;