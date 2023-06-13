import { Router } from 'express';
import { prisma } from '../db.js';
import { PrismaClient, Prisma } from '@prisma/client';

const router = Router();

router.get('/invoices', async (req, res) => {
  const invoices = await prisma.invoices.findMany();
  res.json(invoices);
});

router.post('/invoices', async (req, res) => {
  try {
    const newInvoices = await prisma.invoices.create({
      data: req.body,
    });
    res.json(newInvoices);
  } catch (e) {
    console.log('error', e);
    console.log('error', e.message);
    if (e instanceof Prisma.PrismaClientValidationError) {
      return res.status(400).json({
        name: e.name,
        messages: e.message,
      });
    }
    return res.status(400).json({ name: e.name, message: e.message });
  }
});

router.post('/invoicesfilter', async (req, res) => {
  const newDateCalculation = () => {
    let date = new Date();
    date.setDate(date.getDate() - 15);
    return date;
  };

  if (req.body.start_date.length === 0) {
    req.body.start_date = new Date().toISOString();
    req.body.end_date = newDateCalculation();
  }

  console.log('req', req.body);
  console.log('req', req.body.process);
  console.log('req', req.body.start_date);
  console.log('req', req.body.end_date);

  try {
    const filterInvoices = await prisma.invoices.findMany({
      where: {
        OR: [
          {
            subaccount: req.body.subaccount,
          },
          {
            status: req.body.status,
          },
          {
            rfc: req.body.rfc,
          },
          {
            createData: {
              lte: req.body.end_date,
              gte: req.body.start_date,
            },
          },
        ],
      },
    });
    if (filterInvoices.length > 0) {
      res.json(filterInvoices);
    } else {
      return res.status(204).json(filterInvoices);
    }
  } catch (e) {
    console.log('error', e);
    return res.status(400).json({ name: e.name, message: e.message });
  }
});

export default router;
