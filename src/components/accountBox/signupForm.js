import React, { useContext } from 'react';
import {
  BoxContainer,
  FormContainer,
  Input,
  SmallText,
  SubmitButton,
  BoldLink,
  TopText,
  OtherLogin,
} from './common';
import { Marginer } from '../marginer';
import { AccountContext } from './accountContext';
import { Box } from '@mui/material';
import kakao from '../../image/kakao.png';
import google from '../../image/google.png';

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <TopText>Full Name</TopText>
      <Marginer direction="vertical" margin={5} />
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />

      <TopText>User Email</TopText>
      <Marginer direction="vertical" margin={5} />
      <FormContainer>
        <Input type="email" placeholder="Email" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />

      <TopText>Password</TopText>
      <Marginer direction="vertical" margin={5} />
      <FormContainer>
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />

      <TopText>Password Confirm</TopText>
      <Marginer direction="vertical" margin={5} />
      <FormContainer>
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin="1.6em" />

      <SmallText>or you can register with</SmallText>
      <OtherLogin>
        <a>
          <Box
            component="div"
            sx={{
              backgroundImage: `url(${kakao})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '40px',
              height: '40px',
              color: 'black',
              marginRight: '2vw',
            }}
          ></Box>
        </a>
        <a>
          <Box
            component="div"
            sx={{
              backgroundImage: `url(${google})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '40px',
              height: '40px',
              color: 'black',
            }}
          ></Box>
        </a>
      </OtherLogin>
      <Marginer direction="vertical" margin={20} />
      <SubmitButton type="submit">Sign in</SubmitButton>
      <Marginer direction="vertical" margin="1.6em" />
      <SmallText>
        Do you have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Login
        </BoldLink>
      </SmallText>
    </BoxContainer>
  );
}
