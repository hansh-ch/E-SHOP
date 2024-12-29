import { Feather, LayoutDashboard, Logs, ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";
export default function SidebarItems({ setOpen }) {
  return (
    <ul className="flex flex-col gap-4 mt-4">
      <Link
        to="/admin"
        className="hover:bg-muted  hover:text-foreground px-4 py-3 rounded-sm
        "
        onClick={() => setOpen(false)}
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
        onClick={() => setOpen(false)}
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
        onClick={() => setOpen(false)}
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
  );
}
