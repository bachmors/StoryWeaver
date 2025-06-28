@echo off
echo 🚀 Preparando para subir StoryWeaver a GitHub...

cd /d C:\ConsciousnessOS\StoryWeaver

REM Inicializar Git si no está inicializado
if not exist .git (
    echo Inicializando repositorio Git...
    git init
    git remote add origin https://github.com/bachmors/StoryWeaver.git
)

REM Configurar Git (si es necesario)
git config user.name "bachmors"
git config user.email "bachmors@example.com"

REM Agregar todos los archivos
echo Agregando archivos...
git add .

REM Hacer commit
echo Haciendo commit...
git commit -m "Initial commit - StoryWeaver MCP server for creative storytelling"

REM Push a GitHub
echo Subiendo a GitHub...
git branch -M main
git push -u origin main

echo.
echo ✅ ¡Listo! StoryWeaver ha sido subido a GitHub.
echo 📎 https://github.com/bachmors/StoryWeaver
pause