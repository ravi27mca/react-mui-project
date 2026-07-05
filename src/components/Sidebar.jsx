import {
    Drawer,
    Toolbar,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link } from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Users", icon: <PeopleIcon />, path: "/users" },
    { text: "Products", icon: <InventoryIcon />, path: "/products" },
    { text: "Orders", icon: <ShoppingCartIcon />, path: "/orders" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

function Sidebar() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
        >
            <Toolbar />

            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton component={Link} to={item.path}>
                            <ListItemIcon>{item.icon}</ListItemIcon>

                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>

                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
}

export default Sidebar;