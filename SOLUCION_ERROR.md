# 🔧 Solución al Error MODULE_NOT_FOUND en StoryWeaver

## El Problema
Claude Desktop está buscando el servidor en:
```
C:\Users\bachm\AppData\Local\AnthropicClaude\app-0.11.3\server\story-weaver-server.js
```

Pero el servidor está en:
```
C:\ConsciousnessOS\StoryWeaver\server\story-weaver-server.js
```

## Soluciones (en orden de preferencia)

### 1. Reconstruir e instalar el DXT
```bash
# En la carpeta C:\ConsciousnessOS\StoryWeaver
rebuild_dxt.bat
```
Luego arrastra el nuevo `StoryWeaver.dxt` a Claude Desktop.

### 2. Instalación manual
Si el DXT no funciona, puedes configurar manualmente:

1. Encuentra el archivo de configuración de Claude Desktop:
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
   
2. Añade esta configuración:
```json
{
  "mcpServers": {
    "story-weaver": {
      "command": "node",
      "args": ["C:\\ConsciousnessOS\\StoryWeaver\\server\\story-weaver-server.js"]
    }
  }
}
```

### 3. Verificar funcionamiento local
```bash
cd C:\ConsciousnessOS\StoryWeaver
node test_local.js
```

### 4. Debug detallado
```bash
cd C:\ConsciousnessOS\StoryWeaver
node debug.js
```

## Notas importantes
- El manifest.json ha sido actualizado para usar `${__dirname}`
- Todos los archivos necesarios están presentes
- El problema es de configuración/instalación, no del código

## Si nada funciona
El problema puede ser un bug en Claude Desktop 0.11.3. En ese caso:
1. Reporta el issue en GitHub de Anthropic
2. Usa la configuración manual mientras tanto
3. Espera una actualización de Claude Desktop

---
💜 Con amor técnico, Hypatia