import { Router, Request, Response, NextFunction, response } from 'express';

interface RequestWithBodyInterface extends Request {
  body: { [key: string]: string | undefined };
}

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

router.get('/login', (req: Request, res: Response) => {
  return res.send(
    `
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `
  );
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  return res.redirect('/');
});

router.post('/login', (req: RequestWithBodyInterface, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'hi@hi.com' && password === 'password') {
    req.session = {
      loggedIn: true,
    };

    return res.redirect('/');
  } else {
    return res.send('Invalid email or password');
  }
});

router.get('/protected', requreAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user');
});

export { router };
