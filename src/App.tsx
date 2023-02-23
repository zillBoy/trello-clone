// React Dependencies
import * as React from "react";

// Internal Dependencies
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";

import { AppContainer } from "./styles";

export const App = () => {
  return (
    <AppContainer>
      <Column text="Todo: " />
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};
