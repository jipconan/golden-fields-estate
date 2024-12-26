import { ChakraProvider, Flex } from "@chakra-ui/react";
import "./App.css";
import * as Shared from "./components/Shared";
import * as Pages from "./pages";
import theme from "./components/themes/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex direction="column" minW={["100vw", "500px"]}>
          <header>
            <Shared.Header />
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Pages.HomePage />} />
              <Route path="/properties" element={<Pages.PropertiesPage />} />
              <Route
                path="/properties/gallery"
                element={<Pages.PropertiesGalleryPage />}
              />
              <Route path="/agents" element={<Pages.AgentGalleryPage />} />
              <Route path="/about" element={<Pages.AboutPage />} />
              <Route path="/contact" element={<Pages.ContactPage />} />
            </Routes>
          </main>

          <footer>
            <Shared.Footer />
          </footer>
        </Flex>

        <Shared.ContactFabGroup />
      </Router>
    </ChakraProvider>
  );
}

export default App;
