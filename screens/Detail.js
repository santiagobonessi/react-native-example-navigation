import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({navigation}) => {
  const user = navigation.getParam('user_name');
  const title = navigation.getParam('post_title');
  const body = navigation.getParam('post_body');
    return (
      <View style={styles.container}>
        <Text style={styles.user}>{user}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 15,
    },
    user: {
      fontSize: 22,
      fontWeight: 'bold',
      alignSelf: 'stretch',
      textAlign: 'center',
      borderBottomWidth: 3,
      borderBottomColor: '#eee',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'stretch',
      borderBottomWidth: 2,
      borderBottomColor: '#eee',
    },
    body: {
      fontSize: 14,
    }
});