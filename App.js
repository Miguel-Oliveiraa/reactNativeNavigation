// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homescreen" component={Main} options={{ headerShown: true }} />
        <Stack.Screen name="TelaDois" component={TelaDois} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Main = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello world</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('TelaDois')} />
    </View>
  );
};

const TelaDois = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello world dois</Text>
      <Button title="Go to Details... again" onPress={() => navigation.push('TelaDois')} />
    </View>
  );
};

export default App;
