const db = require("../config/db");

// Add Member
const addMember = (groupId, userId, joinDate, callback) => {
  const sql = `
    INSERT INTO group_members
    (group_id,user_id,join_date)
    VALUES(?,?,?)
  `;

  db.query(sql,[groupId,userId,joinDate],callback);
};

// Get Members
const getMembers = (groupId,callback)=>{
    const sql=
    `
    SELECT
    gm.id,
    u.id as user_id,
    u.name,
    gm.join_date,
    gm.leave_date
    FROM group_members gm
    JOIN users u
    ON gm.user_id=u.id
    WHERE gm.group_id=?
    `;

    db.query(sql,[groupId],callback);
};

// Leave Group
const leaveGroup=(id,leaveDate,callback)=>{

    const sql=
    `
    UPDATE group_members
    SET leave_date=?
    WHERE id=?
    `;

    db.query(sql,[leaveDate,id],callback);

};

module.exports={
    addMember,
    getMembers,
    leaveGroup
};