import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthLayout from "./UI/AuthLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminFeatures from "./pages/admin/AdminFeatures";
import ShopLayout from "./UI/ShopLayout";
import PageNotFound from "./UI/PageNotFound";
import ShopHomepage from "./pages/shop/ShopHomepage";
import ShopProductListing from "./pages/shop/ShopProductListing";
import ShopCheckout from "./pages/shop/ShopCheckout";
import ShopAccount from "./pages/shop/ShopAccount";
import AuthProtect from "./UI/AuthProtect";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" /> */}
        {/* AUTH ROUTES */}
        <Route path="auth" element={<AuthLayout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        {/* ADMIN ROUTES */}

        <Route
          path="admin"
          element={
            <AuthProtect>
              <AdminLayout />
            </AuthProtect>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>

        {/* SHOP ROUTES */}
        <Route
          path="shop"
          element={
            <AuthProtect>
              <ShopLayout />
            </AuthProtect>
          }
        >
          <Route index element={<ShopHomepage />} />
          <Route path="listing" index element={<ShopProductListing />} />
          <Route path="checkout" index element={<ShopCheckout />} />
          <Route path="account" index element={<ShopAccount />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
