import { Link, useNavigate } from "react-router-dom";
import {
  ChartNoAxesColumnIncreasing,
  LayoutDashboard,
  Logs,
  ShoppingBasket,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import SidebarItems from "../../UI/SidebarItems";

export default function AdminSidebar({ open, setOpen }) {
  const navigate = useNavigate();
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex items-center">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => navigate("/admin")}
                >
                  <ChartNoAxesColumnIncreasing />
                  <h1 className="text-xl font-bold">Admin Panel</h1>
                </div>
              </SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <div className="mt-4">
              <SidebarItems setOpen={setOpen} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden lg:flex w-64 flex-col border-r bg-background px-4 py-3  items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/admin")}
        >
          <ChartNoAxesColumnIncreasing />
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>

        <div className="mt-4">
          <ul className="flex flex-col gap-4 mt-4">
            <Link
              to="/admin"
              className="hover:bg-muted  hover:text-foreground px-4 py-3 rounded-sm
        "
            >
              <span className="flex items-center gap-2">
                <LayoutDashboard />
                Dashboard
              </span>
            </Link>

            <Link
              to="/admin/products"
              className="hover:bg-muted hover:text-foreground px-4 py-3 rounded-sm
        "
            >
              <span className="flex items-center gap-2">
                <ShoppingBasket />
                Products
              </span>
            </Link>
            <Link
              to="/admin/orders"
              className="hover:bg-muted  hover:text-foreground px-4 py-3 rounded-sm
        "
            >
              <span className="flex items-center gap-2">
                <Logs />
                Orders
              </span>
            </Link>
            {/* <Link to="/admin/features">
              <span className="flex items-center gap-2">
                <Feather />
                Features
              </span>
            </Link> */}
          </ul>
        </div>
      </aside>
    </>
  );
}
