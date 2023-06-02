import { Router } from 'express';
import { prisma } from '../db.js';

const router = Router();

router.get('/accounts', async (req, res) => {
  const accounts = await prisma.account.findMany();
  res.json(accounts);
});

router.get('/accounts/:rfc', async (req, res) => {
  console.log('req.params', req.params);
  const accountFound = await prisma.account.findFirst({
    where: {
      rfc: req.params.rfc,
    },
  });
  if (!accountFound)
    return res.status(404).json({ error: 'Product not found' });

  return res.json(accountFound);
});

router.post('/accounts', async (req, res) => {
  const newAccount = await prisma.account.create({
    data: req.body,
  });
  res.json(newAccount);
});

router.delete('/accounts/:rfc', async (req, res) => {
  const accountDelete = await prisma.account.delete({
    where: {
      rfc: req.params.rfc,
    },
  });
  if (!accountDelete)
    return res.status(404).json({ error: 'Product not found' });
});

router.put('/account/:rfc', async (req, res) => {
  const accountUpdate = await prisma.account.update({
    where: {
      rfc: req.params.rfc,
    },
    data: req.body,
  });
  return res.json(accountUpdate);
});

export default router;
