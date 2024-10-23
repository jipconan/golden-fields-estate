import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import * as Shared from "./components/Shared";
import theme from "./components/themes/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <>
        <header>
          <Shared.Header />
        </header>
        <main></main>
        <footer>
          <Shared.Footer />
        </footer>
      </>
    </ChakraProvider>
  );
}

export default App;
