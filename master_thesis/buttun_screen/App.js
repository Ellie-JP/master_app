import React from 'react';
import { ThemeProvider, Header, Button } from 'react-native-elements';

const theme = {
  colors: {
    primary: '#9fc0d1',
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Button title="Button1" />
      <Button title="Button2" />
    </ThemeProvider>
  );
};
