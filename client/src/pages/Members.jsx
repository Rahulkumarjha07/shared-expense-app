import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

function Members() {

  const [members, setMembers] = useState([]);
  const [userId, setUserId] = useState("");

  // Load members
  const loadMembers = async () => {
    try {
      const res = await API.get("/members/1");
      setMembers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Add member
  const addMember = async () => {

    if (!userId) {
      alert("Please enter User ID");
      return;
    }

    try {

      await API.post("/members", {
        groupId: 1,
        userId: Number(userId),
        joinDate: new Date().toISOString().split("T")[0]
      });

      alert("Member Added Successfully");

      setUserId("");

      loadMembers();

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Failed to add member"
      );

    }

  };

  // Leave group
  const leaveGroup = async (id) => {

    try {

      await API.put(
        `/members/leave/${id}`,
        {
          leaveDate:
            new Date().toISOString().split("T")[0]
        }
      );

      alert("Member Left Successfully");

      loadMembers();

    } catch (err) {

      console.log(err);

      alert("Failed to update");

    }

  };

  useEffect(() => {
    loadMembers();
  }, []);

  return (

    <Layout>

      <div className="container mt-4">

        <h2 className="mb-4">
          👥 Members
        </h2>

        <div className="row mb-3">

          <div className="col-md-8">

            <input
              type="number"
              className="form-control"
              placeholder="Enter User ID"
              value={userId}
              onChange={(e) =>
                setUserId(e.target.value)
              }
            />

          </div>

          <div className="col-md-4">

            <button
              className="btn btn-primary w-100"
              onClick={addMember}
            >
              Add Member
            </button>

          </div>

        </div>

        <table className="table table-bordered table-striped">

          <thead>

            <tr>

              <th>ID</th>

              <th>Name</th>

              <th>Join Date</th>

              <th>Leave Date</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {members.length === 0 ? (

              <tr>

                <td
                  colSpan="5"
                  className="text-center"
                >
                  No Members Found
                </td>

              </tr>

            ) : (

              members.map((member) => (

                <tr key={member.id}>

                  <td>{member.id}</td>

                  <td>{member.name}</td>

                  <td>{member.join_date}</td>

                  <td>
                    {member.leave_date || "-"}
                  </td>

                  <td>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        leaveGroup(member.id)
                      }
                    >
                      Leave
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </Layout>

  );

}

export default Members;