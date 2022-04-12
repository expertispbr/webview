import React, {useState, useRef, useEffect} from 'react';
import {BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';

function App() {
  const [canGoBack, setCanGoBack] = useState(false);
  const webViewRef = useRef(null);

  function handleNavigation({nativeEvent}) {
    setCanGoBack(nativeEvent.canGoBack);
  }

  useEffect(() => {
    function handleBack() {
      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
      } else {
        BackHandler.exitApp();
      }

      return true;
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBack,
    );

    return () => backHandler.remove();
  }, [canGoBack]);

  return (
    <WebView
      ref={webViewRef}
      source={{uri: 'https://campinas-teste.sistemaexpert.com.br/usuario/campinas/'}}
      onLoadProgress={handleNavigation}
    />
  );
}

export default App;
