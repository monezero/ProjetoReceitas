import { TouchableOpacityProps } from "react-native";

import { Container, Title, ButtonTypeStyleProps, Row } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <Row>
      <Container type={type} {...rest}>
        <Title>{title}</Title>
      </Container>
    </Row>
  );
}
