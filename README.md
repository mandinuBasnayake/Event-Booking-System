# Event Booking System

A high-performance, real-time event booking platform built to handle high-traffic scenarios like concert and sports ticket releases. This project demonstrates expertise in distributed systems, concurrency control, and production-ready architecture.

## Features

- Real-time seat availability updates
- Robust concurrency control (optimistic & pessimistic locking)
- Distributed locking with Redis
- Rate limiting and anti-abuse protection
- Horizontal scalability
- Production-ready monitoring and logging
- CI/CD pipeline

## Tech Stack

### Frontend
- **React** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **React Router** for navigation

### Backend
- **Node.js** with TypeScript
- **Express** web framework
- **Prisma ORM** for type-safe database access
- **PostgreSQL** as primary database
- **Redis** for caching and distributed locks (Phase 5+)
- **Zod** for validation

### DevOps
- **Docker** & **Docker Compose**
- **ESLint** & **Prettier** for code quality
- Git for version control

## Project Structure

```
Event-Booking-System/
├── backend/                 # Node.js + Express + Prisma backend
│   ├── src/
│   │   └── index.ts        # Main server entry point
│   ├── prisma/
│   │   └── schema.prisma   # Database schema
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── frontend/                # React + Vite + TypeScript frontend
│   ├── src/
│   │   ├── pages/          # Page components
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Global styles (Tailwind)
│   ├── Dockerfile.dev
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.js
├── docker-compose.yml       # Multi-container orchestration
├── MILESTONES.md           # Project progress tracking
└── README.md               # This file
```

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher) - [Download](https://nodejs.org/)
- **Docker Desktop** - [Download](https://www.docker.com/products/docker-desktop/)
- **Git** - [Download](https://git-scm.com/)
- **npm** or **pnpm** (comes with Node.js)

## Getting Started

### Option 1: Using Docker (Recommended)

This is the easiest way to get started. Docker will handle all dependencies and services.

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Event-Booking-System
   ```

2. **Start all services with Docker Compose**
   ```bash
   docker-compose up
   ```

   This command will:
   - Start PostgreSQL database on port 5432
   - Start the backend API on port 3000
   - Start the frontend dev server on port 5173
   - Install all dependencies automatically

3. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000/api/v1
   - Health Check: http://localhost:3000/health

4. **Stop all services**
   ```bash
   docker-compose down
   ```

   To also remove the database volume:
   ```bash
   docker-compose down -v
   ```

### Option 2: Local Development (Without Docker)

If you prefer to run services locally without Docker:

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Event-Booking-System
   ```

2. **Set up PostgreSQL**
   - Install PostgreSQL locally
   - Create a database named `event_booking`
   - Update the `DATABASE_URL` in `backend/.env`

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   ```

4. **Run Prisma migrations**
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. **Start the backend server**
   ```bash
   npm run dev
   ```
   Backend will run on http://localhost:3000

6. **Install frontend dependencies** (in a new terminal)
   ```bash
   cd frontend
   npm install
   ```

7. **Start the frontend dev server**
   ```bash
   npm run dev
   ```
   Frontend will run on http://localhost:5173

## Database Management

### View Database with Prisma Studio

Prisma Studio provides a visual interface to view and edit your database:

```bash
cd backend
npx prisma studio
```

This opens a browser at http://localhost:5555

### Create a New Migration

After modifying `backend/prisma/schema.prisma`:

```bash
cd backend
npx prisma migrate dev --name describe_your_changes
```

### Reset Database

To reset the database and apply all migrations:

```bash
cd backend
npx prisma migrate reset
```

## Available Scripts

### Backend (`/backend`)
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run prisma:generate` - Generate Prisma Client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio

### Frontend (`/frontend`)
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Environment Variables

### Backend (`backend/.env`)
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/event_booking?schema=public"
PORT=3000
NODE_ENV=development
JWT_SECRET=your-super-secret-key-change-this
```

### Frontend
Currently, no environment variables are required for the frontend. API calls are proxied through Vite's proxy configuration.

## Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Backend code goes in `backend/src/`
   - Frontend code goes in `frontend/src/`
   - Update database schema in `backend/prisma/schema.prisma`

3. **Test your changes**
   - Run linter: `npm run lint`
   - Format code: `npm run format`

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: describe your changes"
   ```

## Project Phases

This project is being built in progressive phases. Track progress in [MILESTONES.md](MILESTONES.md).

### ✅ Phase 1: Project Setup & Foundation (Current)
- [x] Monorepo structure
- [x] Docker configuration
- [x] PostgreSQL setup
- [x] Prisma ORM initialization
- [x] TypeScript setup (frontend & backend)
- [x] ESLint & Prettier
- [x] Basic Express server
- [x] React + Vite frontend
- [x] Tailwind CSS

### 🔜 Phase 2: User Authentication (Next)
- [ ] User registration & login
- [ ] JWT/session management
- [ ] Password hashing
- [ ] Protected routes

### 📋 Upcoming Phases
- Phase 3: Event Management System
- Phase 4: Seating & Booking
- Phase 5: Concurrency Control
- Phase 6: Real-Time Features
- Phase 7: Rate Limiting
- Phase 8: Caching & Performance
- Phase 9: Load Testing
- And more... (see MILESTONES.md)

## Troubleshooting

### Docker Issues

**Problem**: Port already in use
```
Error: Bind for 0.0.0.0:5432 failed: port is already allocated
```
**Solution**: Stop the service using that port or change the port in `docker-compose.yml`

**Problem**: Docker containers won't start
**Solution**:
```bash
docker-compose down -v
docker-compose up --build
```

### Backend Issues

**Problem**: Cannot connect to database
**Solution**:
- Make sure PostgreSQL is running
- Check `DATABASE_URL` in `.env`
- Verify database exists: `psql -U postgres -l`

**Problem**: Prisma Client not generated
**Solution**:
```bash
cd backend
npx prisma generate
```

### Frontend Issues

**Problem**: API calls failing
**Solution**:
- Make sure backend is running on port 3000
- Check browser console for CORS errors
- Verify proxy configuration in `vite.config.ts`

## Contributing

This is a learning project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Learning Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## License

MIT

## Contact

For questions or feedback about this project, feel free to open an issue!

---

**Built with ❤️ as a just-in-time learning experience to showcase real-world software engineering skills.**
