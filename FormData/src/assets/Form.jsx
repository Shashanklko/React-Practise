import { useState } from "react";
import React from "react";
import UserCard from "./UserCard";

const Form = () => {

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        phone: "",
        designation: "",
        gender: "",
    });

    const [userData, setUser] = useState([]);
    const [showData, setShowData] = useState(false);

  
const handleChange = (e) => {

    if (e.target.name === "phone") {

        if (e.target.value.length > 10) {
            alert("Number can only be 10 digits");
            return;
        }
    }

    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};
    const handleSubmit = (e) => {
        e.preventDefault();

        setUser([...userData, formData]);

        setFormData({
            name: "",
            age: "",
            phone: "",
            designation: "",
            gender: "",
        });
    };

    return (
        <div className="text-2xl mt-5 ml-5">

            {/* FORM */}
            <form
                className="space-y-4"
                onSubmit={handleSubmit}
            >

                <p>
                    Enter Your Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your Name"
                        className="border border-black px-2 py-1 rounded ml-2"
                        required
                    />
                </p>

                <p>
                    Enter Your Age:
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Age"
                        className="border border-black px-2 py-1 rounded ml-2"
                        required
                    />
                </p>

                <p>
                    Enter Your Phone Number:
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="border border-black px-2 py-1 rounded ml-2"
                    />
                </p>

                <p>
                    Enter Your Designation:
                    <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="Designation"
                        className="border border-black px-2 py-1 rounded ml-2"
                    />
                </p>

                <p className="space-x-2">
                    Choose Your Gender:

                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleChange}
                    />
                    <span>Male</span>

                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleChange}
                    />
                    <span>Female</span>
                </p>

                {/* SAVE BUTTON */}
                <button
                    type="submit"
                    className="border border-black px-4 py-2 rounded mt-5 mr-4"
                >
                    Save Data
                </button>

            </form>

            {/* DISPLAY BUTTON */}
            <button
                onClick={() => setShowData(true)}
                className="border border-black px-4 py-2 rounded mt-5 bg-gray-200"
            >
                Display Stored Data
            </button>

            {/* SHOW USER CARDS */}
            {showData && (
                <div className="flex flex-wrap gap-5 mt-10">

                    {userData.map((user, index) => (
                        <UserCard
                            key={index}
                            user={user}
                        />
                    ))}

                </div>
            )}

        </div>
    );
};

export default Form;