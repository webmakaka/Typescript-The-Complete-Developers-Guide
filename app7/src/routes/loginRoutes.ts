import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

function requreAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  return res.status(403).send('Not Permitted');
}

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    return res.send(`
    <div>
      <div>You are logged in</div>
      <a href="/logout">Logout</a>
    </div>
  `);
  } else {
    return res.send(`
    <div>
      <div>You are not loged in</div>
      <a href="/login">Login</a>
    </div>
  `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  return res.redirect('/');
});

router.get('/protected', requreAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user');
});

export { router };
