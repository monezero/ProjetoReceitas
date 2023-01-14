import theme from "@theme/index";
import { height, width } from "@utils/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";


export const Container = styled.View`
align-items: center;
justify-content: center;
margin-top: 100px;
`;



export const Image = styled.Image`
  width: ${width * 0.8}px;
  height: ${height * 0.65}px;
  margin-left: 30px;
  border-radius: 30px;
`;

export const Content = styled.View`
align-items: center;
justify-content: center;
`;

export const Icon = styled.View`
bottom: 480px;
right: 100px;
position: absolute;
align-items: flex-start;
`



export const Title = styled.Text`
bottom: 120px;
position: absolute;
font-size: 28px;
font-family: "Roboto_700Bold";
color: ${theme.COLORS.WHITE};
border-color: #000;
border-radius: 2px;
overflow: hidden;
z-index: 4;

`;

export const TitleContainer = styled(LinearGradient)`
top: -190px;
width: ${width * 0.8}px;
height: ${height * 0.1}px;
left: -149px;
border-radius: 14px;
position: absolute;
z-index: 3;
`