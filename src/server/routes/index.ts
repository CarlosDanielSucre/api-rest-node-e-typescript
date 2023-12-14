import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CidadesController } from './../controllers';

const router = Router();



router.get('/', (__, res)=>{
  return res.send('Hello World!');
});

router.post('/cidades', CidadesController.create);




export { router };