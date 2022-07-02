// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
//teste
//teste dois
const TelaDois = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello world dois</Text>
      <Button title="Go to Details... again" onPress={() => navigation.push('TelaDois')} />
    </View>
  );
};

export default TelaDois;
