// React Dependencies
import * as React from "react";

// Internal Dependencies
import { Column } from "./Column";

import { AppContainer } from "./styles";

export const App = () => {
  return (
    <AppContainer>
      <Column text="Todo: " />
    </AppContainer>
  );
};
