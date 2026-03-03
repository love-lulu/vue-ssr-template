import { execSync } from 'child_process';

try {
  console.log('Running npm install to generate package-lock.json...');
  execSync('cd /vercel/share/v0-project && npm install --legacy-peer-deps', { 
    stdio: 'inherit',
    timeout: 120000
  });
  console.log('npm install completed successfully.');
} catch (error) {
  console.error('npm install failed:', error.message);
  process.exit(1);
}
