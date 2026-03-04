import 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RouteProvider } from '../context/RouteContext';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RouteProvider>
        <StatusBar style="light" />
        <Stack screenOptions={{ headerShown: false }} />
      </RouteProvider>
    </GestureHandlerRootView>
  );
}
