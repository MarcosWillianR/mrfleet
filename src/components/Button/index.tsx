import { TouchableOpacityProps } from 'react-native';

import { Container, Title, LoadIndicator } from "./styles";

type Props = TouchableOpacityProps & {
  isLoading?: boolean;
  children: string;
}

export function Button({ isLoading = false, children, ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (  
        <LoadIndicator />
      ) : (
        <Title>{children}</Title>
      )}
    </Container>
  )
}