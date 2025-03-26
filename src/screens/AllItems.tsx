import {FlatList, StyleSheet, Text, View} from 'react-native';

interface Item {
  id: string;
  name: string;
  stock: number;
  unit: string;
}

interface AllItemsProps {
  data: Item[];
}

const AllItems = ({data}: AllItemsProps) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
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
            <Text style={styles.itemText}>{item.stock}</Text>
          </View>
        )}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{gap: 10}}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontWeight: 500,
    fontSize: 16,
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
