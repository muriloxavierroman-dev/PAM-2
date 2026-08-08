import { NavigatuinContainer } from '@react-navigation/native';
import { createNativeStackNavigato } from '@react-natigation/native-stack';

const stack = createNativeStackNavigato();

export default function StackNavigator(){
  return(
    <NavigatuinContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={Login}
          />

         <stack.Screen
          name="Cadastrar"
          component={cadastrar}
          />

         <stack.Screen
          name="Home"
          component={Home}
          />

      </Stack.Navigator>
    </NavigatuinContainer>
  )
}