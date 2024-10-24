import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import * as Shared from "./components/Shared";
import * as Pages from "./pages";
import theme from "./components/themes/theme";

function App() {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    const width = window.innerWidth - document.body.clientWidth;
    setScrollbarWidth(width);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <div style={{ width: `calc(100vw - ${scrollbarWidth}px)` }}>
        <header>
          <Shared.Header />
        </header>
        <main>
          <Pages.HomePage />
        </main>
        <footer>
          <Shared.Footer />
        </footer>

        <Shared.ContactFabGroup />
      </div>
    </ChakraProvider>
  );
}

export default App;
