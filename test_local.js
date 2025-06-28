// Test local del servidor StoryWeaver
const { spawn } = require('child_process');
const path = require('path');

console.log('🌟 Probando StoryWeaver Server localmente...\n');

const serverPath = path.join(__dirname, 'server', 'story-weaver-server.js');
const server = spawn('node', [serverPath], {
  stdio: ['pipe', 'pipe', 'pipe'],
  cwd: __dirname
});

// Enviar configuración inicial
const config = {
  stories_path: path.join(__dirname, 'stories'),
  creativity_mode: 'creative',
  enable_evolution: true
};

server.stdin.write(JSON.stringify(config));

// Capturar salida
server.stdout.on('data', (data) => {
  console.log('Server output:', data.toString());
});

server.stderr.on('data', (data) => {
  console.error('Server error:', data.toString());
});

server.on('error', (error) => {
  console.error('Failed to start server:', error);
});

server.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
});

// Test MCP protocol
setTimeout(() => {
  console.log('\n📝 Enviando solicitud de lista de herramientas...');
  const request = {
    jsonrpc: '2.0',
    method: 'tools/list',
    id: 1
  };
  server.stdin.write(JSON.stringify(request) + '\n');
}, 1000);

// Cerrar después de 5 segundos
setTimeout(() => {
  console.log('\n✅ Test completado. Cerrando servidor...');
  server.kill();
  process.exit(0);
}, 5000);