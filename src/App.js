import * as React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ToggleColorMode from "./components/ToggleColorMode";
import HomePage from './components/HomePage';
import Login from './components/Login';
import "./App.css";

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            // light: will be calculated from palette.primary.main,
            main: '#00AD96',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },
        },
      }),
    [mode]
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
        <ToggleColorMode />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
export { ColorModeContext };