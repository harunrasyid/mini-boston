import { VStack } from "@chakra-ui/react";
import { Map } from "./components/Map";
import { useVehicles } from "./hooks/useVehicles";
import { styles } from "./App.style";

function App() {
  const vehicles = useVehicles();

  return (
    <VStack css={styles.page}>
      <Map {...vehicles} />
    </VStack>
  );
}

export default App;
