// React Dependencies
import { useState } from "react";

// Internal Dependencies
import { NewItemForm } from "./NewItemForm";
import { AddNewItemButton } from "./styles";

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
};

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddNewItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddNewItemButton>
  );
};
