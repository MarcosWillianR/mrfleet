import { Container, Slogan, Title } from './styles';

import backgroundImg from '../../assets/background.png';
import { Button } from '../../components/Button';

export function SignIn() {
  return (
    <Container source={backgroundImg}>
      <Title>Mr Fleet</Title>

      <Slogan>
        Gestão de uso de veiculos
      </Slogan>

      <Button>Entrar com Google</Button>
    </Container>
  );
}