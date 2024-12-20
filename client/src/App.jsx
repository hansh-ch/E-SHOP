import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./UI/AuthLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminLayout from "./UI/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminFeatures from "./pages/admin/AdminFeatures";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" /> */}
        <Route path="auth" element={<AuthLayout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
