import {
  StyleSheet,
  FlatList,
  ToastAndroid,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';

import { getPosts, createPost, deletePost } from './src/services/api';
//Componenets
import FloatingButton from './src/components/FloatingButton/FloatingButton';
import CustomModel from './src/components/CustomModel/CustomModel';
import ItemCard from './src/components/ItemCard/ItemCard';
//Edit model
import UpdateModel from './src/components/UpdateModel/UpdateModel';

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
  const [updateModel, setUpdateModel] = useState(false);
  const [updateTitle, setupdateTitle] = useState('');
  const [updateBody, setupdateBody] = useState('');

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
    setUpdateModel(!updateModel);
    const id = item.id;
    setupdateTitle(item.title);
    setupdateBody(item.body);
  };

  //Delete post
  const deleteData = async (id: number) => {
    await deletePost(id); //  call the API function
    setData(prev => prev.filter(post => post.id !== id)); // update local state
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => editData(item)}>
              <ItemCard
                id={item.id}
                title={item.title}
                body={item.body}
                onDelete={() => deleteData(item.id)}
              />
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

        <UpdateModel
          visible={updateModel}
          placeholderTitle={updateTitle}
          placeholderBody={updateBody}
          onCancel={() => setUpdateModel(!updateModel)}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
});

export default App;
