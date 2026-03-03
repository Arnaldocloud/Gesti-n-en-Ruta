# 🔧 Guía de Extensión - Próximos Pasos

Esta es una base sólida que puede extenderse fácilmente. Aquí hay algunas ideas:

## 1. Agregar Persistencia Local (SQLite)

```bash
npm install expo-sqlite
```

Luego en `app/index.tsx`:

```typescript
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('vendedor.db');

// Guardar clientes localmente
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS clients (id TEXT PRIMARY KEY, name TEXT, status TEXT)',
    []
  );
});
```

## 2. Agregar Navegación con Expo Router

La app ya tiene `expo-router` instalado. Crear una segunda pantalla:

```typescript
// app/transactions.tsx
export default function TransactionsScreen() {
  return (
    <View>
      {/* Historial de transacciones */}
    </View>
  );
}
```

Luego en `app/index.tsx`, importar y navegar:

```typescript
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  
  return (
    <CTAButton
      onPress={() => router.push('/transactions')}
      label="Ver Historial"
    />
  );
}
```

## 3. Agregar Geolocalización

```bash
npm install expo-location
```

```typescript
import * as Location from 'expo-location';

const getCurrentLocation = async () => {
  const location = await Location.getCurrentPositionAsync();
  console.log(location.coords.latitude, location.coords.longitude);
};
```

## 4. Crear un Backend Simple (Node + Express)

```bash
npm init -y
npm install express cors body-parser
```

```javascript
// server.js
const express = require('express');
const app = express();

app.post('/api/sales', (req, res) => {
  // Guardar venta en DB
  res.json({ success: true });
});

app.listen(3000, () => console.log('Server running...'));
```

Conectar desde React Native:

```typescript
const registerSale = async () => {
  const response = await fetch('http://192.168.1.X:3000/api/sales', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ clientId: '1', amount: 100 })
  });
  const data = await response.json();
};
```

## 5. Agregar Autenticación

```bash
npm install @react-native-async-storage/async-storage
```

```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveToken = async (token: string) => {
  await AsyncStorage.setItem('authToken', token);
};

const getToken = async () => {
  return await AsyncStorage.getItem('authToken');
};
```

## 6. Agregar Gráficos/Estadísticas

```bash
npm install react-native-svg victory-native
```

```typescript
import { BarChart } from 'victory-native';

<BarChart
  data={[
    { x: 'Mon', y: 150 },
    { x: 'Tue', y: 200 },
    { x: 'Wed', y: 175 }
  ]}
/>
```

## 7. Agregar Cámara (Para Fotos de Recibos)

```bash
npm install expo-camera
```

```typescript
import * as ImagePicker from 'expo-image-picker';

const pickImage = async () => {
  const result = await ImagePicker.launchCameraAsync();
  console.log(result.assets[0].uri);
};
```

## 8. Agregar Notificaciones Push

```bash
npm install expo-notifications
```

```typescript
import * as Notifications from 'expo-notifications';

Notifications.scheduleNotificationAsync({
  content: {
    title: 'Recordatorio',
    body: 'Visitaste 3 de 7 clientes',
  },
  trigger: { seconds: 60 },
});
```

## 9. Agregar Sincronización Offline-to-Cloud

```typescript
import NetInfo from '@react-native-community/netinfo';

const checkConnection = async () => {
  const state = await NetInfo.fetch();
  if (state.isConnected) {
    // Sincronizar cambios locales con servidor
    syncLocalChanges();
  }
};
```

## 10. Mejorar el Diseño

- Agregar animaciones con `react-native-reanimated`
- Agregar mapas con `react-native-maps`
- Agregar iconos mejorados con `expo-font` + `@expo/vector-icons`

## 📊 Estructura Recomendada para Escalar

```
app/
├── (tabs)/
│   ├── index.tsx           (Home)
│   ├── transactions.tsx    (Historial)
│   └── reports.tsx        (Reportes)
├── auth/
│   └── login.tsx          (Login)
├── api/
│   ├── client.ts          (Client API calls)
│   ├── transaction.ts
│   └── auth.ts
├── hooks/
│   ├── useAuth.ts
│   ├── useClients.ts
│   └── useTransactions.ts
├── services/
│   ├── storage.ts         (Local storage)
│   ├── sync.ts           (Sincronización)
│   └── notifications.ts
└── utils/
    ├── formatting.ts      (Formato moneda, etc)
    └── validation.ts      (Validación forms)
```

## 🚀 Testing

Para agregar tests:

```bash
npm install jest @testing-library/react-native
```

```typescript
// __tests__/Header.test.tsx
import { render } from '@testing-library/react-native';
import { Header } from '../components/Header';

test('muestra el nombre del vendedor', () => {
  const { getByText } = render(
    <Header
      vendorName="Carlos"
      salesAmount={450}
      collectedAmount={300}
      isOnline={true}
    />
  );
  expect(getByText('Carlos')).toBeTruthy();
});
```

---

**Recomendación:** Implementa una característica a la vez. Comienza con persistencia local (SQLite) y luego agrega sincronización con backend.

¡Mucho éxito! 🚀
