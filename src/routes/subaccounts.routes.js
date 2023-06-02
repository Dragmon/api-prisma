import { Router } from 'express';
import { prisma } from '../db.js';

const router = Router();

router.get('/subaccounts', async (req, res) => {
  const subAccounts = await prisma.subaccount.findMany();
  res.json(subAccounts);
});

router.get('/subaccounts/:rfc', async (req, res) => {
  console.log('req.params', req.params);
  const subAccountFound = await prisma.subaccount.findMany({
    where: {
      rfc: req.params.rfc,
    },
  });
  if (!subAccountFound) {
    return res.status(404).json({ error: 'Product not found' });
  } else {
    return res.json(subAccountFound);
  }
});

router.post('/subaccounts', async (req, res) => {
  const newSubAccount = await prisma.subaccount.create({
    data: req.body,
  });
  res.json(newSubAccount);
});

router.delete('/subaccounts/:rfc', async (req, res) => {
  const subAccountDelete = await prisma.subaccount.delete({
    where: {
      rfc: req.params.rfc,
    },
  });
  if (!subAccountDelete)
    return res.status(404).json({ error: 'Product not found' });
});

router.put('/subaccounts/:rfc', async (req, res) => {
  const subAccountUpdate = await prisma.subaccount.update({
    where: {
      rfc: req.params.rfc,
    },
    data: req.body,
  });
  return res.json(subAccountUpdate);
});

export default router;
