# 🔧 GUÍA DE MANTENIMIENTO Y TROUBLESHOOTING

## 🐛 Errores Comunes en VS Code

### Error: "Cannot find module 'react'"
```
Estado: Normal antes de npm install
Solución: Ejecuta `npm install` en terminal
¿Bloquea ejecución?: NO, solo afecta linting en editor
```

### Error: "JSX tag requires nativewind/jsx-runtime"
```
Estado: Esperado sin node_modules instalados
Solución: Ejecuta `npm install` (se instala automáticamente)
¿Bloquea ejecución?: NO
```

## 🚀 Problemas al Ejecutar

### Problema: "Metro bundler failed"
```
Síntomas: `npm start` se detiene con error
Solución 1: Presiona Ctrl+C y intenta de nuevo
Solución 2: Borra `node_modules` y `.expo`, luego `npm install`
Solución 3: Limpia caché: `npm cache clean --force`
```

### Problema: "Expo Go no conecta"
```
Síntomas: Escanea QR pero dice "Conexión rechazada"
Razón: Teléfono y PC en diferente WiFi
Solución 1: Conéctate a la misma red WiFi
Solución 2: Conecta por USB (adb tunnel)
Solución 3: Usa emulador Android en tu PC
```

### Problema: "Código QR no aparece"
```
Síntomas: `npm start` termina sin código QR
Razón: Puerto 19000 ocupado u otro proceso de Expo activo
Solución 1: Mata proceso anterior: `lsof -i :19000` (macOS/Linux)
         o: Busca `expo` en Task Manager y termina (Windows)
Solución 2: Usa puerto diferente: `expo start --port 19002`
Solución 3: Reinicia computadora
```

### Problema: "Cambios no aparecen en la app"
```
Síntomas: Editas código pero app no actualiza
Razón 1: HMR (Hot Module Reload) desactivado
Solución: En Expo Go, desliza de arriba para recargar
Razón 2: Cambio en package.json o configuración
Solución: Presiona Ctrl+C, `npm install`, `npm start`
```

## 🔄 Flujo de Desarrollo Normal

```
1. Abro app/index.tsx
2. Cambio un dato (ej: nombre vendedor)
3. Presiono Ctrl+S
4. ¡En menos de 1 segundo, aparece en el teléfono!

Si no funciona:
→ Presiona Ctrl+C en terminal
→ Presiona `r` en terminal (reload)
→ En Expo Go, desliza de arriba
```

## 📦 Dependencias Instaladas

```json
{
  "expo": "~51.0.0",           // Plataforma de desarrollo
  "react": "18.2.0",           // UI framework
  "react-native": "0.74.1",    // Framework móvil
  "nativewind": "^2.0.11",     // Tailwind para React Native
  "tailwindcss": "3.3.0",      // Sistema de estilos
  "typescript": "~5.3.3"       // Type safety
}
```

## 🎯 Cómo Agregar una Nueva Librería

```bash
# Instalar
npm install nombre-del-paquete

# Si necesita configuración especial
expo prebuild

# Reiniciar
npm start
```

**Ejemplo:** Agregar iconos
```bash
npm install @expo/vector-icons
# Ya viene incluido en Expo, ¡no necesitas hacer nada más!
```

## 🗑️ Limpiar el Proyecto

```bash
# Opción 1: Limpiar parcialmente
rm -rf .expo node_modules package-lock.json
npm install

# Opción 2: Reset total (como nuevo)
rm -rf .expo node_modules package-lock.json .next
npm install
npm start
```

## 📱 Cambiar Entre Dispositivos

```bash
# Ejecutar en Android
npm run android

# Ejecutar en iOS (solo en Mac)
npm run ios

# Ejecutar en Web
npm run web

# Volver a Expo Go (el que usamos)
npm start
```

## 🔐 Seguridad

### Nunca commits sin .gitignore
```bash
# El .gitignore ya está configurado con:
- node_modules/
- .expo/
- .env files
- Keys y tokens
```

### Proteger datos sensibles
```typescript
// ❌ NUNCA
const API_KEY = "abc123xyz";

// ✅ SIEMPRE
import { config } from 'dotenv';
const API_KEY = process.env.API_KEY;
```

## 🧪 Testing (Futuro)

Cuando necesites agregar tests:
```bash
npm install jest @testing-library/react-native

# Crear test
touch __tests__/Header.test.tsx

# Ejecutar
npm test
```

## 📊 Debugging

### Ver logs en terminal
```bash
# Los console.log aparecen en terminal automaticamente
console.log('Esto aparece en terminal mientras desarrollo');
```

### Debugger de React Native
```typescript
// Presiona Ctrl+M en Expo Go Android
// o Cmd+D en Expo Go iOS
// Selecciona "Debugger" para abrir Chrome Dev Tools
```

### Slow Motion
```
Expo Go → Menu (Ctrl+M) → Slow/Slow Animations
(Útil para ver animaciones en detalle)
```

## 💾 Guardar Datos Localmente (Futuro)

Cuando agregues persistencia:
```bash
npm install @react-native-async-storage/async-storage
# O
npm install expo-sqlite
```

## ☁️ Deploy (Futuro)

Cuando quieras publicar en App Store:
```bash
expo build:android    # Google Play Store
expo build:ios        # Apple App Store
```

## 📈 Performance

### Checklist de optimización
- [ ] Usar React.memo en componentes pesados
- [ ] Usar FlatList en listas largas (ya lo hacemos)
- [ ] Lazy load imágenes si las hay
- [ ] Usar useCallback para funciones de evento

## 🎓 Recursos Útiles

```
React Native:     https://reactnative.dev/docs
Expo:             https://docs.expo.dev
NativeWind:       https://www.nativewind.dev
Tailwind:         https://tailwindcss.com/docs
TypeScript:       https://www.typescriptlang.org/docs
```

## 📞 Cuando Necesites Ayuda

1. **Error específico:** Googlea el error
2. **Documentación:** Ve a las URLs arriba
3. **Stack Overflow:** Busca con tags [react-native] [expo]
4. **Comunidad Expo:** Discord oficial de Expo
5. **GitHub Issues:** Busca en repositorio oficial

## ✨ Tips Pro

```typescript
// 1. Usar React.memo para evitar re-renders
const MiComponente = React.memo(({ prop }) => {
  return <Text>{prop}</Text>;
});

// 2. Usar useCallback para funciones estables
const handlePress = useCallback(() => {
  console.log('Botón presionado');
}, []);

// 3. Usar FlatList en lugar de map() para listas
<FlatList
  data={items}
  renderItem={({ item }) => <Item item={item} />}
  keyExtractor={(item) => item.id}
/>

// 4. Destructurar props para claridad
const Header = ({ name, sales, isOnline }: HeaderProps) => {
  // ...
};

// 5. Comentar código complejo
// Este componente maneja la sincronización offline
// y cubre tres casos: online, offline-pendiente, error
```

## 🚀 Próximo Developer

Si alguien más trabaja en esto:
1. Lee `START_HERE.md`
2. Lee `QUICK_START.md`
3. Ejecuta `npm install && npm start`
4. Abre `app/index.tsx` para entender datos
5. Abre `components/` para entender componentes
6. Consulta `DESIGN.md` para cambios estilísticos
7. Consulta `NEXT_STEPS.md` para expansión

---

**Última actualización:** 28 de Febrero, 2026
**Mantenida por:** Equipo de desarrollo
