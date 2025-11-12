import express from 'express';
import apiRoutes from './api/index.js';
import viewRoutes from './view/index.js';

const router = express.Router();

// API маршруты -> http://localhost:{PORT}/api:
router.use('/api', apiRoutes);

// View маршруты -> http://localhost:{PORT}:
router.use('/', viewRoutes);

export default router;
