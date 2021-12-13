import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import screens
import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000',
              height: 40,
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitle: 'Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
