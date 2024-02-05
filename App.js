import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {DATA} from './Data';
import Row from './components/Row';
import { useEffect, useState } from 'react';
import Search from './components/Search';
  /*
  function renderItem({item}){
    return (<Text>{item.lastname}</Text>)
  }
*/

 /*
  const renderItem = ({item}) => (
    <Text>{item.lastname}</Text>
  )
  
*/
export default function App() {


const [items, setItems] =useState ([])


useEffect (() => {
    setItems(DATA)
}, [])

const executeSearch =(search) => {
  const searchArray = DATA.filter((item) => item.lastname.startsWith(search))
  setItems(searchArray)
}


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContent}></View>
        <View style={styles.searchContainer}></View>
      <Search executeSearch={executeSearch} />
      <FlatList
      data={items}
      renderItem = {({item}) => (
        <Row person={item}/>
      )}


      ></FlatList>
    </SafeAreaView>

  );
      }

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
        },
        centeredContent: {
          flex: 1,
          justifyContent: 'center', 
          alignItems: 'center', 
          width: '100%', 
        },
        searchContainer: {
          marginBottom: 20, 
        },
        flatListCenteredContent: {
          flexGrow: 1,
          justifyContent: 'center', 
        },
});
