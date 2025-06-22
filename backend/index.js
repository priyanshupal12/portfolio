import express from 'express';
import Path from 'path';
import userRouter from './routes/userRoute.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';
import router from './routes/routes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug logging
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Mount the router before the form route
app.use('/submit', userRouter);

app.set('view engine', 'ejs');
app.set('views', Path.join(Path.resolve(), 'views'));

app.get('/submit', (req, res) => {
  res.render('form'); // Must exist in views/form.ejs
});

app.use('/ree', router)

app.use('/index', router)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
