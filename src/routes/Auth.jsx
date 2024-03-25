import React, { useState } from 'react';
import axios from 'axios'
export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
      await axios.post('http://localhost:3000/api/signin',{Email:email,Password:password})
    }
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="card w-96 glass flex flex-col gap-2 p-2">
        <h1 className="text-center font-bold text-xl">Your Support, Will Save Life</h1>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            {/* SVG path */}
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            {/* SVG path */}
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="pt-4 flex gap-2 justify-evenly">
          <button className="btn btn-outline w-2/5" onClick={handleSignIn}>
            Sign-up
          </button>
          <button className="btn btn-outline w-2/5" onClick={handleSignIn}>
            Sign-in
          </button>
        </div>
      </div>
    </div>
  );
}
