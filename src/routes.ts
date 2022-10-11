import { Router } from 'express';
import Films from './controllers/Films';
const router = Router()

router.get('/', async (req, res) => {
    res.status(200).send("hello world")
})
router.get('/films', Films.getAll)
router.get('/films/:id', Films.getOne)
router.get("/films/search/name", Films.Search)
router.post('/films', Films.Create)
router.put('/films/:id', Films.Update)
router.delete('/films/:id', Films.Delete)


export default router