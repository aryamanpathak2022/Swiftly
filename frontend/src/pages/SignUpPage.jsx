import React, { useState } from "react";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "", 
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('http://localhost:8000/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.error('Server error:', response.statusText);
        // Handle the error more gracefully, e.g., display an error message to the user.
      } else {
        // Handle success, if needed
      }
      console.log(JSON.stringify(formData));
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle the error, e.g., display an error message to the user.
    }
  };

  return (
    <>
      <div className="bg1 relative h-screen w-screen">
        <div className="text-6xl absolute top-20 ml-10">SIGN UP</div>

        <form className="absolute top-40 ml-10" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
