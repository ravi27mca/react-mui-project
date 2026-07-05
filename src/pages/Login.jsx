import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Link,
    CircularProgress,
    Snackbar,
    Alert,
    IconButton,
    InputAdornment,
} from "@mui/material";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleLogin = () => {
        setEmailError("");
        setPasswordError("");

        let isValid = true;

        // Email Validation

        if (email.trim() === "") {
            setEmailError("Email is required");
            isValid = false;
        }

        // Email Pattern

        else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Enter valid email");
            isValid = false;
        }

        // Password Validation

        if (password.trim() === "") {
            setPasswordError("Password is required");
            isValid = false;
        }

        else if (password.length < 6) {
            setPasswordError("Minimum 6 characters");
            isValid = false;
        }

        if (isValid) {

            setLoading(true);

            setTimeout(() => {

                setLoading(false);

                setOpenSnackbar(true);

                console.log(email);
                console.log(password);

                console.log("Remember Me :", rememberMe);

            }, 2000);

        }
    }

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    width: 400,
                    padding: 4,
                    borderRadius: 3,
                }}
            >
                <Typography variant="h4" align="center" gutterBottom>
                    Admin Login
                </Typography>

                <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={Boolean(emailError)}
                    helperText={emailError}
                />

                <TextField
                    fullWidth
                    label="Password"
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={Boolean(passwordError)}
                    helperText={passwordError}
                    type={showPassword ? "text" : "password"}

                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">

                                    <IconButton
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {
                                            showPassword ?
                                                <VisibilityOff /> :
                                                <Visibility />
                                        }

                                    </IconButton>

                                </InputAdornment>
                            )
                        }
                    }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                    }
                    label="Remember Me"
                />
                <Box textAlign="right" mt={1}>
                    <Link href="#" underline="hover">
                        Forgot Password?
                    </Link>
                </Box>

                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3 }}
                    onClick={handleLogin}
                    disabled={loading}
                >

                    {
                        loading
                            ?
                            <CircularProgress
                                size={24}
                                color="inherit"
                            />
                            :
                            "Login"
                    }

                </Button>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={() => setOpenSnackbar(false)}
                >

                    <Alert
                        severity="success"
                        variant="filled"
                    >
                        Login Successful
                    </Alert>

                </Snackbar>

            </Paper>
        </Box>
    );
}

export default Login;