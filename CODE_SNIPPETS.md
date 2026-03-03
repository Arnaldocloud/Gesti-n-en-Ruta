/**
 * REFERENCIA RÁPIDA - Snippets de Código Útiles
 * 
 * Copia y pega estos ejemplos para agregar funcionalidades comunes
 */

// ============================================================
// 1. MOSTRAR UN ALERT (Aviso/Notificación)
// ============================================================

import { Alert } from 'react-native';

Alert.alert(
  'Título',
  'Mensaje detallado',
  [
    { text: 'Cancelar', onPress: () => {}, style: 'cancel' },
    { text: 'Aceptar', onPress: () => console.log('OK!') },
  ]
);

// ============================================================
// 2. ESTADO LOCAL CON HOOKS
// ============================================================

import { useState } from 'react';

export function MyComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <TouchableOpacity onPress={() => setCount(count + 1)}>
      <Text>Presionado {count} veces</Text>
    </TouchableOpacity>
  );
}

// ============================================================
// 3. CAMBIAR ENTRE ONLINE/OFFLINE
// ============================================================

const [isOnline, setIsOnline] = useState(true);

// Simular desconexión
const toggleConnection = () => {
  setIsOnline(!isOnline);
  Alert.alert(isOnline ? 'Desconectado' : 'Conectado');
};

// ============================================================
// 4. FILTRAR CLIENTES (Por estado)
// ============================================================

const pendingClients = MOCK_CLIENTS.filter(c => c.status === 'Pendiente');
const visitedClients = MOCK_CLIENTS.filter(c => c.status === 'Visitado');

// ============================================================
// 5. CONTAR CLIENTES
// ============================================================

const totalClients = MOCK_CLIENTS.length;
const pendingCount = MOCK_CLIENTS.filter(c => c.status === 'Pendiente').length;
const visitedCount = totalClients - pendingCount;

// ============================================================
// 6. SUMAR MONTOS (Sales, Collected)
// ============================================================

interface Transaction {
  clientId: string;
  amount: number;
  type: 'venta' | 'cobro';
}

const transactions: Transaction[] = [
  { clientId: '1', amount: 100, type: 'venta' },
  { clientId: '2', amount: 200, type: 'cobro' },
];

const totalSales = transactions
  .filter(t => t.type === 'venta')
  .reduce((sum, t) => sum + t.amount, 0);

// ============================================================
// 7. FORMATO DE MONEDA
// ============================================================

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-EC', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

// Uso:
console.log(formatCurrency(450.00)); // $450.00

// ============================================================
// 8. FORMATO DE FECHA
// ============================================================

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('es-EC', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

// Uso:
console.log(formatDate(new Date())); // 28 de febrero de 2026, 10:30

// ============================================================
// 9. HACER UNA LLAMADA TELEFÓNICA
// ============================================================

import { Linking } from 'react-native';

const makeCall = (phoneNumber: string) => {
  Linking.openURL(`tel:${phoneNumber}`);
};

// Uso:
makeCall('+593912345678');

// ============================================================
// 10. ENVIAR UN SMS
// ============================================================

const sendSMS = (phoneNumber: string, message: string) => {
  Linking.openURL(`sms:${phoneNumber}?body=${encodeURIComponent(message)}`);
};

// Uso:
sendSMS('+593912345678', 'Hola, soy tu vendedor');

// ============================================================
// 11. ABRIR UN MAPA (Dirección)
// ============================================================

const openMaps = (address: string) => {
  const encodedAddress = encodeURIComponent(address);
  Linking.openURL(`https://maps.google.com/?q=${encodedAddress}`);
};

// Uso:
openMaps('Comercial Los Andes, Quito');

// ============================================================
// 12. GUARDAR DATO EN LOCAL STORAGE
// ============================================================

import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar
const saveData = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

// Obtener
const getData = async (key: string) => {
  const value = await AsyncStorage.getItem(key);
  return value;
};

// Usar en un efecto
useEffect(() => {
  const loadVendorName = async () => {
    const name = await getData('vendorName');
    if (name) setVendorName(name);
  };
  loadVendorName();
}, []);

// ============================================================
// 13. BORRAR DATOS LOCALES
// ============================================================

const clearAllData = async () => {
  await AsyncStorage.clear();
};

// ============================================================
// 14. HACER UN FETCH A API EXTERNA
// ============================================================

const fetchClients = async () => {
  try {
    const response = await fetch('https://api.example.com/clients');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};

// Con async/await en componente
useEffect(() => {
  const loadData = async () => {
    const clients = await fetchClients();
    setClients(clients);
  };
  loadData();
}, []);

// ============================================================
// 15. VALIDAR EMAIL
// ============================================================

const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// ============================================================
// 16. GENERAR ID ÚNICO
// ============================================================

const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// ============================================================
// 17. AGREGAR CLIENTE A LA LISTA (Inmutable)
// ============================================================

const addClient = (newClient: Client) => {
  setClients([...MOCK_CLIENTS, newClient]);
};

// ============================================================
// 18. ACTUALIZAR CLIENTE
// ============================================================

const updateClient = (id: string, updates: Partial<Client>) => {
  const updated = MOCK_CLIENTS.map(client =>
    client.id === id ? { ...client, ...updates } : client
  );
  setClients(updated);
};

// Uso:
updateClient('1', { status: 'Visitado' });

// ============================================================
// 19. ELIMINAR CLIENTE
// ============================================================

const deleteClient = (id: string) => {
  setClients(MOCK_CLIENTS.filter(client => client.id !== id));
};

// ============================================================
// 20. DEBOUNCE (Para búsqueda, por ejemplo)
// ============================================================

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

// Uso:
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearchTerm = useDebounce(searchTerm, 500);

// ============================================================
// 21. CARGAR LOGO/IMAGEN
// ============================================================

import { Image } from 'react-native';

<Image
  source={require('../assets/logo.png')}
  style={{ width: 100, height: 100 }}
/>

// O desde URL
<Image
  source={{ uri: 'https://example.com/logo.png' }}
  style={{ width: 100, height: 100 }}
/>

// ============================================================
// 22. OCULTAR TECLADO
// ============================================================

import { Keyboard } from 'react-native';

Keyboard.dismiss();

// ============================================================
// 23. THEME CLARO/OSCURO
// ============================================================

const [isDarkMode, setIsDarkMode] = useState(false);

const theme = {
  colors: {
    background: isDarkMode ? '#1a1a1a' : '#ffffff',
    text: isDarkMode ? '#ffffff' : '#000000',
  }
};

<View style={{ backgroundColor: theme.colors.background }}>
  <Text style={{ color: theme.colors.text }}>Mi texto</Text>
</View>

// ============================================================

/**
 * 🔗 RECURSOS ÚTILES
 * 
 * - React Native Docs: https://reactnative.dev/docs/getting-started
 * - Expo Docs: https://docs.expo.dev
 * - NativeWind: https://www.nativewind.dev
 * - Tailwind: https://tailwindcss.com/docs
 */
