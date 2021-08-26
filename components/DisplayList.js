import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
import sampleData from '../assets/sampleData';

// const data = [
//   { orderID: 12345, fseName: 'John Doe', customer: 'Chase', tid: 'tid1' },
//   { orderID: 34567, fseName: 'Tom', customer: 'BoA', tid: 'tid12' },
//   { orderID: 98754, fseName: 'Alex', customer: 'T5Bank', tid: 'tid534' },
// ];

export default function DisplayList({ navigation }) {
  const renderItem = ({ item }) => {
    console.log(item);
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
        <View>
          {/* <Button onPress={() => navigation.navigate('Details', item)}> */}
          <Text style={styles.title}>{item.Order_Id} </Text>
          {/* </Button> */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <FlatList
        data={sampleData}
        renderItem={renderItem}
        keyExtractor={(item) => item.Order_Id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
