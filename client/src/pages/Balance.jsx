import { useEffect, useState } from "react";
import API from "../services/api";
import Layout from "../components/Layout";

function Balance() {

  const [balances, setBalances] = useState([]);

  const loadBalances = async () => {
    try {
      const res = await API.get("/balance/1");
      setBalances(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadBalances();
  }, []);

  return (
    <Layout>

      <h2>Balance Summary</h2>

      <table className="table table-bordered mt-3">

        <thead>
          <tr>
            <th>User</th>
            <th>Paid</th>
            <th>Owes</th>
            <th>Net Balance</th>
          </tr>
        </thead>

        <tbody>

          {Array.isArray(balances) &&
            balances.map((b, index) => (
              <tr key={index}>
                <td>{b.name}</td>
                <td>₹{b.total_paid}</td>
                <td>₹{b.total_share}</td>
                <td>
                  <strong>
                    ₹{Number(b.total_paid) - Number(b.total_share)}
                  </strong>
                </td>
              </tr>
            ))}

        </tbody>

      </table>

    </Layout>
  );
}

export default Balance;