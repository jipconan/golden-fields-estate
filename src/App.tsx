import { useEffect, useState } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
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
      <Flex
        direction="column"
        style={{
          width: `calc(100vw - ${scrollbarWidth}px)`,
          minWidth: "700px",
        }}
      >
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
      </Flex>
    </ChakraProvider>
  );
}

export default App;
