import { VStack } from "@chakra-ui/react";
import { Map } from "./components/Map";
import { useVehicles } from "./hooks/useVehicles";
import { styles } from "./App.style";
import { useRoutes } from "./hooks/useRoutes";
import { useShapes } from "./hooks/useShapes";

function App() {
  // const vehicles = useVehicles();
  const { routeList } = useRoutes();
  const shapes = useShapes(routeList);

  return (
    <VStack css={styles.page}>
      <Map vehicles={[]} {...shapes} />
    </VStack>
  );
}

export default App;
