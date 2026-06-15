import Layout from "../components/Layout";

function Dashboard() {

  return (

    <Layout>

      <h1 className="mb-4">
        📊 Dashboard
      </h1>

      <div className="row">

        <div className="col-md-4">

          <div className="card shadow p-4">

            <h5>Total Groups</h5>

            <h2>👥</h2>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow p-4">

            <h5>Total Expenses</h5>

            <h2>💸</h2>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow p-4">

            <h5>Balance</h5>

            <h2>💰</h2>

          </div>

        </div>

      </div>

    </Layout>

  );

}

export default Dashboard;