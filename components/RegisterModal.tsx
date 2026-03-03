import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { ROUTE_CLIENTS } from '../data/mockData';

interface RegisterModalProps {
  visible: boolean;
  onClose: () => void;
  preselectedClientId?: string;
}

type TransactionType = 'venta' | 'cobro';

export default function RegisterModal({
  visible,
  onClose,
  preselectedClientId,
}: RegisterModalProps) {
  const [txType, setTxType] = useState<TransactionType>('venta');
  const [selectedClientId, setSelectedClientId] = useState(
    preselectedClientId ?? ROUTE_CLIENTS[0].id
  );
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');

  const selectedClient = ROUTE_CLIENTS.find((c) => c.id === selectedClientId);

  const handleConfirm = () => {
    const parsedAmount = parseFloat(amount);
    if (!amount || isNaN(parsedAmount) || parsedAmount <= 0) {
      Alert.alert('Monto inválido', 'Ingresa un monto mayor a $0.00');
      return;
    }
    Alert.alert(
      '✅ Registrado',
      `${txType === 'venta' ? 'Venta' : 'Cobro'} de $${parsedAmount.toFixed(2)} para ${selectedClient?.name} registrado exitosamente.`,
      [{ text: 'OK', onPress: onClose }]
    );
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        {/* Backdrop */}
        <TouchableOpacity
          className="flex-1 bg-black/50"
          activeOpacity={1}
          onPress={onClose}
        />

        {/* Sheet */}
        <View className="bg-white rounded-t-3xl px-5 pt-4 pb-8">
          {/* Handle */}
          <View className="self-center w-10 h-1 rounded-full bg-gray-300 mb-5" />

          <Text className="text-xl font-bold text-gray-900 mb-4">
            Registrar Transacción
          </Text>

          {/* Type Toggle */}
          <View className="flex-row bg-gray-100 rounded-xl p-1 mb-5">
            {(['venta', 'cobro'] as TransactionType[]).map((type) => (
              <TouchableOpacity
                key={type}
                onPress={() => setTxType(type)}
                className={`flex-1 py-3 rounded-lg items-center ${
                  txType === type
                    ? type === 'venta'
                      ? 'bg-blue-600'
                      : 'bg-emerald-500'
                    : 'bg-transparent'
                }`}
              >
                <Text
                  className={`font-bold text-sm ${
                    txType === type ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  {type === 'venta' ? '📦  Venta' : '💵  Cobro'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Client Picker */}
          <Text className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
            Cliente
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-5"
          >
            {ROUTE_CLIENTS.map((client) => (
              <TouchableOpacity
                key={client.id}
                onPress={() => setSelectedClientId(client.id)}
                className={`mr-2 px-4 py-2 rounded-full border ${
                  selectedClientId === client.id
                    ? 'bg-blue-600 border-blue-600'
                    : 'bg-white border-gray-300'
                }`}
              >
                <Text
                  className={`text-sm font-medium ${
                    selectedClientId === client.id
                      ? 'text-white'
                      : 'text-gray-700'
                  }`}
                  numberOfLines={1}
                >
                  {client.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Amount */}
          <Text className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
            Monto (USD)
          </Text>
          <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-3 mb-4">
            <Text className="text-xl font-bold text-gray-400 mr-2">$</Text>
            <TextInput
              className="flex-1 text-2xl font-bold text-gray-900"
              placeholder="0.00"
              placeholderTextColor="#9CA3AF"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
            />
          </View>

          {/* Notes */}
          <Text className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
            Nota (opcional)
          </Text>
          <TextInput
            className="bg-gray-100 rounded-xl px-4 py-3 text-base text-gray-800 mb-6"
            placeholder="Ej: Jamón serrano, queso manchego..."
            placeholderTextColor="#9CA3AF"
            value={notes}
            onChangeText={setNotes}
            multiline
            numberOfLines={2}
          />

          {/* Confirm */}
          <TouchableOpacity
            onPress={handleConfirm}
            className={`py-4 rounded-2xl items-center ${
              txType === 'venta' ? 'bg-blue-600' : 'bg-emerald-500'
            }`}
            activeOpacity={0.85}
          >
            <Text className="text-white text-lg font-bold">
              {txType === 'venta' ? '✅  Confirmar Venta' : '✅  Confirmar Cobro'}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
