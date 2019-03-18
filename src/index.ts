import * as http from 'http';
import * as debug from 'debug';
import * as dotenv from 'dotenv';

import App from './App';
import { AppLoader } from './AppLoader';
import AppConfiguration from './AppConfiguration';
dotenv.config();

debug('ts-express:server');
const port = normalizePort(process.env.PORT || AppLoader.getVariable(AppConfiguration.PORT));
App.set(AppConfiguration.PORT, port);

const server = http.createServer(App);
/**
 * Sever on connection
 */
server.listen(App.get(AppConfiguration.PORT), () => {
    console.log("server listent on port: " + App.get(AppConfiguration.PORT));
});
/**
 * Server on error
 */
server.on('error', onError);
/**
 * Server on Listenning
 */
server.on('listening', onListening);

function normalizePort(val: number|string): number|string|boolean {
  let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
  if (isNaN(port)) return val;
  else if (port >= 0) return port;
  else return false;
}

/**
 * Server on error
 * @param error 
 */
function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== 'listen') throw error;
  let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
  switch(error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening(): void {
  let addr = server.address();
  let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}