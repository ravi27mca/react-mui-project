import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";

function MainLayout() {
    return (
        <Box sx={{ display: "flex" }}>
            <Header />

            <Sidebar />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                }}
            >
                <Toolbar />

                <Outlet />
            </Box>
        </Box>
    );
}

export default MainLayout;