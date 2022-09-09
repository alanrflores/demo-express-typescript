import express from 'express';
import * as diaryServices from '../services/diaryServices'
const router = express.Router();


//endpoints
router.get('/', (_req, res)=> {
res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res)=> {
    //lo tenemos que convertir, ya que params lo toma ocmo string y id es number, 
    //podemos hacerlo con Number(req.params.id) o con unary operation +req.params.id
    const findId = diaryServices.findById(+req.params.id)
 
    return findId !== null
     ? res.send(findId)
     : res.status(404).send('no existe el id')
    })
    

router.post('/', (_req, res)=> {
    res.send('saving a diary!')
})

export default router