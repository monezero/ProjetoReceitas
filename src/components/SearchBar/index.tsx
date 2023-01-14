import { TextInput, TextInputProps } from "react-native";
import { Container, View } from "./styles";
import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function SearchBar({ inputRef, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container ref={inputRef} placeholderTextColor={COLORS.GRAY} {...rest} />
  );
}
