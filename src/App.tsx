import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import * as Shared from "./components/Shared";
import * as Pages from "./pages";
import theme from "./components/themes/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <header>
          <Shared.Header />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Pages.HomePage />} />
            <Route path="/properties" element={<Pages.PropertiesPage />} />
            <Route
              path="/propertiesgallery"
              element={<Pages.PropertiesGalleryPage />}
            />
            <Route path="/property/:id" element={<Pages.PropertyPage />} />
            <Route path="/agents" element={<Pages.AgentGalleryPage />} />
            <Route path="/agent/:id" element={<Pages.AgentPage />} />
            <Route path="/about" element={<Pages.AboutPage />} />
            <Route path="/contact" element={<Pages.ContactPage />} />
          </Routes>
        </main>

        <footer>
          <Shared.Footer />
        </footer>

        <Shared.ContactFabGroup />
      </Router>
    </ChakraProvider>
  );
}

export default App;
