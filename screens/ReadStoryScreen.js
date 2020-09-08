import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Flatlist,StyleSheet } from 'react-native';
import {SearchBar } from 'react-native-elements'

export default class ReadStory extends React.Component {

state ={
  search: "",
}; 

updateSearch =(search)=>{
  this.setState({ search });
};

render(){
  const {search} =this.state
  return(
   <View style={styles.container}>
      <Text>Read Story</Text>

      <SearchBar 
      placeholder ="Type Here..."
      onChangeText={this.updateSearch}
      value={search}
      />
    </View>
  );
}
  
    }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    
  });