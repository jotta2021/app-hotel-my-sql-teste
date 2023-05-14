import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import{ createDrawerNavigator } from  '@react-navigation/drawer'
import Home from './pages/home'
import { Entypo } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import Details from './pages/details'
import Initial from './pages/initial'
import Register from './pages/register'
import Login from './pages/login'
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="initial"
          component={Initial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: 'Reserve já',
            headerTitleStyle: {
              fontFamily: 'Montserrat_500Medium',
              color: ' #4073C8'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
   
                <Entypo name="menu" size={24} color="#4073C8" />
              </TouchableOpacity>
            )
          }}
        />

        <Stack.Screen
          name="Detalhes"
          component={Details}
          options={{
            title: 'Detalhes',
            headerBackTitleStyle: {
              fontFamily: 'Montserrat_700Bold',
              color: 'blue'
            },
            headerRight: () => (
              <TouchableOpacity>
                <Entypo name="menu" size={24} color="#4073C8" />
              </TouchableOpacity>
            )
          }}
        />

        <Stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Routes
