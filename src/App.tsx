import { Text, VStack } from "@chakra-ui/react";
import { Map } from "./components/Map/Map";

function App() {
  return (
    <VStack
      css={{
        minW: "100vw",
        minH: "100vh",
        alignItems: "center",
      }}
    >
      <Map />
    </VStack>
  );
}

export default App;
