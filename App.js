import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {['One', 'Two', 'Three'].map(
          (num) => (
            <View style={styles.item} key={num}>
              <Text>{`Item ${num}`}</Text>
            </View>
          )
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4f4',
    width: '50%',
    height: '10%',
    marginVertical: '1%',
  },
});
