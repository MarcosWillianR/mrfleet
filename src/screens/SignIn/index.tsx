import React, { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Realm, useApp } from '@realm/react'

import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from '@env';

import { Container, Slogan, Title } from './styles';

import backgroundImg from '../../assets/background.png';
import { Button } from '../../components/Button';
import { Alert } from 'react-native';


WebBrowser.maybeCompleteAuthSession();

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = React.useState(false);

  const app = useApp();

  const [_, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    scopes: ['profile', 'email']
  });

  function handleGoogleSignIn() {
    setIsAuthenticating(true);

    googleSignIn().then((response) => {
      if (response.type !== 'success') {
        setIsAuthenticating(false);
      }
    })
  }

  useEffect(() => {
    if (response?.type === 'success') {
      if (response.authentication?.idToken) {
        const credentials = Realm.Credentials.jwt(response.authentication?.idToken)
        app.logIn(credentials)
          .catch(error => {
            console.log(error)
            Alert.alert('Entrar', 'Não foi possível conectar-se a sua conta Google.')
            setIsAuthenticating(false)
          })
      } else {
        Alert.alert('Entrar', 'Não foi possível conectar-se a sua conta Google.')
        setIsAuthenticating(false)
      }
    }
  }, [response])

  return (
    <Container source={backgroundImg}>
      <Title>Mr Fleet</Title>

      <Slogan>
        Gestão de uso de veiculos
      </Slogan>

      <Button isLoading={isAuthenticating} onPress={handleGoogleSignIn}>
        Entrar com Google
      </Button>
    </Container>
  );
}