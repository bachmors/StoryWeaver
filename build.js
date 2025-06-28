import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';
import archiver from 'archiver';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function build() {
  console.log('🏗️  Building StoryWeaver.dxt...');
  
  // Create output stream
  const output = createWriteStream(path.join(__dirname, 'StoryWeaver.dxt'));
  const archive = archiver('zip', {
    zlib: { level: 9 }
  });

  output.on('close', () => {
    console.log(`✅ StoryWeaver.dxt created (${archive.pointer()} bytes)`);
  });

  archive.on('error', (err) => {
    throw err;
  });

  // Pipe archive to output
  archive.pipe(output);

  // Add files
  archive.file('manifest.json', { name: 'manifest.json' });
  archive.file('package.json', { name: 'package.json' });
  archive.file('README.md', { name: 'README.md' });
  
  // Add server directory
  archive.directory('server/', 'server');
  
  // Add lib directory
  archive.directory('lib/', 'lib');
  
  // Add node_modules (if exists)
  if (fs.existsSync('node_modules')) {
    archive.directory('node_modules/', 'node_modules');
  }

  // Finalize archive
  await archive.finalize();
}

// Run build
build().catch(console.error);