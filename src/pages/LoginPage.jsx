import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required.");
    } else {
      setError("");
      // Add login logic here
      alert("Logged in successfully.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-bold text-[#2C3E50] mb-6">Login</h2>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
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
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="appearance-none rounded-lg block w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#008CBA] focus:border-[#008CBA] sm:text-lg"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-[#008CBA] hover:text-[#0074a8]">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#008CBA] text-white font-semibold rounded-lg hover:bg-[#0074a8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008CBA] sm:text-lg"
            >
              Log In
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#6C7A89]">
            Don't have an account?{" "}
            <a href="/signup" className="font-medium text-[#008CBA] hover:text-[#0074a8]">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
