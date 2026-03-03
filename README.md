# Vendedor de Rutas de Charcutería - Prototipo Móvil

Una aplicación React Native con Expo diseñada específicamente para vendedores de rutas de charcutería en Ecuador. La interfaz es clara, optimizada para uso con una mano y funciona completamente offline (con sincronización local).

## 🎯 Características Principales

### 1. **Encabezado Informativo**
- Nombre del vendedor
- Badge de estado de conexión (Online/Offline) - crucial para este modelo de negocio
- Métricas rápidas:
  - Ventas del día ($450.00)
  - Cobros recaudados ($300.00)

### 2. **Lista de Clientes**
- Visualización clara de negocios asignados para la ruta
- Nombres realistas de comercios ecuatorianos:
  - Comercial Los Andes
  - Fiambrería El Sol
  - Bodega Don Miguel
  - Supermercado Familia
  - Y más...
- Estados: **Pendiente** o **Visitado**
- Direcciones de ubicación

### 3. **Botón CTA Principal**
- Botón destacado "Registrar Venta/Cobro" con emoji 💰
- Botones secundarios rápidos para:
  - Llamar (📞)
  - Enviar mensaje (💬)
- Feedback visual durante la operación

## 🛠️ Stack Tecnológico

- **React Native** - Framework de desarrollo móvil
- **Expo** - Plataforma de desarrollo simplificada
- **NativeWind** - Tailwind CSS para React Native
- **TypeScript** - Type safety

## 📦 Instalación

### Requisitos Previos
- Node.js 18+ y npm
- Expo CLI instalado globalmente:
```bash
npm install -g expo-cli
```

### Pasos de Instalación

1. **Navega al directorio del proyecto:**
```bash
cd d:\proyectos\propuesta-ecuador
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Inicia el servidor de desarrollo:**
```bash
npm start
```

4. **Ejecuta en tu dispositivo:**

   **Para Android:**
   ```bash
   npm run android
   ```

   **Para iOS:**
   ```bash
   npm run ios
   ```

   **O usando Expo Go (Recomendado para demo rápida):**
   - Descarga la app "Expo Go" desde tu app store
   - Escanea el código QR que aparece en la terminal
   - La app se abrirá en tu teléfono inmediatamente

## 📱 Cómo Mostrar al Cliente

1. Ejecuta `npm start` en la terminal
2. Abre la app **Expo Go** en el teléfono del cliente
3. Escanea el código QR
4. ¡Voilà! El prototipo está funcionando en su teléfono

## 🎨 Diseño Optimizado para Uso Callejero

- **Interfaz de una sola pantalla**: Toda la información visible sin desplazamientos complejos
- **Uso con una mano**: Botones grandes, espaciado generoso
- **Alto contraste**: Colores vivos para visibilidad en exterior
- **Feedback inmediato**: La app responde de forma clara a cada acción
- **Indicador de conexión prominente**: Online/Offline visible en todo momento

## 📊 Datos Mock Incluidos

Los datos están completamente integrados en la app. No requiere backend ni API:

```typescript
// Vendedor
- Nombre: Carlos Mendoza
- Ventas Hoy: $450.00
- Cobros: $300.00
- Estado: Online

// Clientes (7 negocios ecuatorianos)
- 3 Visitados ✓
- 4 Pendientes 📍
```

## 🔧 Personalización

Para cambiar los datos de prueba, edita el archivo `app/index.tsx`:

```typescript
const VENDOR_DATA = {
  name: 'Tu Nombre',
  salesAmount: 500.00,
  collectedAmount: 400.00,
  isOnline: true,
};

const MOCK_CLIENTS: Client[] = [
  // Añade tus clientes aquí
];
```

## 📈 Próximos Pasos

Esta es una base sólida que puedes expandir con:
- Persistencia local con SQLite
- Sincronización con API backend
- Módulo de cobros y pagos
- Reportes y estadísticas
- Geolocalización
- Historial de transacciones

## 📝 Notas Técnicas

- La app usa **NativeWind** (Tailwind en React Native) para styling
- Los componentes son totalmente reutilizables
- TypeScript proporciona type safety
- Completamente compatible con Expo Go (sin necesidad de build nativo)

## 🚀 Próximo Comando para Ejecutar

```bash
npm install && npm start
```

¡Listo! Tu prototipo estará funcionando en segundos.
