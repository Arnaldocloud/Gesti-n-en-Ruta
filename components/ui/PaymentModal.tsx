import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

type PaymentModalProps = {
  visible: boolean;
  onClose: () => void;
  onConfirm: (amount: number) => void;
  clientName: string;
};

export default function PaymentModal({ visible, onClose, onConfirm, clientName }: PaymentModalProps) {
  const [amount, setAmount] = useState('');

  const handleConfirm = () => {
    const numAmount = parseFloat(amount.replace(',', '.'));
    if (!isNaN(numAmount) && numAmount > 0) {
      onConfirm(numAmount);
      setAmount('');
      onClose();
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        <View className="flex-1 justify-end bg-black/40">
          <View className="bg-white rounded-t-3xl p-6 shadow-xl">
            <View className="items-center mb-6">
              <View className="w-12 h-1 bg-gray-300 rounded-full mb-4" />
              <Text className="text-xl font-bold text-gray-900">Registrar Pago</Text>
              <Text className="text-gray-500 mt-1 text-center">
                Ingresa el monto abonado por {clientName}
              </Text>
            </View>

            <View className="bg-gray-50 rounded-2xl flex-row items-center px-4 py-3 border border-gray-100 mb-6">
              <Text className="text-2xl font-bold text-gray-900 mr-2">$</Text>
              <TextInput
                className="flex-1 text-3xl font-extrabold text-gray-900"
                keyboardType="decimal-pad"
                autoFocus
                placeholder="0.00"
                placeholderTextColor="#D1D5DB"
                value={amount}
                onChangeText={setAmount}
              />
            </View>

            <View className="flex-row justify-between space-x-4">
              <TouchableOpacity 
                activeOpacity={0.7}
                onPress={onClose}
                className="flex-1 bg-gray-100 py-4 rounded-xl items-center"
              >
                <Text className="text-gray-700 font-bold text-lg">Cancelar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                activeOpacity={0.7}
                onPress={handleConfirm}
                className="flex-1 bg-emerald-500 py-4 rounded-xl items-center shadow-sm"
              >
                <Text className="text-white font-bold text-lg">Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
