/**
 * EJEMPLO DE EXTENSIÓN
 * 
 * Este archivo muestra cómo crear una pantalla adicional
 * que reutiliza los componentes existentes
 */

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Header } from '../components/Header';
import { CTAButton } from '../components/CTAButton';

interface Transaction {
  id: string;
  clientName: string;
  type: 'venta' | 'cobro';
  amount: number;
  timestamp: Date;
  notes?: string;
}

// Datos de ejemplo
const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    clientName: 'Comercial Los Andes',
    type: 'venta',
    amount: 150.00,
    timestamp: new Date(2026, 1, 28, 9, 30),
    notes: 'Jamón y salchichón',
  },
  {
    id: '2',
    clientName: 'Fiambrería El Sol',
    type: 'cobro',
    amount: 300.00,
    timestamp: new Date(2026, 1, 28, 10, 15),
    notes: 'Pago parcial de deuda',
  },
  {
    id: '3',
    clientName: 'Bodega Don Miguel',
    type: 'venta',
    amount: 200.00,
    timestamp: new Date(2026, 1, 28, 11, 0),
    notes: 'Venta de quesos variados',
  },
];

/**
 * Pantalla de Historial de Transacciones
 * 
 * Para usar esta pantalla en expo-router, crea:
 * app/transactions.tsx
 * 
 * E importa este componente:
 * export { default } from '../screens/TransactionsScreen';
 */
export default function TransactionsScreen() {
  const totalSales = MOCK_TRANSACTIONS
    .filter(t => t.type === 'venta')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalCollected = MOCK_TRANSACTIONS
    .filter(t => t.type === 'cobro')
    .reduce((sum, t) => sum + t.amount, 0);

  const [selectedTransaction, setSelectedTransaction] = useState<string | null>(null);

  const handleDeleteTransaction = (id: string) => {
    // Implementar lógica de eliminación
    console.log('Deleting transaction:', id);
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('es-EC', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <Header
        vendorName="Carlos Mendoza"
        salesAmount={totalSales}
        collectedAmount={totalCollected}
        isOnline={true}
      />

      {/* Transactions List */}
      <View className="flex-1 px-4 py-4">
        <Text className="text-lg font-bold text-gray-900 mb-4">
          Historial del Día ({MOCK_TRANSACTIONS.length})
        </Text>

        <FlatList
          data={MOCK_TRANSACTIONS}
          keyExtractor={(item) => item.id}
          scrollEnabled={true}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedTransaction(item.id)}
              className={`mb-3 p-4 rounded-lg border-l-4 ${
                item.type === 'venta'
                  ? 'bg-blue-50 border-blue-500'
                  : 'bg-green-50 border-green-500'
              }`}
            >
              {/* Row 1: Icon + Client Name + Amount */}
              <View className="flex-row items-center justify-between mb-2">
                <View className="flex-row items-center gap-2 flex-1">
                  <Text className="text-2xl">
                    {item.type === 'venta' ? '📦' : '💵'}
                  </Text>
                  <Text className="text-base font-semibold text-gray-900 flex-1">
                    {item.clientName}
                  </Text>
                </View>
                <Text className="text-base font-bold text-gray-900">
                  ${item.amount.toFixed(2)}
                </Text>
              </View>

              {/* Row 2: Time + Type */}
              <View className="flex-row items-center justify-between">
                <Text className="text-xs text-gray-500">
                  {formatTime(item.timestamp)}
                </Text>
                <View
                  className={`px-2 py-1 rounded ${
                    item.type === 'venta'
                      ? 'bg-blue-100'
                      : 'bg-green-100'
                  }`}
                >
                  <Text
                    className={`text-xs font-semibold ${
                      item.type === 'venta'
                        ? 'text-blue-700'
                        : 'text-green-700'
                    }`}
                  >
                    {item.type === 'venta' ? 'Venta' : 'Cobro'}
                  </Text>
                </View>
              </View>

              {/* Notes (si existen) */}
              {item.notes && (
                <Text className="text-xs text-gray-600 mt-2 italic">
                  "{item.notes}"
                </Text>
              )}
            </TouchableOpacity>
          )}
        />
      </View>

      {/* CTA - Nueva transacción */}
      <CTAButton
        label="Nueva Transacción"
        onPress={() => console.log('Agregar nueva transacción')}
        variant="success"
      />
    </View>
  );
}

/**
 * 📌 CÓMO USAR ESTE ARCHIVO
 * 
 * 1. Copia el contenido a `app/transactions.tsx` (o cualquier nombre)
 * 
 * 2. Si usas expo-router, puedes navegar desde HomeScreen:
 *    import { useRouter } from 'expo-router';
 *    
 *    const router = useRouter();
 *    
 *    <TouchableOpacity onPress={() => router.push('/transactions')}>
 *      <Text>Ver Historial</Text>
 *    </TouchableOpacity>
 * 
 * 3. Los datos son mock, pero puedes conectar a una BD real
 * 
 * 4. Personaliza los colores, iconos, etc. según necesites
 */
