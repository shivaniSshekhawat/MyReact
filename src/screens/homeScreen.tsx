import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AllItems from './AllItems';
import Create from './create';

const HomeScreen = () => {
  const [view, setView] = useState(0);
  const [data, setData] = useState([
    {id: '1', name: 'Wheat', stock: 5, unit: 'kg'},
    {id: '2', name: 'Rice', stock: 15, unit: 'kg'},
    {id: '3', name: 'Basmati Rice', stock: 25, unit: 'kg'},
    {id: '4', name: 'Pulse', stock: 65, unit: 'kg'},
    {id: '5', name: 'Corn', stock: 19, unit: 'kg'},
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            // eslint-disable-next-line react-native/no-inline-styles
            view === 1 ? {backgroundColor: '#72C37AFF'} : null,
          ]}
          onPress={() => setView(0)}>
          <Text
            style={[
              styles.btnText,
              // eslint-disable-next-line react-native/no-inline-styles
              view === 2 ? {color: 'white'} : null,
            ]}>
            All Items
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            // eslint-disable-next-line react-native/no-inline-styles
            view === 1 ? {backgroundColor: '#72C37AFF'} : null,
          ]}
          onPress={() => setView(1)}>
          <Text
            style={[
              styles.btnText,
              // eslint-disable-next-line react-native/no-inline-styles
              view === 0 ? {color: 'white'} : null,
            ]}>
            Low Stock
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            // eslint-disable-next-line react-native/no-inline-styles
            view === 3 ? {backgroundColor: '#72C37AFF'} : null,
          ]}
          onPress={() => setView(2)}>
          <Text
            style={[
              styles.btnText,
              // eslint-disable-next-line react-native/no-inline-styles
              view === 0 ? {color: 'white'} : null,
            ]}>
            Create
          </Text>
        </Pressable>
      </View>
      {view === 0 && <AllItems data={data} />}
      {view === 0 && <AllItems data={data.filter(item => item.stock < 20)} />}
      {view === 0 && <Create data={data} setData={setData} />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: '4%',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: '10%',
  },
  button: {
    paddingVertical: '3.5%',
    paddingHorizontal: '10%',
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: '#72C37AFF',
  },
  btnText: {
    color: '#72C37AFF',
    fontSize: 12,
  },
});
