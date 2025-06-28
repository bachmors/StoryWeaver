console.log('=== StoryWeaver Debug Info ===');
console.log('Current directory:', process.cwd());
console.log('__dirname:', __dirname);
console.log('process.argv:', process.argv);
console.log('Environment:', {
  NODE_PATH: process.env.NODE_PATH,
  PATH: process.env.PATH
});

// Verificar que los módulos necesarios existen
try {
  require.resolve('@modelcontextprotocol/sdk/server/index.js');
  console.log('✅ MCP SDK encontrado');
} catch (e) {
  console.error('❌ MCP SDK no encontrado:', e.message);
}

// Verificar estructura de archivos
const fs = require('fs');
const path = require('path');

console.log('\n=== Estructura de archivos ===');
const serverPath = path.join(__dirname, 'server', 'story-weaver-server.js');
console.log('Buscando servidor en:', serverPath);
console.log('Servidor existe:', fs.existsSync(serverPath));

const libPath = path.join(__dirname, 'lib');
console.log('Directorio lib existe:', fs.existsSync(libPath));

if (fs.existsSync(libPath)) {
  console.log('Archivos en lib:', fs.readdirSync(libPath));
}