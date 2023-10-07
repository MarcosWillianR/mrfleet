import { Container, Slogan, Title } from './styles';

import backgroundImg from '../../assets/background.png';

export function SignIn() {
  return (
    <Container source={backgroundImg}>
      <Title>Mr Fleet</Title>

      <Slogan>
        Gestão de uso de veiculos
      </Slogan>
    </Container>
  );
}