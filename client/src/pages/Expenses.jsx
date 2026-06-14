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

  // Moved the edit logic to its own function for better readability
  const handleEdit = async (expense) => {
    const title = prompt("New Title", expense.title);
    const amount = prompt("New Amount", expense.amount);

    // Prevent API call if user cancels the prompt
    if (title === null || amount === null) return;

    try {
      await API.put(`/expenses/${expense.id}`, {
        title,
        amount: parseFloat(amount), // Ensures amount is sent as a number
        currency: "INR",
        split_type: "EQUAL",
      });
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
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleEdit(e)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeExpense(e.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default Expenses;