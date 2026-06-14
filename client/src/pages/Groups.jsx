import { useEffect, useState } from "react";
import API from "../services/api";

function Groups() {

  const [groupName, setGroupName] = useState("");
  const [groups, setGroups] = useState([]);

  const loadGroups = async () => {
    try {
      const res = await API.get("/groups");
      setGroups(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const createGroup = async () => {
    try {

      await API.post("/groups", {
        name: groupName,
        created_by: 1
      });

      setGroupName("");

      loadGroups();

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Error");
    }
  };

  useEffect(() => {
    loadGroups();
  }, []);

  return (
    <div className="container mt-5">

      <h2>Groups</h2>

      <div className="d-flex gap-2 mb-4">

        <input
          className="form-control"
          value={groupName}
          onChange={(e)=>setGroupName(e.target.value)}
          placeholder="Enter Group Name"
        />

        <button
          className="btn btn-success"
          onClick={createGroup}
        >
          Add
        </button>

      </div>

      <table className="table table-bordered">

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Created By</th>
          </tr>

        </thead>

        <tbody>

          {
            groups.map((g)=>(
              <tr key={g.id}>
                <td>{g.id}</td>
                <td>{g.name}</td>
                <td>{g.created_by}</td>
              </tr>
            ))
          }

        </tbody>

      </table>

    </div>
  );

}

export default Groups;