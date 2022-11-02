import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { ThemeProvider } from 'styled-components/native';
import { useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { RestaurantsContextProvider } from './src/services/restaurants/restaurant.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import * as firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD091Vxk9SNNnvajfhSRYvdnKwQyZjUpPA",
  authDomain: "mealstogo-1f86d.firebaseapp.com",
  projectId: "mealstogo-1f86d",
  storageBucket: "mealstogo-1f86d.appspot.com",
  messagingSenderId: "96874288486",
  appId: "1:96874288486:web:a10eea775a0a253341e4a7"
};

const app = initializeApp(firebaseConfig);


export default function App() {


  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular
    });

  if (!oswaldLoaded || !latoLoaded){

    return null;

  }
  return (
    <>
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
      <FavouritesContextProvider>
      <LocationContextProvider>
      <RestaurantsContextProvider>
      <Navigation />
      </RestaurantsContextProvider>
      </LocationContextProvider>
      </FavouritesContextProvider>
      </AuthenticationContextProvider>
    </ThemeProvider>
    <ExpoStatusBar style="auto" />
 </>
  );
};


