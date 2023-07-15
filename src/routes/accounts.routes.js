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

router.delete('/accounts/:id_account', async (req, res) => {
  console.log('req', req.params.id_account);
  console.log('req', typeof req.params.id_account);
  try {
    //const accountDelete = await prisma.account.delete({
    const accountDelete = await prisma.account.findFirst({
      where: {
        id_account: parseInt(req.params.id_account),
      },
    });
    res.json(accountDelete);
  } catch (e) {
    console.log('error', e);
    console.log('error name', e.name);
    console.log('error message', e.message);
    if (e.code === 'P2025') {
      return res.status(400).json({ error: 'El registro no existe' });
    } else {
      return res.status(400).json({ name: e.name, error: e.message });
    }
  }
});

router.put('/accounts', async (req, res) => {
  try {
    const updateAccount = await prisma.account.update({
      where: {
        id_account: req.body.id_account,
      },
      data: req.body,
    });
    return res.json(updateAccount);
  } catch (e) {
    console.log('error', e);
    return res.status(400).json({ name: e.name, message: e.message });
  }
});

export default router;
