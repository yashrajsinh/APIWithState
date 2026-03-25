import {
  StyleSheet,
  FlatList,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';

import { getPosts, createPost } from './src/services/api';

import FloatingButton from './src/components/FloatingButton/FloatingButton';
import CustomModel from './src/components/CustomModel/CustomModel';
import ItemCard from './src/components/ItemCard/ItemCard';

type Post = {
  id: number;
  title: string;
  body: string;
};

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [data, setData] = useState<Post[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  // GET posts laod in flatlist later
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();
      setData(res);
    };
    fetchPosts();
  }, []);

  // CREATE post
  const postData = async () => {
    try {
      const res = await createPost({ title, body });
      setData(prev => [...prev, res]);
      setTitle('');
      setBody('');
      setModalVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

  //edit post
  const editData = async (item: Post) => {
    try {
      ToastAndroid.show(JSON.stringify(item), ToastAndroid.LONG);
    } catch {}
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => editData(item)}>
              <ItemCard id={item.id} title={item.title} body={item.body} />
            </TouchableOpacity>
          )}
        />

        <FloatingButton onPress={() => setModalVisible(true)} />

        <CustomModel
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onAdd={postData}
          title={title}
          body={body}
          setTitle={setTitle}
          setBody={setBody}
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
