// Internal Dependencies
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = React.PropsWithChildren<{
  text: string;
}>;

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>

      <Card text="Generate app scaffold" />
      <Card text="Learn TypeScript" />
      <Card text="Beinng to use static typing" />
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
