'use strict';

import React, {
View,
Text,
StyleSheet
} from 'react-native';

import DDPClient from 'ddp-client';
let ddpClient = new DDPClient({
  host: 'localhost',
  port: '3000'
});

export default React.createClass({
  getInitialState() {
    return {
      connected: false,
      tasks: {}
    }
  },

  componentDidMount() {
    ddpClient.connect((err, wasReconnect) => {
      let connected = true;
      if (err) connected = false;

      this.setState({ connected: connected });
      this.makeSubscription();
      this.observeTasks();
    });
  },

  observeTasks() {
    let observer = ddpClient.observe("tasks");
    observer.added = (id) => {
      this.setState({tasks: ddpClient.collections.tasks})
    }
    observer.changed = (id, oldFields, clearedFields, newFields) => {
      this.setState({tasks: ddpClient.collections.tasks})
    }
    observer.removed = (id, oldValue) => {
      this.setState({tasks: ddpClient.collections.tasks})
    }
  },

  makeSubscription() {
    ddpClient.subscribe("tasks", [], () => {
      this.setState({tasks: ddpClient.collections.tasks});
    });
  },

  render() {
    let count = Object.keys(this.state.tasks).length;
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Text>Count: {count}</Text>
        </View>
      </View>
    );
  }
});

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
