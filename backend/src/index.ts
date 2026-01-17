import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'Event Booking System API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      api: '/api/v1'
    }
  });
});

// Health check endpoint
app.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'event-booking-backend'
  });
});

// API health check (for frontend)
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'event-booking-backend'
  });
});

// Basic test endpoint
app.get('/api/v1', (_req: Request, res: Response) => {
  res.json({
    message: 'Event Booking System API',
    version: '1.0.0'
  });
});

// API routes
app.use('/api/v1', routes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🔐 Auth API: http://localhost:${PORT}/api/v1/auth`);
});
