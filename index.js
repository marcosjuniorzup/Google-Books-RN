import { AppRegistry } from 'react-native'
import HomeScreen from 'src/screens/home'
import ListScreen from 'src/screens/list'
import DetailScreen from 'src/screens/detail'
import App from 'src/'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)
