import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
