import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    FormControlLabel,
    Switch,
    Snackbar,
    Alert,
} from "@mui/material";

import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

function Settings() {

    const [company, setCompany] = useState("ABC Technologies");
    const [email, setEmail] = useState("admin@gmail.com");
    const [phone, setPhone] = useState("9876543210");
    const [address, setAddress] = useState("Hyderabad");
    const { darkMode, setDarkMode } = useContext(AppContext);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleSave = () => {

        console.log({
            company,
            email,
            phone,
            address,
            darkMode,
        });

        setOpenSnackbar(true);
    };

    return (

        <Box>

            <Typography
                variant="h4"
                gutterBottom
            >
                Settings
            </Typography>

            <Paper
                sx={{
                    p: 4,
                    maxWidth: 700,
                }}
            >

                <TextField
                    fullWidth
                    label="Company Name"
                    margin="normal"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />

                <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    fullWidth
                    label="Phone"
                    margin="normal"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <TextField
                    fullWidth
                    label="Address"
                    margin="normal"
                    multiline
                    rows={3}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <FormControlLabel
                    control={
                        <Switch
                            checked={darkMode}
                            onChange={(e) => setDarkMode(e.target.checked)}
                        />
                    }
                    label="Dark Mode"
                />

                <Box mt={3}>

                    <Button
                        variant="contained"
                        onClick={handleSave}
                    >
                        Save Settings
                    </Button>

                </Box>

            </Paper>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert severity="success" variant="filled">
                    Settings Saved Successfully
                </Alert>
            </Snackbar>

        </Box>
    );
}

export default Settings;