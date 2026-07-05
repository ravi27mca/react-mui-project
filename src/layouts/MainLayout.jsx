import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
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