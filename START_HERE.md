# ⚡ INICIO RÁPIDO (2 MINUTOS)

## Lo que ves aquí es el prototipo COMPLETO de una app móvil para vendedores de rutas de charcutería en Ecuador.

### 🎯 Qué Hace

Una pantalla con:
- 📊 Encabezado: Tu nombre, dinero vendido y dinero cobrado
- 🟢 Badge: Indica si estás Online (puede sincronizar) u Offline
- 👥 Lista: Tus 7 clientes del día, mostrando quién ya visitaste
- 💰 Botón: Para registrar cada venta o cobro
- 📞 Botones Extra: Para llamar o enviar mensaje al cliente

---

## 🚀 EJECUTAR EN 30 SEGUNDOS

### Terminal 1: Instalar (primera vez)
```bash
cd d:\proyectos\propuesta-ecuador
npm install
```
(Espera 3-5 minutos)

### Terminal 2: Correr
```bash
npm start
```

### Teléfono: Abrir
1. Descarga app **Expo Go**
2. Escanea el código QR que sale en terminal
3. ¡Abre automáticamente! 📱

---

## 🎨 Qué Verás

```
AZUL (Encabezado)
├─ Carlos Mendoza           [🟢 Online]
├─ Ventas Hoy: $450         Cobros: $300
│
LISTA (Scrolleable)
├─ 📍 Comercial Los Andes       ✓ Visitado
├─ 📍 Fiambrería El Sol         📍 Pendiente
├─ 📍 Bodega Don Miguel         📍 Pendiente
├─ ✓ Supermercado Familia       ✓ Visitado
└─ ... (3 clientes más)
│
BOTÓN AZUL GRANDE
└─ 💰 Registrar Venta/Cobro
   [📞 Llamar]  [💬 Mensaje]
```

---

## 🔧 Cambiar Datos (SIN reinstalar)

Abre: `app/index.tsx`

Busca esto (línea ~8):
```typescript
const VENDOR_DATA = {
  name: 'Carlos Mendoza',      ← Cambiar nombre aquí
  salesAmount: 450.00,         ← Cambiar dinero aquí
  collectedAmount: 300.00,     ← Cambiar cobros aquí
  isOnline: true,              ← Cambiar a false = Offline
};
```

**Guarda (Ctrl+S) y la app actualiza sola.**

---

## 📁 Archivos Importantes

| Archivo | Qué es |
|---------|--------|
| `app/index.tsx` | Pantalla principal (EDITAR AQUÍ) |
| `components/Header.tsx` | Encabezado (nombre + métricas + estado) |
| `components/ClientList.tsx` | Lista de clientes |
| `components/CTAButton.tsx` | Botón principal + botones secundarios |

---

## ✅ Validación Rápida

- [ ] `npm install` terminó sin errores
- [ ] `npm start` muestra código QR
- [ ] Expo Go abre la app en 10 segundos
- [ ] Ves: nombre, métricas, clientes, botón
- [ ] Los colores se ven bien (azul, verde, amarillo)
- [ ] El botón responde (muestra alerta)

---

## 💡 Tips

1. Presiona `r` en terminal para recargar si algo falla
2. En Expo Go, desliza de arriba para recargar
3. Los cambios en código JSX aparecen automáticamente
4. Si necesitas npm (config, nuevo package), reinicia todo

---

## 📖 Para Más Detalles

| Necesitas | Lee |
|-----------|-----|
| Ejecutar paso a paso | `QUICK_START.md` |
| Entender la app | `README.md` |
| Ver cómo se ve | `VISUAL_PREVIEW.md` |
| Cambiar diseño | `DESIGN.md` |
| Agregar features | `NEXT_STEPS.md` |
| Ejemplos de código | `CODE_SNIPPETS.md` |
| Todos los archivos | `FILE_INDEX.md` |

---

## 🎯 Mapa Mental

```
INICIO
  ↓
npm install (primera vez)
  ↓
npm start
  ↓
Escanea QR con Expo Go
  ↓
¡APP ABIERTA EN TU TELÉFONO!
  ↓
Haz cambios en app/index.tsx
  ↓
Presiona Ctrl+S
  ↓
App actualiza automáticamente
  ↓
¡A mostrarle al cliente!
```

---

## 🚨 Problemas Comunes

### "No veo código QR"
→ Presiona `Ctrl+C` y corre `npm start` de nuevo

### "Expo Go dice 'conexión fallida'"
→ Asegúrate teléfono y PC están en la misma WiFi

### "Cambios no aparecen en la app"
→ Desliza hacia abajo desde la parte superior de Expo Go

### "npm install no termina"
→ Espera más (puede tomar 5-10 min en conexión lenta)

---

## 🎬 Demo en Cliente

**Duración total:** ~15 minutos

1. Abre la app con Expo Go (30 seg)
2. Muestra el encabezado (1 min)
   - "Aquí ves cuánto vendiste y cobraste"
   - "El badge verde dice si estás online"
3. Muestra la lista (2 min)
   - "Aquí están todos tus clientes"
   - "Verde = ya visitaste, Amarillo = aún no"
4. Presiona el botón (1 min)
   - "Aquí registras cada venta"
5. Muestra el código en VS Code (5 min)
   - "Es super simple, está hecho en React Native"
   - "Podemos agregar mapas, histórico, sincronización..."
6. Preguntas y feedback (5 min)

---

## 🏁 Estado Final

```
✅ App funcional
✅ Datos mockeados
✅ Estilos modernos
✅ Documentación completa
✅ Listo para mostrar

🚀 ¡A POR ELLO!
```

---

**Última actualización:** 28 de Febrero, 2026
**Tiempo de lectura:** 2 minutos
**Tiempo de ejecución:** 5 minutos
