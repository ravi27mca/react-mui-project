import { createTheme } from "@mui/material/styles";

const getTheme = (darkMode) =>
    createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
        },
    });

export default getTheme;