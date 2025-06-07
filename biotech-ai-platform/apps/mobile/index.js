import {AppRegistry} from 'react-native';
import App from './App'; // Ensure this path is correct if App.tsx is in src
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
