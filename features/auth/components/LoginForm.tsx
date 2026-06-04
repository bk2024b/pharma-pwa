"use client";

import { useState } from "react";
import { authService } from "../services/auth.service";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await authService.signIn(email, password);
    if (error) alert(error.message);
  };

  return (
    <div className="p-4 space-y-2">
      <input
        className="border p-2 w-full"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="bg-green-600 text-white p-2 w-full" onClick={handleLogin}>
        Se connecter
      </button>
    </div>
  );
}