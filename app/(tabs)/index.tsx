import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { MapPin, Phone, CreditCard, ChevronRight, User, MoreHorizontal, FileText, CheckCircle2, ChevronLeft } from 'lucide-react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { useRouteContext } from '../../context/RouteContext';
import PaymentModal from '../../components/ui/PaymentModal';

export default function RouteScreen() {
  const { clients, activeClientIndex, setActiveClientIndex, registerPayment } = useRouteContext();
  const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);
  
  const activeClient = clients[activeClientIndex];

  // Handlers for arrows
  const handlePrev = () => setActiveClientIndex(Math.max(0, activeClientIndex - 1));
  const handleNext = () => setActiveClientIndex(Math.min(clients.length - 1, activeClientIndex + 1));

  // Render Swipeable Right Actions
  const renderRightActions = () => (
    <View className="flex-row items-center h-full ml-2">
      <TouchableOpacity className="bg-emerald-500 justify-center items-center w-20 h-full rounded-l-2xl">
        <CreditCard color="#fff" size={24} />
      </TouchableOpacity>
      <TouchableOpacity className="bg-blue-500 justify-center items-center w-20 h-full rounded-r-2xl">
        <Phone color="#fff" size={24} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4 pt-4" contentContainerStyle={{ paddingBottom: 100 }}>
        
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-3xl font-extrabold text-gray-900">Ruta de Hoy</Text>
          <View className="bg-gray-200 px-3 py-1 rounded-full">
            <Text className="text-gray-700 font-bold text-xs">{clients.length} Clientes</Text>
          </View>
        </View>

        {/* Current Client Navigation */}
        <View className="flex-row justify-between items-center mb-3">
          <TouchableOpacity onPress={handlePrev} disabled={activeClientIndex === 0} className={`p-2 rounded-full ${activeClientIndex === 0 ? 'opacity-30' : 'bg-gray-200'}`}>
            <ChevronLeft color="#000" size={20} />
          </TouchableOpacity>
          <Text className="text-gray-500 font-bold text-sm tracking-widest uppercase">
            Cliente {activeClientIndex + 1} de {clients.length}
          </Text>
          <TouchableOpacity onPress={handleNext} disabled={activeClientIndex === clients.length - 1} className={`p-2 rounded-full ${activeClientIndex === clients.length - 1 ? 'opacity-30' : 'bg-gray-200'}`}>
            <ChevronRight color="#000" size={20} />
          </TouchableOpacity>
        </View>

        {/* Active Client Card */}
        <View className="bg-white rounded-3xl p-6 shadow-sm mb-6 border border-gray-100">
          <View className="flex-row justify-between items-center mb-5">
            <View>
              <Text className="text-2xl font-bold text-gray-900 mb-1">{activeClient.name}</Text>
              <View className="flex-row items-center">
                <MapPin color="#9CA3AF" size={14} />
                <Text className="text-sm text-gray-500 ml-1">ID: #{activeClient.id} - {activeClient.address}</Text>
              </View>
            </View>
            <View className="bg-blue-50 p-4 rounded-full">
              <User color="#007AFF" size={28} />
            </View>
          </View>
          
          {/* Finance Panel */}
          <View className="bg-gray-50 rounded-2xl p-4 flex-col border border-gray-100">
            <View className="flex-row justify-between mb-4">
              <View>
                <Text className="text-xs text-gray-500 font-medium mb-1">Préstamo Total</Text>
                <Text className="text-lg font-bold text-gray-900">${activeClient.loanTotal.toFixed(2)}</Text>
              </View>
              <View className="items-end">
                <Text className="text-xs text-gray-500 font-medium mb-1">Estado</Text>
                <View className={`px-2 py-1 rounded-md ${activeClient.status === 'Al día' ? 'bg-emerald-100' : activeClient.status === 'Atrasado' ? 'bg-red-100' : 'bg-amber-100'}`}>
                  <Text className={`text-xs font-bold ${activeClient.status === 'Al día' ? 'text-emerald-700' : activeClient.status === 'Atrasado' ? 'text-red-700' : 'text-amber-700'}`}>
                    {activeClient.status}
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex-row justify-between border-t border-gray-200 pt-3">
              <View>
                <Text className="text-xs text-gray-500 font-medium mb-1">Saldo Actual</Text>
                <Text className={`text-3xl font-extrabold ${activeClient.status === 'Atrasado' ? 'text-red-600' : 'text-emerald-600'}`}>
                  ${activeClient.balance.toFixed(2)}
                </Text>
              </View>
              <View className="items-end justify-end">
                <Text className="text-xs text-gray-500 font-medium mb-1">Cuota Diaria</Text>
                <Text className="text-xl font-bold text-gray-900">${activeClient.quota.toFixed(2)}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Action Buttons (Action Sheet triggers) */}
        <Text className="text-lg font-bold text-gray-900 mb-4 px-1">Acciones Rápidas</Text>
        <View className="flex-row flex-wrap justify-between mb-8 gap-y-3">
          <TouchableOpacity 
            onPress={() => setPaymentModalVisible(true)}
            className="bg-white items-center justify-center p-4 rounded-2xl w-[48%] shadow-sm border border-gray-100"
          >
            <CheckCircle2 color="#10B981" size={28} className="mb-2" />
            <Text className="text-gray-900 font-semibold">Registrar Pago</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white items-center justify-center p-4 rounded-2xl w-[48%] shadow-sm border border-gray-100">
            <FileText color="#007AFF" size={28} className="mb-2" />
            <Text className="text-gray-900 font-semibold">Ver Cuotas</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white items-center justify-center p-4 rounded-2xl w-[48%] shadow-sm border border-gray-100">
            <MapPin color="#F59E0B" size={28} className="mb-2" />
            <Text className="text-gray-900 font-semibold">Visita en Blanco</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white items-center justify-center p-4 rounded-2xl w-[48%] shadow-sm border border-gray-100">
            <Phone color="#007AFF" size={28} className="mb-2" />
            <Text className="text-gray-900 font-semibold">Llamar Cliente</Text>
          </TouchableOpacity>
        </View>

        {/* Swipeable List */}
        <Text className="text-lg font-bold text-gray-900 mb-4 px-1">Resto de la Ruta</Text>
        {clients.filter((_, i) => i !== activeClientIndex).map((client, index) => (
          <Swipeable key={client.id} renderRightActions={renderRightActions} overshootRight={false}>
            <View className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-3 flex-row justify-between items-center">
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center mr-3">
                  <User color="#9CA3AF" size={20} />
                </View>
                <View>
                  <Text className="text-gray-900 font-bold text-base">{client.name}</Text>
                  <Text className="text-gray-500 text-xs">Cuota: ${client.quota.toFixed(2)}</Text>
                </View>
              </View>
              <View className="flex-row items-center">
                <Text className={`font-bold mr-3 ${client.status === 'Atrasado' ? 'text-red-500' : 'text-gray-900'}`}>
                  ${client.balance.toFixed(2)}
                </Text>
                <ChevronRight color="#D1D5DB" size={20} />
              </View>
            </View>
          </Swipeable>
        ))}

      </ScrollView>

      {/* Floating Action Button (Alternative approach for global actions) */}
      <TouchableOpacity 
        className="absolute bottom-6 right-6 w-14 h-14 bg-[#007AFF] rounded-full items-center justify-center shadow-lg"
        style={{ shadowColor: '#007AFF', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 }}
      >
        <MoreHorizontal color="#FFF" size={24} />
      </TouchableOpacity>

      {/* Modals */}
      {activeClient && (
        <PaymentModal
          visible={isPaymentModalVisible}
          onClose={() => setPaymentModalVisible(false)}
          clientName={activeClient.name}
          onConfirm={(amount) => registerPayment(activeClient.id, amount)}
        />
      )}
    </SafeAreaView>
  );
}
