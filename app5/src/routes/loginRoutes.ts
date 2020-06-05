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

  if (email) {
    return res.send({ email, password });
  } else {
    return res.send('You must provide an email');
  }
});

export { router };
