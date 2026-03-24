import { StyleSheet, FlatList, ToastAndroid } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { getPosts } from './src/services/api';
import ItemCard from './src/components/ItemCard/ItemCard';
import FloatingButton from './src/components/FloatingButton/FloatingButton';

type Post = {
  id: number;
  title: string;
  body: string;
};

function App() {
  const [data, setData] = useState<Post[]>([]);
  //calling API function
  useEffect(() => {
    getPosts()
      .then(data => setData(data)) //
      .catch(err => console.log(err));
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ItemCard id={item.id} title={item.title} body={item.body} />
          )}
        />
        <FloatingButton
          onPress={() => ToastAndroid.show('Hola', ToastAndroid.LONG)}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default App;
