// Internal Dependencies
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
      <Card text="Being to use static typing" />
    </ColumnContainer>
  );
};
