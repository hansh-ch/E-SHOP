import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Form() {
  return (
    <form>
      <li>
        <Label htmlFor="username">Username</Label>
        <Input type="email" id="username" placeholder="e.g., liki100" />
      </li>
      <li>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="e.g., user@gmail.com" />
      </li>
    </form>
  );
}
