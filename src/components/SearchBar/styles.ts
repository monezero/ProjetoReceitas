import theme from "@theme/index";
import { width } from "@utils/dimensions";
import { TextInput } from "react-native";
import styled from "styled-components/native";

export const View = styled.View`
justify-content: space-between;
flex-direction: row;
align-items: center;
`;

export const Container = styled.TextInput`
min-height: 56px;
max-height: 56px;
width: ${width * 0.85}px;
background-color: ${theme.COLORS.WHITE};
color: ${theme.COLORS.BLACK};
font-family: "Roboto_400Regular";
bottom: -70px;
font-size: 11px;
border-radius: 30px;
padding: 20px;
`;




