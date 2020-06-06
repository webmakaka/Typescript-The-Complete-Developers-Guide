import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { router } from './routes/loginRoutes';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['adfads'] }));

app.use(router);
app.use(AppRouter.getInstnce());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
