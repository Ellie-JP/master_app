import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QrCodeReader from "./qrscreen.js";

export default function App() {
  return (
    <View style={styles.container}>
      <QrCodeReader/>
    </View>
  );
}



const styles = StyleSheet.create({
container: {
flex: 1,
paddingTop: 0,
},
body: {
},
});
