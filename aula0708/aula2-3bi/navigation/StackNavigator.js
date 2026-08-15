import { NavigationConteainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-natigation/native-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Cadastro from '../screens/Cadastrar';

const stack = createNativeStackNavigator();

export default function StackNavigator(){
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={Login}
          />

         <Stack.Screen
          name="Cadastrar"
          component={cadastrar}
          />

         <Stack.Screen
          name="Home"
          component={Home}
          />

      </Stack.Navigator>
    </NavigationContainer>
  )
}