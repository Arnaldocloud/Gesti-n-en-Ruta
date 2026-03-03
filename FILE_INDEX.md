# 📖 ÍNDICE DE ARCHIVOS - Qué Leer y Cuándo

## 🚀 PRIMERO (Antes de Empezar)

**`QUICK_START.md`** - ⭐ LEER PRIMERO
- Cómo ejecutar la app en 3 pasos
- Troubleshooting básico
- Duración: 5 min

**`README.md`** - Información General
- Descripción del proyecto
- Stack tecnológico
- Cómo mostrar al cliente
- Duración: 10 min

## 📁 ESTRUCTURA DEL CÓDIGO

**`app/index.tsx`** - Pantalla Principal
- Toda la UI está aquí
- Datos mock (vendedor + clientes)
- Botones e interacciones
- Líneas: ~80

**`components/Header.tsx`** - Encabezado
- Nombre vendedor
- Métricas ($450, $300)
- Badge Online/Offline
- Líneas: ~60

**`components/ClientList.tsx`** - Lista de Clientes
- Muestra los 7 clientes
- Estados: Pendiente/Visitado
- ScrollView integrado
- Líneas: ~60

**`components/CTAButton.tsx`** - Botón Principal
- "Registrar Venta/Cobro"
- Botones secundarios (Llamar, Mensaje)
- Estados y feedback
- Líneas: ~50

**`components/Badge.tsx`** - Componente Reutilizable
- Para etiquetas y estados
- Múltiples variantes
- Líneas: ~40

## 📊 CONFIGURACIÓN

**`package.json`** - Dependencias
- React Native, Expo, NativeWind
- Scripts para ejecutar
- Duración de instalación: 5 min

**`tailwind.config.js`** - Estilos
- Colores personalizados
- Extensiones de tema

**`app.json`** - Configuración App
- Nombre, versión
- Plataformas (iOS, Android)

**`tsconfig.json`** - TypeScript Config
- Tipo checking
- JSX compilation

**`babel.config.js`** - Transpiler
- NativeWind support
- Preset Expo

**`metro.config.js`** - Bundler
- Configuración de Expo Metro

**`.gitignore`** - Git Config
- Archivos a ignorar

## 📚 DOCUMENTACIÓN

**`VISUAL_PREVIEW.md`** - Cómo Se Verá
- ASCII art de la UI
- Colores reales
- Estados e interacciones
- Duración: 5 min

**`DESIGN.md`** - Especificaciones de Diseño
- Paleta de colores
- Tipografía
- Espaciado
- Layout técnico

**`NEXT_STEPS.md`** - Cómo Expandir
- Ideas de features
- Código de ejemplo
- SQLite, Backend, Mapas, etc.
- Duración: 15 min

**`CODE_SNIPPETS.md`** - Ejemplos de Código
- 20 snippets reutilizables
- Llamadas, SMS, datos locales
- Copiar-pegar listo

**`EXAMPLE_SCREEN.tsx`** - Pantalla de Ejemplo
- Segunda pantalla funcional
- Historial de transacciones
- Cómo integrar

**`FINAL_CHECKLIST.md`** - Validación
- Todo completado ✓
- Qué mostrar al cliente
- Troubleshooting avanzado

## 🎯 POR CASO DE USO

### "Quiero ejecutar la app AHORA"
1. `QUICK_START.md` → Paso a paso
2. Terminal: `npm install && npm start`
3. Escanea QR con Expo Go
4. ✓ Listo

### "Quiero entender qué hace"
1. `README.md` → Overview
2. `VISUAL_PREVIEW.md` → Cómo se ve
3. `DESIGN.md` → Cómo está hecho

### "Quiero cambiar los datos"
1. Abre `app/index.tsx`
2. Busca `VENDOR_DATA` (línea 8)
3. Busca `MOCK_CLIENTS` (línea 15)
4. Edita y guarda
5. App recarga automáticamente

### "Quiero agregar features"
1. `NEXT_STEPS.md` → Ideas de qué agregar
2. `CODE_SNIPPETS.md` → Copiar ejemplos de código
3. `EXAMPLE_SCREEN.tsx` → Ver pantalla adicional
4. Edita componentes según necesites

### "Algo no funciona"
1. `FINAL_CHECKLIST.md` → Troubleshooting
2. `QUICK_START.md` → Tips útiles
3. Presiona `r` en terminal para reload

## 📱 ARCHIVOS DE CÓDIGO

```
app/
├── index.tsx          ← Pantalla principal (EDITAR AQUÍ para datos)
├── constants.ts       ← Colores, espaciados
└── types.ts           ← Interfaces TypeScript

components/
├── Header.tsx         ← Encabezado
├── ClientList.tsx     ← Lista clientes
├── CTAButton.tsx      ← Botón principal
└── Badge.tsx          ← Componente reutilizable

Root:
├── package.json       ← Dependencias (NO EDITAR sin npm)
├── app.json           ← Config app
├── tailwind.config.js ← Estilos
├── tsconfig.json      ← TypeScript
├── babel.config.js    ← Transpiler
├── metro.config.js    ← Bundler
└── .gitignore         ← Git config
```

## 🔍 REFERENCIAS RÁPIDAS

**Cambiar nombre vendedor:**
```
app/index.tsx, línea 8: "Carlos Mendoza"
```

**Cambiar ventas del día:**
```
app/index.tsx, línea 10: "salesAmount: 450.00"
```

**Cambiar cobros:**
```
app/index.tsx, línea 11: "collectedAmount: 300.00"
```

**Cambiar cliente:**
```
app/index.tsx, línea 15-50: MOCK_CLIENTS array
```

**Cambiar color primario:**
```
tailwind.config.js, línea 7: "#3b82f6"
```

**Cambiar badge Online/Offline:**
```
app/index.tsx, línea 12: "isOnline: true/false"
```

## ⏱️ TIEMPOS DE LECTURA

- **QUICK_START.md**: 3-5 min
- **README.md**: 5 min
- **VISUAL_PREVIEW.md**: 5 min
- **DESIGN.md**: 8 min
- **NEXT_STEPS.md**: 10 min
- **CODE_SNIPPETS.md**: 5 min (solo consulta)
- **FINAL_CHECKLIST.md**: 5 min

**Total recomendado:** 20-30 min antes de mostrar al cliente

## ✅ VALIDACIÓN

```
✓ Código compilable
✓ TypeScript válido (con errores esperados sin node_modules)
✓ Componentes reutilizables
✓ Datos estáticos integrados
✓ Estilos con NativeWind/Tailwind
✓ Documentación completa
✓ Ejemplos de extensión
✓ Listo para Expo Go
```

## 🎯 RESUMEN

```
PARA DEMO RÁPIDA:     Lee QUICK_START.md → npm install → npm start
PARA ENTENDER TODO:   Lee README.md → DESIGN.md → VISUAL_PREVIEW.md
PARA PERSONALIZAR:    Edita app/index.tsx (datos mock)
PARA EXPANDIR:        Consulta NEXT_STEPS.md y CODE_SNIPPETS.md
PARA DEBUGGING:       Ve FINAL_CHECKLIST.md troubleshooting
```

---

**Última actualización:** 28 de Febrero, 2026
**Total archivos:** 20
**Total líneas documentación:** ~2000
**Total líneas código:** ~600
