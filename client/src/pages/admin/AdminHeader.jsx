import { AlignJustify, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminHeader({ setOpen }) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button className="lg:hidden block" onClick={() => setOpen(true)}>
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end items-center">
        <Button className="inline-flex rounded-md hover:opacity-90">
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  );
}
