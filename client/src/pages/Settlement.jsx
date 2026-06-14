import { useEffect, useState } from "react";
import API from "../services/api";
import Layout from "../components/Layout";

function Settlement() {

  const [data, setData] = useState([]);

  const loadSettlement = async () => {

    try {

      const res =
        await API.get("/settlement/1");

      setData(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  useEffect(() => {

    loadSettlement();

  }, []);

  return (

    <Layout>

      <h2>Settlement Suggestions</h2>

      <table className="table table-bordered mt-3">

        <thead>

          <tr>

            <th>From</th>

            <th>To</th>

            <th>Amount</th>

          </tr>

        </thead>

        <tbody>

          {Array.isArray(data) &&
            data.map((s, i) => (

              <tr key={i}>

                <td>{s.from}</td>

                <td>{s.to}</td>

                <td>₹{s.amount}</td>

              </tr>

            ))}

        </tbody>

      </table>

    </Layout>

  );

}

export default Settlement;