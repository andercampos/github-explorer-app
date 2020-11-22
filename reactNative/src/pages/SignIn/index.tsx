import React, { useCallback, useRef } from 'react';
import { StatusBar, Image, View, Alert } from 'react-native';
import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';

import getValidationErrors from '../../utils/getValidationError';

import Input from '../../components/Input';
import logoImg from '../../assets/logo.png';

import { Container, Button, ButtonText, Icon } from './styles';

interface SignInFormData {
  login: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          login: Yup.string()
            .required('Campo obrigatório')
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          login: data.login,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Usuário não encontrado',
        );
      }
    },
    [signIn],
  );


  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#292929"/>

      <Image source={logoImg}/>
      <View />
      <Form ref={formRef} onSubmit={handleSignIn} >
        <Input 
          name="login" 
          placeholder="Usuário" 
          autoCorrect={false}
          autoCapitalize="none"
        />

        <Button
          onPress={() => {
            formRef.current?.submitForm();
          }}
        >
          <ButtonText>ENTRAR</ButtonText>
          <Icon name="arrow-right" size={24}/>
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;