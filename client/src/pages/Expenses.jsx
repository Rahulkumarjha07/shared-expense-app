import { useState, useEffect } from "react";
import API from "../services/api";
import Layout from "../components/Layout";

function Expenses() {

  const [expenses, setExpenses] = useState([]);

  const loadExpenses = async () => {
    try {
      const res = await API.get("/expenses/group/1");
      setExpenses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const removeExpense = async (id) => {
    try {
      await API.delete(`/expenses/${id}`);
      loadExpenses();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  return (
    <Layout>

      <h2>Expenses</h2>

      <table className="table table-bordered mt-3">

        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Paid By</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {expenses.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.title}</td>
              <td>₹{e.amount}</td>
              <td>{e.paid_by_name}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeExpense(e.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </Layout>
  );
}

export default Expenses;