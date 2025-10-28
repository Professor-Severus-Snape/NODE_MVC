import express from 'express';
import * as userController from '../controllers/userController/index.js'; // конечные обработчики

const router = express.Router();

// Middleware уровня маршрутизации:

// 1. авторизация пользователя:
router.post('/login', userController.loginUser);

export default router;
