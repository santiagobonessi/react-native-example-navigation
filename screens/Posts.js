import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import ListItem from '../components/ListItem';

export default ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const userId = navigation.getParam('user_id');
  const userName = navigation.getParam('user_name');
  const fetchPosts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    setLoading(false);
    setPosts(data);
  }

  useEffect( () => {
    fetchPosts()
  }, [] )

  return (
    <View style={styles.container}>
      {loading ?
        <Text style={styles.loading}>Loading...</Text> :
        <FlatList
          style={styles.list}
          data={posts.filter(p => p.userId === userId)}
          keyExtractor={p => String(p.id)}
          renderItem={
            ({ item }) =>
              <ListItem
                onPress={() => navigation.navigate('Detail', { post_title: item.title, post_body: item.body, user_name: userName })}
                title={item.title} />
          }
        >
        </FlatList>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: 'stretch',
  },
  loading: {
    alignSelf: 'center',
    fontSize: 30,
  }
});