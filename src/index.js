import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./modules/core/App";
// import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#3f51b5",
        },
        secondary: {
            main: "#f50057",
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);
