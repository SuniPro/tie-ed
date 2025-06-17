import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./component/layouts/Frame/Header";
import { GlobalStyled } from "./component/layouts/Layouts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDarkMode } from "usehooks-ts";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./styles/theme";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./page/Main";
import { WindowContextProvider } from "./context/WindowContext";

const QUERY_CLIENT = new QueryClient();

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : darkTheme}>
        <QueryClientProvider client={QUERY_CLIENT}>
          <WindowContextProvider>
            <Header />
            <Toaster />
            <GlobalStyled />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main />} />
              </Routes>
            </BrowserRouter>
          </WindowContextProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
