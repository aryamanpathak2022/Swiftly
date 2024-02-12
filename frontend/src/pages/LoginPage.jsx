import React, { useState } from "react";
import "./SignUpPage.css";

import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = 'http://localhost:8000/api/login'; // Assuming login API endpoint
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        const { token, error } = data;

        if (token) {
          // Store the token in local storage
          localStorage.setItem('token', token);
          console.log(token);
          console.log(10);
          // Redirect to another page or update state to indicate successful login
          console.log("Login successful");
          //redirect to /dashboard
          window.location.href = '/dashboard';
        } else if (error) {
          setError(error);
        }
      } else {
        console.error("Error fetching data");
        setError("Error occurred while logging in");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Network error occurred");
    }
  };

  return (
    <>
      <div className="bg1 relative h-screen w-screen">
        <div className="text-6xl absolute top-20 ml-10">LOGIN</div>

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
{/* redirect to /dashboard */}
{/* <Link to={"/dashboard"}> */}
          <button type="submit" className="bg-blue text-white px-4 py-2">
            Login
          </button>
          {/* </Link> */}
          {error && <div className="text-red-500">{error}</div>}
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
