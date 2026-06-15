import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Layout from "../components/Layout";

function Import() {

  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const upload = async () => {

    if (!file) {
      alert("Please select a CSV file");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {

      const res = await API.post(

        "/import",

        formData,

        {

          headers: {

            "Content-Type":
              "multipart/form-data"

          }

        }

      );

      alert(

        `Import Successful!\n\n` +
        `Total Rows: ${res.data.totalRows}\n` +
        `Imported Rows: ${res.data.importedRows}\n` +
        `Anomalies: ${res.data.anomaliesDetected}`

      );

      navigate("/dashboard");

    }

    catch (err) {

      console.log(err);

      alert("Import Failed");

    }

  };

  return (

    <Layout>

      <div className="container mt-4">

        <h2>📄 Import CSV</h2>

        <input

          type="file"

          accept=".csv"

          className="form-control mt-3"

          onChange={(e) =>
            setFile(e.target.files[0])
          }

        />

        <button

          className="btn btn-primary mt-3"

          onClick={upload}

        >

          Import CSV

        </button>

      </div>

    </Layout>

  );

}

export default Import;