import type { SystemStyleObject } from "@chakra-ui/react";

const styles = {
  page: {
    minW: "100vw",
    minH: "100vh",
    alignItems: "center",
  },
} satisfies Record<string, SystemStyleObject>;

export { styles };
