import React from "react";

const UserCard = ({ user }) => {

    return (
        <div className="border border-black p-5 rounded w-80 shadow">

            <h1 className="text-3xl font-bold mb-4">
                User Details
            </h1>

            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Phone: {user.phone}</p>
            <p>Designation: {user.designation}</p>
            <p>Gender: {user.gender}</p>

        </div>
    );
};

export default UserCard;