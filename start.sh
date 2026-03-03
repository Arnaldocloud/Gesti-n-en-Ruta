#!/usr/bin/env bash

# 🚀 EJECUTAR PROTOTIPO EN 30 SEGUNDOS
# Script para iniciar el proyecto automáticamente

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║   Iniciando Prototipo - Vendedor de Rutas de Charcutería     ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Verificar que npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ ERROR: npm no está instalado"
    echo "📥 Descarga Node.js desde: https://nodejs.org/"
    exit 1
fi

echo "✅ npm detectado"
echo ""

# Preguntar si instalar dependencias
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias... (esto puede tomar 3-5 minutos)"
    npm install
    
    if [ $? -ne 0 ]; then
        echo "❌ Error en instalación"
        exit 1
    fi
    echo "✅ Dependencias instaladas"
fi

echo ""
echo "🚀 Iniciando servidor Expo..."
echo ""
echo "Próximos pasos:"
echo "1. Espera a que aparezca el código QR"
echo "2. Abre la app 'Expo Go' en tu teléfono"
echo "3. Escanea el código QR"
echo "4. ¡La app se abre automáticamente!"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Iniciar Expo
npm start
