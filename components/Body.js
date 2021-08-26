import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DisplayList from './DisplayList';
import DisplayTicketDetail from './DisplayTicketDetail';

const Stack = createNativeStackNavigator();

export default function Body() {
  //   React.useEffect(() => {
  // fetch(apiUrl)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     return data.articles;
  // })
  // .then(articles => {
  // setItems(sampleData);
  // setFetchingDataState(false);
  // })
  // .catch(error => {
  //   console.error(error);
  // });
  //   }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='List'>
        <Stack.Screen name='List' component={DisplayList} />
        <Stack.Screen name='Details' component={DisplayTicketDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
