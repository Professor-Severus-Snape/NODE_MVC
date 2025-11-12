import express from 'express'; // подключение Express
import expressLayouts from 'express-ejs-layouts'; // чтобы не делать импорт в каждом файле .ejs
import { fileURLToPath } from 'node:url'; // преобразует URL файла в обычный путь файловой системы
import path from 'node:path'; // работа с путями

import routes from './routes/index.js'; // подключение роутов
import errorUpload from './middleware/errorUpload.js'; // ошибка загрузки файла
import error404 from './middleware/error404.js'; // маршрут не найден
import errorHandler from './middleware/errorHandler.js'; // ошибка сервера

// Создание объекта приложения:
const app = express();

// Получение __dirname в ES Modules:
const __filename = fileURLToPath(import.meta.url); // /Users/{user}/Desktop/{project}/src/app.js
const __dirname = path.dirname(__filename); // /Users/{user}/Desktop/{project}/src

// Настройка шаблонизатора EJS:
app.set('views', path.join(__dirname, 'views')); // путь к папке с представлениями
app.set('view engine', 'ejs'); // движок представлений

// Подключение express-ejs-layouts (после шаблонизатора, но до роутов):
app.use(expressLayouts);
app.set('layout', 'books/layouts/main'); // путь к main.ejs внутри views

// Middlewares уровня приложения (посл-сть: парсеры -> роуты -> маршрут не найден -> выброс ошибки):

// 0. Middleware - подключение статики (CSS-стили) из папки public:
app.use(express.static(path.join(process.cwd(), 'public')));

// 1. Middleware - JSON парсер (заголовок Content-Type: application/json):
app.use(express.json());

// 2. Middleware для формы (заголовок Content-Type: application/x-www-form-urlencoded):
app.use(express.urlencoded({ extended: true }));

// 3. Middleware - основные маршруты:
app.use('/', routes); // корневой роут -> http://localhost:{PORT}

// 4. Middleware - обработка ошибок Multer (загрузка не pdf-файла):
app.use(errorUpload);

// 5. Middleware - обработка 404 (не сработал ни один маршрут -> http://localhost:{PORT}/unknown):
app.use(error404);

// 6. Middleware - централизованная обработка ошибок - throw new Error('Oops...') или next(err)):
app.use(errorHandler);

export default app;
