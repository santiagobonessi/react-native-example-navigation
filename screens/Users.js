import React, {useEffect, useState} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ListItem from '../components/ListItem'; 

export default ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setLoading(false);
    setUsers(data);
  }

  useEffect( () => {
    fetchUsers()
  }, [] )

  return ( 
    <View style={styles.container}>
        {loading ? 
        <Text style={styles.loading}>Loading...</Text> : 
        <FlatList
        style={styles.list}
        data={users}
        keyExtractor={u => String(u.id)}
        renderItem={
          ({item}) => 
          <ListItem 
            onPress={() => navigation.navigate('Posts', {user_id: item.id, user_name: item.name})}  
            title ={item.name}/>
        }
        >
        </FlatList> }
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