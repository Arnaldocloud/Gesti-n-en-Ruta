import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { TrendingUp, CreditCard, Banknote } from 'lucide-react-native';
import { useRouteContext } from '../../context/RouteContext';

export default function ReportsScreen() {
  const { clients } = useRouteContext();

  const totalExpected = clients.reduce((acc, client) => acc + client.loanTotal, 0);
  const totalBalance = clients.reduce((acc, client) => acc + client.balance, 0);
  const totalCollected = totalExpected - totalBalance;

  // Mocking the split for demo purposes
  const cashCollected = totalCollected * 0.7;
  const transferCollected = totalCollected * 0.3;
  const performancePct = totalExpected > 0 ? (totalCollected / totalExpected) * 100 : 0;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4 pt-4" contentContainerStyle={{ paddingBottom: 100 }}>
        
        <Text className="text-3xl font-extrabold text-gray-900 mb-6">Caja y Reportes</Text>
        
        <View className="bg-white rounded-3xl p-6 shadow-sm mb-6 border border-gray-100">
          <Text className="text-gray-500 font-bold text-xs tracking-wider mb-2">REPORTE DIARIO</Text>
          <Text className="text-4xl font-extrabold text-gray-900 mb-6">${totalCollected.toFixed(2)}</Text>
          
          <View className="flex-row justify-between mb-4">
            <View className="flex-row items-center">
              <View className="bg-emerald-100 p-2 rounded-lg mr-3">
                <Banknote color="#10B981" size={20} />
              </View>
              <View>
                <Text className="text-gray-500 text-xs font-medium">Efectivo (70%)</Text>
                <Text className="text-gray-900 font-bold text-lg">${cashCollected.toFixed(2)}</Text>
              </View>
            </View>
          </View>
          
          <View className="flex-row justify-between">
            <View className="flex-row items-center">
              <View className="bg-blue-100 p-2 rounded-lg mr-3">
                <CreditCard color="#007AFF" size={20} />
              </View>
              <View>
                <Text className="text-gray-500 text-xs font-medium">Transferencias (30%)</Text>
                <Text className="text-gray-900 font-bold text-lg">${transferCollected.toFixed(2)}</Text>
              </View>
            </View>
          </View>
        </View>

        <Text className="text-lg font-bold text-gray-900 mb-4 px-1">Rendimiento</Text>
        <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <View className="bg-emerald-50 p-3 rounded-full mr-4">
              <TrendingUp color="#10B981" size={24} />
            </View>
            <View>
              <Text className="text-gray-900 font-bold text-base">Avance de Meta</Text>
              <Text className="text-gray-500 text-sm">Vas un {performancePct.toFixed(0)}% sobre tu meta total</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
