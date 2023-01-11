import styled from "styled-components/native";

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color:  ${({ theme }) => theme.COLORS.BLACK}
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.COLORS.GREEN,
}))``;