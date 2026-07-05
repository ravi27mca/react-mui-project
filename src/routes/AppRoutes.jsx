import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Users from "../pages/Users";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Settings from "../pages/Settings";

import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public Route */}

                <Route path="/" element={<Login />} />

                {/* Protected Layout */}

                <Route element={<MainLayout />}>

                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/users" element={<Users />} />

                    <Route path="/products" element={<Products />} />

                    <Route path="/orders" element={<Orders />} />

                    <Route path="/settings" element={<Settings />} />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;