import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (!password || !password || !confPassword) {
      return toast.error("Fields cannot be empty");
    }
    if (password !== confPassword) {
      return toast.error("Password doesn't match");
    }
  }
  return (
    <div className="w-1/2 mx-auto">
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl text-center">
          Login to your account
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <ul className="list-none flex flex-col gap-y-4">
          <li className="flex flex-col space-y-3">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="e.g., user@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>

          <li className="flex flex-col space-y-3">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="e.g., qwert@24"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li className="flex flex-col space-y-3">
            <Label htmlFor="confPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confPassword"
              placeholder="e.g., qwert@24"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </li>

          <li className="">
            <Button type="submit" className="w-full uppercase">
              Login
            </Button>
          </li>
        </ul>
        <div className="text-center mt-3">
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/auth/signup" className="text-blue-800">
                Sign-up
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
