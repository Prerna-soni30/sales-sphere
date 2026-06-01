# sales-sphere
# SalesSphere CRM

A modern and responsive Customer Relationship Management (CRM) platform designed to streamline sales operations, customer management, and business growth.

SalesSphere CRM provides a centralized dashboard for managing leads, customers, deals, tasks, reports, notifications, and business analytics through an intuitive and user-friendly interface.

---

##  Project Overview

SalesSphere CRM is a SaaS-inspired CRM solution developed as an academic and internship project.

The current implementation focuses on building a modern frontend experience using Next.js, React.js, TypeScript, and Tailwind CSS while following industry-standard CRM workflows and user experience principles.

### Key Highlights

- Professional Landing Page
- Authentication Flow (Login & Signup)
- Dashboard Management System
- CRM Modules
- Responsive Design
- SaaS-Based System Design Concepts
- Multi-Tenant Architecture Planning
- Cloud-Ready Application Design

---

##  Features

### Landing Page

- Responsive Navigation Bar
- Hero Section
- Features Section
- Solutions Section
- Pricing Section
- Customers Section
- Resources Section
- About Us Section
- Contact Section
- Professional Footer
- Call-to-Action Buttons

### Navigation Menu

- Home
- Features
- Solutions
- Pricing
- Customers
- Resources
- About Us
- Contact

### Authentication

- Login Page
- Sign Up Page
- Frontend Authentication Flow
- Dashboard Redirection

---

##  CRM Dashboard

### KPI Cards

- Total Revenue
- Active Customers
- Total Leads
- Conversion Rate

### Sales Analytics

- Revenue Overview
- Sales Performance Tracking
- Business Insights

### Lead Management

- Lead Information Table
- Lead Status Tracking
- Lead Monitoring

### Customer Management

- Customer Records
- Customer Profiles
- Customer Activity Tracking

### Deal Pipeline

- Opportunity Management
- Pipeline Tracking
- Deal Progress Monitoring


### Reports

- Business Reports
- Sales Reports
- Performance Reports

### Notifications

- Recent Activities
- Alerts
- Reminders

### Settings

- Profile Settings
- Account Preferences
- Application Configuration

---

##  Technology Stack

### Frontend

- Next.js
- React.js
- TypeScript
- Tailwind CSS

### Proposed Backend Technologies

- Node.js
- Express.js
- REST API Architecture

### Proposed Database

- MySQL

### Proposed Cloud Platform

- Google Cloud Platform (GCP)
- Microsoft Azure

---

##  System Architecture

The following architecture represents the planned production-ready version of SalesSphere CRM.

```text
Frontend Layer
│
├── Next.js
├── React.js
├── TypeScript
├── Tailwind CSS
│
▼

Backend Layer
│
├── Node.js
├── Express.js
├── REST APIs
│
▼

Database Layer
│
├── MySQL
│
▼

Cloud Infrastructure
│
├── Google Cloud Platform (GCP)
└── Microsoft Azure
```

---

##  Multi-Tenant SaaS Architecture

SalesSphere CRM is designed around the concept of Multi-Tenant SaaS Architecture.

### Key Characteristics

- Single Application Instance
- Shared Infrastructure
- Logical Data Isolation
- Tenant-Based Data Access
- Scalable SaaS Model
- Centralized Maintenance

### Benefits

- Cost Efficiency
- Easy Maintenance
- High Scalability
- Better Resource Utilization
- Faster Deployment
- Cloud Readiness

This architecture enables multiple organizations (tenants) to use the same application while maintaining secure and isolated access to their business data.

---

##  Proposed REST API Endpoints

The following APIs are planned for the production version of SalesSphere CRM.

### Authentication APIs

```http
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/profile
```

### Lead APIs

```http
GET    /api/leads
GET    /api/leads/:id
POST   /api/leads
PUT    /api/leads/:id
DELETE /api/leads/:id
```

### Customer APIs

```http
GET    /api/customers
GET    /api/customers/:id
POST   /api/customers
PUT    /api/customers/:id
DELETE /api/customers/:id
```

### Deal APIs

```http
GET    /api/deals
GET    /api/deals/:id
POST   /api/deals
PUT    /api/deals/:id
DELETE /api/deals/:id
```

### Task APIs

```http
GET    /api/tasks
GET    /api/tasks/:id
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

### Reports APIs

```http
GET    /api/reports/sales
GET    /api/reports/performance
GET    /api/reports/revenue
```

### Notification APIs

```http
GET    /api/notifications
POST   /api/notifications
```

---

##  Proposed Database Design

The planned backend architecture uses MySQL with Multi-Tenant SaaS Architecture.

### Core Entities

- Tenants
- Users
- Leads
- Customers
- Deals
- Tasks
- Activities
- Notifications

### Multi-Tenant Strategy

Each business record will be associated with a Tenant ID to ensure logical data separation between organizations.


##  Project Structure

```text
SalesSphere/
│
├── app/
│   ├── dashboard/
│   │   ├── leads/
│   │   ├── customers/
│   │   ├── deals/
│   │   ├── tasks/
│   │   ├── reports/
│   │   └── settings/
│   │
│   ├── login/
│   ├── signup/
│   └── page.tsx
│
├── components/
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

##  Future Enhancements

- Node.js Backend Integration
- Express.js REST APIs
- MySQL Database Connectivity
- Multi-Tenant Data Isolation
- JWT Authentication
- Role-Based Access Control (RBAC)
- Cloud Deployment on GCP/Azure
- Real-Time Notifications
- Advanced Analytics Dashboard
- Team Collaboration Features
- Email Notifications
- Third-Party Integrations

---

##  Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project

```bash
cd SalesSphere
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Open Browser

```text
http://localhost:3000
```

##  Project Objective

The objective of SalesSphere CRM is to provide a centralized platform for managing customer relationships, tracking sales activities, monitoring business performance, and improving productivity through a modern, scalable, and user-friendly CRM solution.

---
