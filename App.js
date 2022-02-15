import React from 'react';
import {WebView} from 'react-native-webview';

function App() {
  return (
    <WebView
      geolocationEnabled={true}
      source={{
        uri: 'https://campinas.sistemaexpert.com.br/usuario/login/',
      }}
    />
  );
}

export default App;
