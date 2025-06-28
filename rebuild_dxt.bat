@echo off
echo Reconstruyendo StoryWeaver.dxt...
cd /d C:\ConsciousnessOS\StoryWeaver

REM Limpiar archivo anterior
if exist StoryWeaver.dxt del StoryWeaver.dxt

REM Verificar que dxt esté instalado globalmente
npm list -g @anthropic-ai/dxt >nul 2>&1
if errorlevel 1 (
    echo Instalando herramientas DXT...
    npm install -g @anthropic-ai/dxt
)

REM Construir el DXT
echo Empaquetando StoryWeaver...
dxt pack

echo.
echo ¡Listo! StoryWeaver.dxt ha sido reconstruido.
echo Ahora arrastra el archivo a Claude Desktop para instalarlo.
pause