import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Avatar,
    Badge,
    Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Toolbar>
                {/* Menu Icon */}
                <IconButton color="inherit" edge="start">
                    <MenuIcon />
                </IconButton>

                {/* Logo / Title */}
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        ml: 1,
                    }}
                >
                    React Admin Dashboard
                </Typography>

                {/* Notification */}
                <IconButton color="inherit">
                    <Badge badgeContent={3} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                {/* Profile */}
                <Box sx={{ ml: 2 }}>
                    <Avatar>R</Avatar>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;