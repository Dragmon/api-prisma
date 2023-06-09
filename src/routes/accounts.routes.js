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
  try {
    const newAccount = await prisma.account.create({
      data: req.body,
    });
    res.json(newAccount);
  } catch (e) {
    console.log('error', e);
    if (e.code === 'P2002')
      return res
        .status(400)
        .json({ error: 'El RFC ya existe', target: e.meta.target });
  }
});

router.delete('/accounts/:rfc', async (req, res) => {
  try {
    const accountDelete = await prisma.account.delete({
      where: {
        rfc: req.params.rfc,
      },
    });
    res.json(accountDelete);
  } catch (e) {
    console.log('error', e);
    if (e.code === 'P2025')
      return res.status(400).json({ error: 'El registro no existe' });
  }
  /*
  const accountDelete = await prisma.account.delete({
    where: {
      rfc: req.params.rfc,
    },
  });
  if (!accountDelete)
    return res.status(404).json({ error: 'Product not found' });
    */
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
