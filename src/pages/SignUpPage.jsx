import React, { useState } from "react";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
      // Add sign-up logic here
      alert("Signed up successfully.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-bold text-[#2C3E50] mb-6">Sign Up</h2>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="appearance-none rounded-lg block w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#008CBA] focus:border-[#008CBA] sm:text-lg"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="appearance-none rounded-lg block w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#008CBA] focus:border-[#008CBA] sm:text-lg"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="appearance-none rounded-lg block w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#008CBA] focus:border-[#008CBA] sm:text-lg"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="appearance-none rounded-lg block w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#008CBA] focus:border-[#008CBA] sm:text-lg"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#008CBA] text-white font-semibold rounded-lg hover:bg-[#0074a8]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008CBA] sm:text-lg"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#6C7A89]">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-[#008CBA] hover:text-[#0074a8]">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
