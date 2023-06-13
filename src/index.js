import express from 'express';
import cors from 'cors';
import bodyParser from 'express';

import accountsRoutes from './routes/accounts.routes.js';
import subaccountsRoutes from './routes/subaccounts.routes.js';
import uploadFilesRoutes from './routes/files.routes.js';
import invoicesRoutes from './routes/invoices.routes.js';

const app = express();
const whiteList = ['http://localhost:8080', 'http://localhost:3000'];

app.use(express.json());
/*
app.options('*', cors());

const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

console.log('corsOptions', corsOptions);
*/

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
app.use(bodyParser.json({ limit: '50000kb' }));
//app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

app.use('/api', accountsRoutes);
app.use('/api', subaccountsRoutes);
app.use('/api', uploadFilesRoutes);
app.use('/api', invoicesRoutes);

app.listen(3000);
console.log('Server on port ', 3000);
