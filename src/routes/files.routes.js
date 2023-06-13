import { Router } from 'express';

const router = Router();

router.post('/uploadfiles', async (req, res) => {
  try {
    console.log('req', req.body);
    res.status(200).json({ message: 'ok' });
  } catch (e) {
    console.log('error', e);
    return res.status(400).json({ error: 'Error de carga de archivo' });
  }
});

export default router;
