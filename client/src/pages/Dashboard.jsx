import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

function Dashboard() {

  const [stats, setStats] = useState({

    totalGroups: 0,
    totalExpenses: 0,
    totalExpense: 0

  });

  const loadStats = async () => {

    try {

      const res = await API.get("/dashboard");

      setStats(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  useEffect(() => {

    loadStats();

  }, []);

  return (

    <Layout>

      <h1 className="mb-4">
        📊 Dashboard
      </h1>

      <div className="row">

        <div className="col-md-4">

          <div className="card shadow p-4">

            <h5>Total Groups</h5>

            <h2>
              👥 {stats.totalGroups}
            </h2>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow p-4">

            <h5>Total Expenses</h5>

            <h2>
              💸 {stats.totalExpenses}
            </h2>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow p-4">

            <h5>Total Amount</h5>

            <h2>
              💰 ₹{stats.totalExpense}
            </h2>

          </div>

        </div>

      </div>

    </Layout>

  );

}

export default Dashboard;