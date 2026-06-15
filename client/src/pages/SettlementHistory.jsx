import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

function SettlementHistory() {

  const [history, setHistory] = useState([]);

  const loadHistory = async () => {

    try {

      const res = await API.get("/settlement/history");

      setHistory(res.data);

    } catch (err) {

      console.log(err);

      // Temporary data for demo
      setHistory([
        {
          id: 1,
          from: "Rahul",
          to: "Aisha",
          amount: 500,
          date: "2026-06-15"
        },
        {
          id: 2,
          from: "Priya",
          to: "Rohan",
          amount: 250,
          date: "2026-06-16"
        }
      ]);

    }

  };

  useEffect(() => {

    loadHistory();

  }, []);

  return (

    <Layout>

      <h2 className="mb-4">
        📜 Settlement History
      </h2>

      <table className="table table-bordered">

        <thead>

          <tr>

            <th>ID</th>

            <th>From</th>

            <th>To</th>

            <th>Amount</th>

            <th>Date</th>

          </tr>

        </thead>

        <tbody>

          {history.length === 0 ? (

            <tr>

              <td
                colSpan="5"
                className="text-center"
              >
                No Records Found
              </td>

            </tr>

          ) : (

            history.map((h) => (

              <tr key={h.id}>

                <td>{h.id}</td>

                <td>{h.from}</td>

                <td>{h.to}</td>

                <td>₹{h.amount}</td>

                <td>{h.date}</td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </Layout>

  );

}

export default SettlementHistory;