import { Router } from 'express';
import { prisma } from '../db.js';

const router = Router();

router.get('/subaccounts', async (req, res) => {
  const subAccounts = await prisma.subaccount.findMany();
  res.json(subAccounts);
});

router.get('/subaccounts/:order_account', async (req, res) => {
  console.log('req.params', req.params);
  const subAccountFound = await prisma.subaccount.findMany({
    where: {
      order_account: req.params.order_account,
    },
  });
  if (!subAccountFound) {
    return res.status(404).json({ error: 'Product not found' });
  } else {
    return res.json(subAccountFound);
  }
});

router.post('/subaccounts', async (req, res) => {
  try {
    const newSubAccount = await prisma.subaccount.create({
      data: req.body,
    });
    res.json(newSubAccount);
  } catch (e) {
    console.log('error', e);
    if (e.code === 'P2002') {
      return res
        .status(400)
        .json({ error: 'El RFC ya existe', target: e.meta.target });
    } else {
      return res.status(400).json({ name: e.name, error: e.message });
    }
  }
});

router.put('/subaccounts', async (req, res) => {
  try {
    const updateSubAccount = await prisma.subaccount.update({
      where: {
        id_subaccount: req.body.id_subaccount,
      },
      data: req.body,
    });
    return res.json(updateSubAccount);
  } catch (e) {
    console.log('error', e);
    return res.status(400).json({ name: e.name, message: e.message });
  }
});

router.delete('/subaccounts/:id_subaccount', async (req, res) => {
  console.log('req', req.params.id_subaccount);
  console.log('req', typeof req.params.id_subaccount);
  try {
    //const subAccountDelete = await prisma.account.delete({
    const subAccountDelete = await prisma.account.findFirst({
      where: {
        id_subaccount: parseInt(req.params.id_subaccount),
      },
    });
    res.json(subAccountDelete);
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

export default router;
