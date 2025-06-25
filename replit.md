# D.rive - Sustainable Driving Score System

## Overview

D.rive is a full-stack web application that promotes sustainable driving through real-time scoring and analytics. The system uses OBD2 sensor technology to analyze driving behavior and provide feedback to improve fuel efficiency, safety, and environmental impact. This is a modern web application built with React frontend and Express.js backend, designed for the Korean market.

## System Architecture

The application follows a monorepo structure with clear separation between frontend and backend:

- **Frontend**: React with TypeScript, using Vite for development and build
- **Backend**: Express.js with TypeScript, providing REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Development**: Full-stack development environment with hot reload

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite with custom configuration for monorepo setup
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom Korean-focused design system
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Drizzle-Zod for schema validation
- **Storage**: Abstracted storage interface with in-memory implementation for development
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **Development**: TSX for TypeScript execution in development

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Schema Definition**: Shared between frontend and backend using Drizzle schema
- **Migrations**: Automated database migrations using Drizzle Kit
- **Type Safety**: Full TypeScript integration with database operations

### UI/UX Design
- **Design System**: Custom Korean-focused design with sustainable theme colors
- **Responsive Design**: Mobile-first approach with breakpoint considerations
- **Accessibility**: ARIA-compliant components from Radix UI
- **Typography**: Inter font family for modern, clean appearance
- **Color Scheme**: Green-focused palette emphasizing sustainability

## Data Flow

1. **Client Request**: React frontend makes API requests using TanStack Query
2. **API Layer**: Express.js routes handle requests and validate data
3. **Storage Layer**: Abstracted storage interface processes data operations
4. **Database**: PostgreSQL stores persistent data through Drizzle ORM
5. **Response**: Type-safe responses sent back to frontend
6. **UI Update**: React components update based on server state changes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **framer-motion**: Animation library for smooth UI transitions
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **date-fns**: Date manipulation utilities

### UI Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility

### Development Dependencies
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production build
- **drizzle-kit**: Database migration and introspection tools

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 runtime
- **Database**: PostgreSQL 16 module
- **Port Configuration**: Backend on port 5000, mapped to external port 80
- **Hot Reload**: Full-stack development with file watching

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Deployment**: Autoscale deployment target on Replit
- **Environment**: Production mode with optimized builds

### Database Management
- **Migration**: `npm run db:push` for schema synchronization
- **Connection**: Environment variable `DATABASE_URL` required
- **ORM**: Drizzle provides type-safe database operations

## Changelog
- June 25, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.