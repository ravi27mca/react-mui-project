import { ThemeProvider, CssBaseline } from "@mui/material";
import { useContext, useMemo } from "react";

import AppProvider, { AppContext } from "./context/AppContext";
import AppRoutes from "./routes/AppRoutes";
import getTheme from "./theme";

function AppContent() {
  const { darkMode } = useContext(AppContext);

  const theme = useMemo(() => getTheme(darkMode), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;