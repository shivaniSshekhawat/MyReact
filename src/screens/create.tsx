/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

interface Item {
  id: string;
  name: string;
  stock: number;
  unit: string;
}

interface CreateProps {
  data: Item[];
  setData: React.Dispatch<React.SetStateAction<Item[]>>;
}

const Create: React.FC<CreateProps> = ({data, setData}) => {
  const [itemName, setItemName] = useState<string>('');
  const [stock, setStock] = useState<string>('');
  const [edit, setEdit] = useState(false);
  const [editItem, setEditItem] = useState<string | null>(null);
  const handleAddItem = () => {
    setEdit(false);
    const newItem: Item = {
      id: Date.now().toString(),
      name: itemName,
      stock: parseInt(stock, 10),
      unit: 'kg',
    };
    setData([...data, newItem]);
    setItemName('');
    setStock('');
  };
  const deleteItemHandler = (id: string) => {
    setData(data.filter(item => item.id !== id));
  };

  const editItemHandler = (item: Item) => {
    setEdit(true);
    setItemName(item.name);
    setEditItem(item.id);
  };

  const updateItemHandler = () => {
    setData(
      data.map(item =>
        item.id === editItem
          ? {...item, name: itemName, stock: parseInt(stock, 10)}
          : item,
      ),
    );
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an Item Name"
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={item => setItemName(item)}
      />
      <TextInput
        placeholder="Enter an Stock Amount "
        placeholderTextColor="#999"
        style={styles.input}
        value={stock}
        onChangeText={item => setStock(item)}
      />
      <Pressable
        style={styles.button}
        onPress={() => (edit ? updateItemHandler() : handleAddItem)}>
        <Text style={styles.btnText}>
          {edit ? 'Edit Item in stock' : 'Add Item In the Stock'}
        </Text>
      </Pressable>
      <View style={{marginTop: 10}}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>All Items</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={
                (styles.itemContainer,
                {backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D7F6BF'})
              }>
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={{flexDirection: 'row', gap: 20}}>
                <Text style={styles.itemText}>{item.stock}</Text>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteItemHandler(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{gap: 10}}
        />
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#CABFEEFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontWeight: 500,
    fontSize: 16,
    marginBottom: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  itemText: {
    fontWeight: 400,
    fontSize: 15,
  },
});
