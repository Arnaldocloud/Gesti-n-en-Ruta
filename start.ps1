# 🚀 EJECUTAR PROTOTIPO EN 30 SEGUNDOS
# Script para Windows (PowerShell)

Write-Host "╔════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   Iniciando Prototipo - Vendedor de Rutas de Charcutería     ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Verificar que npm está instalado
$npmExists = $null -ne (Get-Command npm -ErrorAction SilentlyContinue)

if (-not $npmExists) {
    Write-Host "❌ ERROR: npm no está instalado" -ForegroundColor Red
    Write-Host "📥 Descarga Node.js desde: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ npm detectado" -ForegroundColor Green
Write-Host ""

# Preguntar si instalar dependencias
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Instalando dependencias... (esto puede tomar 3-5 minutos)" -ForegroundColor Yellow
    npm install
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Error en instalación" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Dependencias instaladas" -ForegroundColor Green
}

Write-Host ""
Write-Host "🚀 Iniciando servidor Expo..." -ForegroundColor Cyan
Write-Host ""
Write-Host "Próximos pasos:" -ForegroundColor Cyan
Write-Host "1. Espera a que aparezca el código QR" -ForegroundColor White
Write-Host "2. Abre la app 'Expo Go' en tu teléfono" -ForegroundColor White
Write-Host "3. Escanea el código QR" -ForegroundColor White
Write-Host "4. ¡La app se abre automáticamente!" -ForegroundColor White
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

# Iniciar Expo
npm start
