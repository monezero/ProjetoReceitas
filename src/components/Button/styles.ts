import { width } from "@utils/dimensions";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Row = styled.View`
flex-direction: row;

align-items: center;

`;

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 46px;
  max-height: 46px;
  margin-left: 12px;
  margin-top: 12px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN : theme.COLORS.GREEN_DARK};
  border-radius: 16px;
  justify-content: center;
  max-width: ${width * 0.3}px;
  min-width: ${width * 0.3}px;
  align-items: center;
  padding: 3%;

`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.COLORS.WHITE};
    font-family: "Roboto_700Bold";
  `}
`;