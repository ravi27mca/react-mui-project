import { createContext, useState } from "react";

export const AppContext = createContext();
function AppProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const [user, setUser] = useState({
        name: "Ravi",
        email: "ravi@gmail.com",
        role: "Admin",
    });

    return (
        <AppContext.Provider
            value={{
                darkMode,
                setDarkMode,
                user,
                setUser,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;