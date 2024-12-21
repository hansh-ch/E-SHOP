import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className="w-1/2 mx-auto">
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl text-center">Create an account</h3>
      </div>
      <form>
        <ul className="list-none flex flex-col gap-y-4">
          <li className="flex flex-col space-y-3">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              placeholder="e.g., liki100"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </li>
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

          <li className="">
            <Button type="submit" className="w-full uppercase">
              Signup
            </Button>
          </li>
        </ul>
        <div className="text-center mt-3">
          <p>
            Already have an account ?
            <span className="ms-2">
              <Link to="/auth/login" className="text-blue-800">
                Sign-in
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
