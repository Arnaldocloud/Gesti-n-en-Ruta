# 📱 PREVIEW - Cómo Se Verá la App

## Pantalla Principal (HomeScreen)

```
┌─────────────────────────────────────────────┐
│ ▲ Status Bar (hora, señal, batería)         │
├─────────────────────────────────────────────┤
│                                             │
│   Carlos Mendoza              🟢 Online     │
│                                             │
│  ┌──────────────────┐  ┌────────────────┐  │
│  │ VENTAS HOY       │  │ COBROS         │  │
│  │                  │  │                │  │
│  │   $450.00        │  │   $300.00      │  │
│  └──────────────────┘  └────────────────┘  │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  Clientes (4 pendientes)                    │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 📍                                  │   │
│  │ Comercial Los Andes   [✓ Visitado] │   │
│  │ Av. Principal, Centro              │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 📍                                  │   │
│  │ Fiambrería El Sol    [🟡 Pendiente]│   │
│  │ Calle 2 de Agosto #45              │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 📍                                  │   │
│  │ Bodega Don Miguel    [🟡 Pendiente]│   │
│  │ Sector La Mariscal                 │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ ✓                                   │   │
│  │ Supermercado Familia  [✓ Visitado] │   │
│  │ Centro Comercial Norte             │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 📍                                  │   │
│  │ Tienda La Esperanza  [🟡 Pendiente]│   │
│  │ Barrio Mariscal Sucre              │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  [scrollable - más clientes abajo]         │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│      💰 REGISTRAR VENTA/COBRO              │
│                                             │
│     ┌─────────┐          ┌─────────┐      │
│     │📞 Llamar│          │💬 Mensaje│      │
│     └─────────┘          └─────────┘      │
│                                             │
└─────────────────────────────────────────────┘
```

## Colores Reales

### Header (Azul Profesional)
```
Fondo: #3b82f6 (Azul brillante)
Texto: Blanco
Métricas: Azul más oscuro #2563eb
```

### Cliente Visitado
```
Fondo: #ecfdf5 (Verde muy claro)
Borde Izq: #10b981 (Verde)
Badge: #dbeafe con #047857 (Verde oscuro)
```

### Cliente Pendiente
```
Fondo: #fffbeb (Amarillo muy claro)
Borde Izq: #f59e0b (Ámbar/Naranja)
Badge: #fef3c7 con #92400e (Naranja oscuro)
```

### Botón Principal
```
Fondo: #3b82f6 (Azul)
Texto: Blanco
Hover/Press: Ligeramente más oscuro
Disabled: 60% opacidad
```

### Online Badge
```
Fondo: #dbeafe (Azul claro)
Dot: #10b981 (Verde)
Texto: "Online" en verde
```

### Offline Badge (si estuviera)
```
Fondo: #fee2e2 (Rojo claro)
Dot: #ef4444 (Rojo)
Texto: "Offline" en rojo
```

## 🎨 Tipografía en Pantalla

```
┌─────────────────────────────────────────┐
│ Carlos Mendoza           🟢 Online      │  ← H1 28px Bold + Badge
│                                          │
│ VENTAS HOY      │      COBROS            │  ← Caption 12px Semibold
│   $450.00       │      $300.00           │  ← H2 24px Bold
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Clientes (4 pendientes)                 │  ← H3 20px Semibold
│                                          │
│ 📍 Comercial Los Andes    [Visitado]    │  ← Body 16px Semibold + Badge
│ Av. Principal, Centro                  │  ← Caption 12px Regular
└─────────────────────────────────────────┘
```

## 🔄 Estados e Interacciones

### Estado Normal
```
Botón visible, opacidad 100%
```

### Al Presionar Botón
```
→ Opacidad baja momentáneamente (feedback visual)
→ Texto cambia a "⏳ Procesando..."
→ El botón se deshabilita
→ Después de ~1.5s, Alert popup dice "Venta Registrada"
→ Vuelve al estado normal
```

### Si Estuviera Offline
```
Antes de cualquier acción, Alert:
"Sin conexión - Los datos se guardarán localmente"
```

## 📊 Estadísticas de Diseño

- **Ancho de pantalla:** 375-428px (estándar móvil)
- **Alto utilizable:** ~700-800px (varía según dispositivo)
- **Área de lista:** ~400px (scrolleable)
- **Botón CTA:** Siempre visible en la parte inferior
- **Padding general:** 16px (excepto header que es 24px)
- **Radio de esquinas:** 8px (componentes), 4px (badges)
- **Sombras:** Ligeras (para dar profundidad)

## 🎯 Paleta Completa de Tailwind Utilizada

```
Primary:   bg-blue-600, text-blue-600
Success:   bg-green-600, text-green-600
Warning:   bg-amber-500, text-amber-700
Danger:    bg-red-600, text-red-700
Gray:      bg-gray-50, bg-white, text-gray-900
```

## 🎬 Flujo de Usuario Típico

1. **Abrir app** → Ve encabezado + lista de clientes
2. **Revisar estado** → Verifica Online/Offline
3. **Ver métricas** → Nota $450 ventas, $300 cobros
4. **Revisar ruta** → Ve 4 clientes pendientes, 3 visitados
5. **Hacer acción** → Presiona "Registrar Venta/Cobro"
6. **Feedback** → App muestra "Venta Registrada"
7. **Acciones secundarias** → Puede llamar o enviar mensaje
8. **Scroll** → Sigue el ruta visitando más clientes

---

## ✨ Detalles de Experiencia

- ✓ **Una mano:** Todo accesible con una mano, botones grandes
- ✓ **Exterior:** Alto contraste, fuentes grandes, colores vivos
- ✓ **Rápido:** Carga instantánea, datos estáticos
- ✓ **Claro:** Información inmediata sin clics innecesarios
- ✓ **Intuitivo:** Iconos + texto, sin ambigüedades
- ✓ **Ecuatoriano:** Nombres de negocios reales de Ecuador

¡Perfecto para demostrar en la calle! 📱
