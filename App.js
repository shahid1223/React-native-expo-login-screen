import React from 'react';
import { NativeBaseProvider } from 'native-base';
import LoginState from './Context/LoginState';
import LoginIndex from './LoginIndex';

const App = () => {
  return (
    <LoginState>
      <NativeBaseProvider>
        <LoginIndex />
      </NativeBaseProvider>
    </LoginState>
  );
}

export default App