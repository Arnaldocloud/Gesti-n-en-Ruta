import React from 'react';
import { View, Text, SectionList, TouchableOpacity, SafeAreaView, Switch } from 'react-native';
import { Cloud, WifiOff, FileText, ChevronRight, User, LogOut, Bell } from 'lucide-react-native';
import { useRouteContext } from '../../context/RouteContext';

const SETTINGS_SECTIONS = [
  {
    title: 'OPERACIONES',
    data: [
      { id: '1', title: 'Sincronizar Datos', icon: <Cloud color="#007AFF" size={20} />, type: 'button' },
      { id: '2', title: 'Modo Fuera de Línea', icon: <WifiOff color="#F59E0B" size={20} />, type: 'switch', value: false },
    ],
  },
  {
    title: 'PREFERENCIAS',
    data: [
      { id: '3', title: 'Registro de Gastos', icon: <FileText color="#10B981" size={20} />, type: 'button' },
      { id: '4', title: 'Notificaciones', icon: <Bell color="#EF4444" size={20} />, type: 'switch', value: true },
      { id: '5', title: 'Mi Cuenta', icon: <User color="#6366F1" size={20} />, type: 'button' },
    ],
  },
  {
    title: 'SESIÓN',
    data: [
      { id: '6', title: 'Cerrar Sesión', icon: <LogOut color="#EF4444" size={20} />, type: 'button', destructive: true },
    ],
  },
];

export default function SettingsScreen() {
  const { isOfflineMode, setOfflineMode } = useRouteContext();

  const renderItem = ({ item, index, section }: any) => {
    const isFirst = index === 0;
    const isLast = index === section.data.length - 1;

    return (
      <View
        className={`bg-white flex-row items-center justify-between px-4 py-3 border-gray-100 ${
          isFirst ? 'rounded-t-2xl' : ''
        } ${isLast ? 'rounded-b-2xl border-b-0' : 'border-b'}`}
      >
        <View className="flex-row items-center">
          <View className="w-8 h-8 rounded-lg items-center justify-center bg-gray-50 mr-3">
            {item.icon}
          </View>
          <Text className={`text-base font-medium ${item.destructive ? 'text-red-500' : 'text-gray-900'}`}>
            {item.title}
          </Text>
        </View>

        {item.type === 'switch' ? (
          <Switch 
            value={item.id === '2' ? isOfflineMode : item.value} 
            onValueChange={(val) => {
              if (item.id === '2') {
                setOfflineMode(val);
              }
            }} 
            trackColor={{ true: '#34C759' }} 
          />
        ) : (
          <ChevronRight color="#C7C7CC" size={20} />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="px-4 pt-4 flex-1">
        <Text className="text-3xl font-extrabold text-gray-900 mb-6">Ajustes</Text>
        
        <SectionList
          sections={SETTINGS_SECTIONS}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title } }) => (
            <Text className="text-gray-500 text-xs font-semibold mt-6 mb-2 ml-4">
              {title}
            </Text>
          )}
          contentContainerStyle={{ paddingBottom: 120 }}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
