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

export const IconHeart = styled.View`
bottom: 480px;
right: 100px;
position: absolute;
align-items: flex-start;
`

export const IconMore = styled.View`
bottom: 480px;
left: 120px;
position: absolute;
align-items: flex-start;
`



export const Title = styled.Text`
bottom: 130px;
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

export const ContainerMore = styled.View`
align-items: center;
justify-content: center;

`;

export const ImageMore = styled.Image`
  width: ${width * 1.0}px;
  height: ${height * 0.33}px;
  border-radius: 30px;
  position: absolute;
  z-index: 10;
`;

export const ContentMore = styled.View`
align-items: center;
justify-content: center;
`;


export const TitleMore = styled.Text`
bottom: 130px;
position: absolute;
font-size: 28px;
font-family: "Roboto_700Bold";
color: ${theme.COLORS.WHITE};
border-color: #000;
border-radius: 2px;
overflow: hidden;
z-index: 4;

`;

export const Recipe = styled.Text`
font-size: 16px;
font-family: "Roboto_400Regular";
color: ${theme.COLORS.WHITE};
position: absolute;
z-index: 6;
`;

export const TitleContainerMore = styled(LinearGradient)`
top: -60px;
width: ${width * 0.8}px;
height: ${height * 0.1}px;
left: -149px;
border-radius: 14px;
position: absolute;
z-index: 3;
`

export const IconHeartMore = styled.View`
bottom: 680px;
right: 60px;
position: absolute;
align-items: flex-start;
z-index: 4;
`;

export const IconBack = styled.View`
position: absolute;
justify-content: flex-start;
z-index: 4;
`;