import { Router, Request, Response } from 'express';

interface RequestWithBodyInterface extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

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

export { router };
