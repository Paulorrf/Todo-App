import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";

import { Home, Register } from "./components/index";

const theme = {
  colors: {
    dark: {
      bgDarkMain: "hsl(235, 21%, 11%)",
      bgTodo: "hsl(235, 24%, 19%)",
      textMain: "hsl(234, 39%, 85%)",
      textSec: "hsl(236, 33%, 92%)",
    },
    light: {
      bgLightMain: "hsl(0, 0%, 98%)",
      text: "#000",
    },
  },
};

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:method" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
