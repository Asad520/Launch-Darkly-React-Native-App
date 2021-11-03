import React, {useEffect, useState} from 'react';
import LDClient from 'launchdarkly-react-native-client-sdk';
import UnderDevelopment from './src/underDevelopment';
import Gif from './src/gif';
import Home from './src/home';

const App = () => {
  const [homePage, setHomePage] = useState(false);
  const [displayGif, setDisplayGif] = useState(true);

  useEffect(() => {
    configureClient();
  }, []);

  useEffect(() => {
    console.log('Home page', homePage);
    if (homePage && displayGif) {
      gotoHome();
    }
  }, [homePage]);

  const gotoHome = () => {
    setTimeout(() => setDisplayGif(false), 3000);
  };

  const configureClient = async () => {
    try {
      let client = new LDClient();
      let config = {
        mobileKey: 'mob-9e18ccd5-9afa-4670-b4a7-1c253e65463d',
      };
      let user = {key: 'test2@example.com'};
      await client.configure(config, user);

      setHomePage(await client.boolVariation('home-screen', false));
    } catch (error) {
      console.log(error);
    }
  };

  if (!homePage) {
    return <UnderDevelopment />;
  } else if (homePage && displayGif) {
    return <Gif />;
  } else {
    return <Home />;
  }
};

export default App;
