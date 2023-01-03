import { Router } from 'express';
import museumRoutes from './museum.js'

const router = Router();

router.get('/', (req, res) => {
  res.send('This is the api root')
});

router.use("/museum", museumRoutes);

export default router;

