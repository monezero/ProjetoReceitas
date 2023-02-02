import theme from "@theme/index";
import { height, width } from "@utils/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";





export const IconMore = styled.View`
bottom: 480px;
left: 120px;
position: absolute;
align-items: flex-start;
`






export const ContainerMore = styled.View`
align-items: center;
justify-content: center;

`;

export const ImageMore = styled.Image`
  top: 0px;
  width: ${width * 1.0}px;
  height: ${height * 0.45}px;
  
  
`;

export const ContentMore = styled.View`
align-items: center;
justify-content: center;
`;

export const TitleStart = styled.View`
align-items: center;
bottom: 84px;
`;

export const TitleMore = styled.Text`
position: absolute;
font-size: 28px;
font-family: "Roboto_700Bold";
color: ${theme.COLORS.WHITE};
border-color: #000;
border-radius: 2px;
overflow: hidden;
z-index: 5;

`;

export const RecipeContainer = styled.View`
padding: 12px;
 border-radius: 18px;
 border-color: ${theme.COLORS.GREEN};
 border-width: 5px;
 margin-top: 20px;
 width: ${width * 0.85}px;
 text-align: center;
 justify-content: center;
 align-items: center;

`;

export const MaterialsTitle = styled.Text`
margin-left: 8px;
font-size: 18px;
font-family: "Roboto_700Bold";
align-self: flex-start;
color: ${theme.COLORS.GREEN}
`;

export const Materials = styled.Text`
line-height: 18px;
font-size: 12px;
font-family: "Roboto_400Regular";
color: ${theme.COLORS.BLACK};

`;

export const TitleContainerMore = styled(LinearGradient)`
top: -40px;
width: ${width * 1.0}px;
height: ${height * 0.15}px;
position: absolute;
z-index: 4;
`

export const IconHeartMore = styled.View`
top: -350px;
right: 60px;
position: absolute;
align-items: flex-start;
z-index: 2;
`;

export const IconBack = styled.View`
top: -350px;
left: 0px;
position: absolute;
justify-content: flex-start;
z-index: 2;
`;

export const IconShare = styled.View`
top: -350px;
right: 0px;
position: absolute;
align-items: flex-start;
z-index: 2;
`;

export const ContainerIcons = styled.View`
flex-direction: row;
margin-top: 20px;
justify-content: space-around;
`;

export const ContainerText = styled.View`
flex-direction: row;
margin-top: 3px;
justify-content: space-around;
`;

export const MiniText = styled.Text`
font-family: "Roboto_400Regular";
font-size: 12px;
color: ${theme.COLORS.GREEN};
`

