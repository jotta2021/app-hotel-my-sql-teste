import { StatusBar } from 'expo-status-bar' 
import { 
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import Routes from './src/routes' 
import { useCallback, useEffect, useState } from 'react'
void SplashScreen.preventAutoHideAsync()
export default function App() {

  const [isReady, setIsReady] = useState(false)
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  })
  console.log(fontsLoaded,isReady)

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && isReady) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, isReady])

  useEffect(() => {
    async function prepare () {
      try {
        await SplashScreen.preventAutoHideAsync()
        await onLayoutRootView()
      } catch (e) {
        console.warn('[prepare] App.tsx:', e)
      } finally {
        setIsReady(true)
      }
    }

    void prepare()
  }, [onLayoutRootView])




  if (!isReady || !fontsLoaded) { 
    return <></>
  }


  return (
    <> 
      <StatusBar style="auto" />
      <Routes />
    </>
  )
}
