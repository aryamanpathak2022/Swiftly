import React, { useState } from "react";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = 'http://localhost:8000/api/';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.password_match ) {
          console.log("Password  matched");
          // Handle success, e.g., redirect to another page or set some state.
        } else {
          console.error("Password does not match");
     
          // Handle the case when the password does not match.
        }
      } else {
        console.error("Error fetching data");
        // Handle other HTTP errors here.
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle other errors (e.g., network issues) here.
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

          <button type="submit" className="bg-blue text-white px-4 py-2">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
