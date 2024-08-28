import React, { useState } from "react";
import { Link } from "react-router-dom";
import eyeImage from '../images/eye.png';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    fullName: "Johnatan Smith",
    email: "example@example.com",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., update the profile data
    console.log("Updated Profile:", profile);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-full max-w-md p-6 bg-base-100 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Update Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={profile.password}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-4 py-2 focus:outline-none"
              >
                <img src={eyeImage} alt="Show Password" className="w-6 h-6 cursor-pointer transition duration-300 hover:brightness-150" />
              </button>
            </div>
          </div>
          <button className="btn btn-primary w-full mt-4" type="submit">
            Update Profile
          </button>
          <p className="mt-4 text-center">
            <Link className="link link-primary" to="/dashboard">
              Go back to Dashboard
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;