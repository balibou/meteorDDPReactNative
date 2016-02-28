'use strict';
import React, {
  AppRegistry,
  Component,
} from 'react-native';

import App from './app';

class reactNativeApp extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('reactNativeApp', () => reactNativeApp);

if (typeof process === 'undefined') process = {};
process.nextTick = setImmediate;

module.exports = process;
