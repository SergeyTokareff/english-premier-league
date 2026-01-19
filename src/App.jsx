import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles";
import Home from "./pages/Home";
import Table from "./pages/Table/Table";
import Matches from "./pages/Matches/Matches";
import Statistics from "./pages/Statistics/Statistics";
import News from "./pages/News/News";
import Transfers from "./pages/Transfers/Transfers";
import Players from "./pages/Players/Players";
import Clubs from "./pages/Clubs/Clubs";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Table />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/news" element={<News />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/players" element={<Players />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
