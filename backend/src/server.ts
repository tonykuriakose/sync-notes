import { createServer } from 'http';
import app from './app';
import { connectDatabase, disconnectDatabase } from './database/connection';

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';
let server: any;

const gracefulShutdown = async (signal: string) => {
  console.log(`Starting graceful shutdown...`);
  
  if (server) {
    server.close(async () => {
      console.log('HTTP server closed');
      await disconnectDatabase();
      
      process.exit(0);
    });

    setTimeout(() => {
      console.error('Could not close connections in time, forcefully shutting down');
      process.exit(1);
    }, 10000);
  } else {
    await disconnectDatabase();
    process.exit(0);
  }
};

process.on('uncaughtException', (error: Error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

const startServer = async (): Promise<void> => {
  try {
    await connectDatabase();
    
    server = createServer(app);
    server.listen(PORT, () => {
      console.log(`Server running at ${PORT}`);
    });
    server.on('error', (error: Error) => {
      console.error('Server error:', error);
      process.exit(1);
    }); 
    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));

  } catch (error) {
    console.error('Failed to start server:', error);
    await disconnectDatabase();
    process.exit(1);
  }
};

startServer();