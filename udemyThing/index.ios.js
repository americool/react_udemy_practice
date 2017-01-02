//PLACE CODE IN HERE FOR IOS

//IMPORT A LIBRARY TO IMPORT A Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a Component
const App = () => (
  //styling below probably not needed anymore 
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//Render to device
AppRegistry.registerComponent('udemyThing', () => App);


// in instructions album is replaced with  = udemyThing
