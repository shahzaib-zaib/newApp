import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



class App extends React.Component {
  render() {
    const diap = ['eat', 'sleep', 'code'];
    return (
      <View style={styles.container}>
          <Text>Hello</Text>
        </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
