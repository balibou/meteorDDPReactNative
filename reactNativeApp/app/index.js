'use strict';
import React, {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Text>Hello !</Text>
        </View>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  center: {
    alignItems: 'center'
  }
});
