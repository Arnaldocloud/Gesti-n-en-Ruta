# 📐 Especificaciones de Diseño - Vendedor de Rutas

## 🎨 Paleta de Colores

```
Primary Blue:     #3b82f6 (Acciones principales)
Success Green:    #10b981 (Estados completados)
Warning Amber:    #f59e0b (Pendientes)
Danger Red:       #ef4444 (Offline/Errores)
White:            #ffffff
Gray-50:          #f9fafb (Fondos ligeros)
Gray-900:         #111827 (Texto principal)
```

## 📏 Espaciado

```
XS: 4px
SM: 8px
MD: 16px (estándar)
LG: 24px
XL: 32px
```

## 🔤 Tipografía

```
H1: 28px Bold (Nombres principales)
H2: 24px Bold
H3: 20px Semibold
Body: 16px Regular (Texto principal)
Caption: 12px Regular (Información secundaria)
```

## 📱 Estructura de Pantalla

```
┌─────────────────────────────────────┐
│          HEADER (Blue)              │
│  Carlos Mendoza       [Online 🟢]   │
│                                     │
│  Ventas: $450    │    Cobros: $300  │
└─────────────────────────────────────┘
│                                     │
│   CLIENTES (4 pendientes)           │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 📍 Comercial Los Andes      │   │
│  │    Visitado ✓               │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 📍 Fiambrería El Sol        │   │
│  │    Pendiente 🟡             │   │
│  └─────────────────────────────┘   │
│                                     │
│  [scrollable area]                  │
│                                     │
├─────────────────────────────────────┤
│  💰 Registrar Venta/Cobro          │
│                                     │
│  [📞 Llamar]    [💬 Mensaje]       │
└─────────────────────────────────────┘
```

## 🎯 Componentes Clave

### Header
- **Alto:** 120px
- **Padding:** 16px horizontally, 40px top, 16px bottom
- **Contenido:**
  - Nombre vendedor (28px Bold)
  - Badge Online/Offline (con indicador visual)
  - Dos tarjetas de métrica (50/50 width)

### Client Card
- **Altura:** 72px (expandible)
- **Layout:** Grid
  - Indicator (40x40px centered)
  - Info (flex-1) con nombre y dirección
  - Badge estado (derecha)
- **Borde izquierdo:** 4px (color según estado)
- **Sombra:** Ligera

### CTA Button
- **Alto:** 48px
- **Ancho:** 100% - 32px padding
- **Radio:** 8px
- **Fuente:** 18px Bold
- **Estados:**
  - Normal: Opacidad 100%
  - Disabled/Loading: Opacidad 60%

### Secondary Actions
- **Layout:** Dos botones en fila 50/50
- **Alto:** 40px
- **Border:** 1px gray-300

## 🎨 Estados Visuales

### Cliente Visitado
- Background: green-50
- Border-left: green-500
- Badge: green-100 / green-700
- Emoji: ✓

### Cliente Pendiente
- Background: white
- Border-left: amber-500
- Badge: amber-100 / amber-700
- Emoji: 📍

### Online
- Badge: green-100
- Dot: green-600
- Text: green-600

### Offline
- Badge: red-100
- Dot: red-600
- Text: red-600

## 🚀 Interacciones

### Button Press
- Feedback: Cambio de opacidad inmediato
- Loading state: Spinner + "Procesando..."
- Duration: ~1.5 segundos (simulado)

### List Scroll
- Smooth scroll
- Header fixed (no scroll con lista)
- CTA button fixed (siempre visible)

## ♿ Accesibilidad

- Colores de estado no dependen SOLO del color (también usan iconos)
- Alto contraste entre texto y fondo
- Botones con mínimo 44x44 tap area
- Font sizes mínimo 14px

## 📐 Responsive Design

El diseño está optimizado para:
- **Ancho:** 375-428px (teléfono típico)
- **Alto:** Variable (lista scrolleable)
- **Orientación:** Portrait (primary)
- **DPI:** 2x, 3x (retina displays)

---

**Nota:** Todos los valores usan el sistema Tailwind de NativeWind
