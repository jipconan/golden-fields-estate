import { useEffect, useState } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import "./App.css";
import * as Shared from "./components/Shared";
import * as Pages from "./pages";
import theme from "./components/themes/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    const width = window.innerWidth - document.body.clientWidth;
    setScrollbarWidth(width);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex
          direction="column"
          w={["100%", `calc(100vw - ${scrollbarWidth}px)`]}
          minW={["100vw", "800px"]}
        >
          <header>
            <Shared.Header />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Pages.HomePage />} />
              <Route path="/properties" element={<Pages.PropertiesPage />} />
              <Route path="/agents" element={<Pages.AgentGalleryPage />} />
              <Route path="/about" element={<Pages.AboutPage />} />
              <Route path="/contact" element={<Pages.ContactPage />} />
            </Routes>
          </main>
          <footer>
            <Shared.Footer />
          </footer>

          <Shared.ContactFabGroup />
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
