import { Router } from 'express';
import { prisma } from '../db.js';
import { PrismaClient, Prisma } from '@prisma/client';

const router = Router();

router.get('/uuid', async (req, res) => {
  const uuids = await prisma.table_uuid.findMany();
  res.json(uuids);
});

router.post('/uuid', async (req, res) => {
  try {
    const newUUID = await prisma.table_uuid.create({
      data: req.body,
    });
    res.json(newUUID);
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

export default router;
