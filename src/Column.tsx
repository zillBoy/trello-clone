// Internal Dependencies
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";

import { addTask } from "./state/actions";
import { useAppState } from "./state/AppStateContext";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
  id: string;
};

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>

      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  );
};
