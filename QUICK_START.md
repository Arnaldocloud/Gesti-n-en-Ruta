# 🚀 Guía Rápida - Cómo Ejecutar el Prototipo

## Paso 1: Instalar Dependencias (Una sola vez)

Abre la terminal en el directorio del proyecto y ejecuta:

```bash
npm install
```

Esto descargará todas las librerías necesarias (~500MB). ☕ Tómate un café, puede tomar 3-5 minutos.

---

## Paso 2: Iniciar el Servidor

```bash
npm start
```

Verás algo como esto en la terminal:

```
Starting Expo server...
✓ Expo server started
✓ Metro bundler started
✓ TypeScript checking started

Waiting for connection from Expo Go or a browser...
```

---

## Paso 3: Abrir en tu Teléfono

### Opción A: Expo Go (Más Rápido) ⚡
1. Descarga la app **"Expo Go"** desde tu app store (iOS o Android)
2. Abre Expo Go
3. Escanea el código QR que ves en la terminal
4. ¡Listo! La app se abre automáticamente

### Opción B: Web (Sin App)
Si en la terminal ves la opción, presiona `w` para abrir en navegador web.

---

## Paso 4: Ver Cambios en Tiempo Real

Si haces cambios en los archivos TypeScript/JSX, la app **recarga automáticamente**. No necesitas reiniciar nada.

Prueba editando un color en `components/Header.tsx` y verás el cambio en segundos.

---

## 📁 Estructura de Archivos

```
propuesta-ecuador/
├── app/
│   ├── index.tsx          ← Pantalla principal (aquí están los datos)
│   ├── constants.ts       ← Colores, espaciados, emojis
│   └── types.ts           ← Tipos de TypeScript
├── components/
│   ├── Header.tsx         ← Nombre + métricas + estado conexión
│   ├── ClientList.tsx     ← Lista de clientes con estado
│   └── CTAButton.tsx      ← Botón principal + acciones secundarias
├── package.json           ← Dependencias del proyecto
├── tailwind.config.js     ← Configuración de estilos
├── app.json              ← Config de la app (nombre, versión)
└── README.md             ← Documentación completa
```

---

## 🎨 Personalizar los Datos

Todos los datos (nombre vendedor, clientes, etc.) están en `app/index.tsx`.

Para cambiar:

```typescript
// Línea 8-12: Datos del vendedor
const VENDOR_DATA = {
  name: 'Carlos Mendoza',  // ← Cambiar aquí
  salesAmount: 450.00,     // ← O aquí
  // ...
};

// Línea 15-50: Lista de clientes
const MOCK_CLIENTS: Client[] = [
  {
    id: '1',
    businessName: 'Comercial Los Andes',  // ← Cambiar aquí
    status: 'Visitado',                   // ← O aquí
    address: 'Av. Principal, Centro',
  },
  // ... más clientes
];
```

Guarda el archivo y verás los cambios en tu teléfono al instante.

---

## ⚙️ Troubleshooting

### "Cannot find module 'react'"
Esto es normal. Los errores rojo en VS Code aparecen hasta que ejecutas `npm install`. Ignóralos, la app funciona perfectamente.

### "Expo Go no conecta"
- Asegúrate de que teléfono y computadora están en la misma WiFi
- En la terminal, verifica que tu QR sea válido (debe ser un cuadrado)
- Intenta presionar `a` o `i` en la terminal para Android o iOS

### "Cambios no aparecen en el teléfono"
- Recarga la app: desliza hacia abajo desde arriba (en Expo Go)
- Si eso no funciona, presiona `r` en la terminal para reload completo

### "La app está muy lenta"
- Probablemente está en modo debug. Presiona `m` en la terminal para cambiar a modo producción

---

## 💡 Tips Útiles

1. **Ctrl+C** en la terminal detiene el servidor
2. **`npm start`** siempre lo reinicia
3. Los cambios en `package.json` requieren reiniciar (`npm install` + `npm start`)
4. Los cambios en código JSX/TypeScript recargan al instante
5. Usa `Alert` (React Native) para probar interacciones sin backend

---

## 🎯 Qué Mostrar al Cliente

1. La lista de clientes con sus estados (Pendiente/Visitado)
2. Las métricas de ventas ($450) y cobros ($300)
3. El badge Online/Offline (crucial para este modelo)
4. El botón principal "Registrar Venta/Cobro"
5. Los botones secundarios para Llamar y Mensaje

Explica que esto es solo el UI, y que el backend sincronizaría con la nube cuando hay conexión.

---

## ✅ Checklist Antes de Mostrar

- [ ] `npm install` completó sin errores
- [ ] `npm start` dice "Metro bundler started"
- [ ] La app abre en Expo Go
- [ ] Se ven todos los clientes en la lista
- [ ] El botón registra una venta (muestra alerta)
- [ ] Los colores son claros y legibles

¡Listo! 🎉
