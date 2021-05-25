import React from 'react';
import './sign-in-and-sign-up-page.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up-page'>
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
);

export default SignInAndSignUpPage;
