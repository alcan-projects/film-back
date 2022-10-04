import { Router } from 'express';
import films from './schemas/films';

const router = Router()

router.get('/', async (req, res) => {
    res.status(200).send("hello world")
})
router.get('/films', async (req, res) => {
    try {
        const response = await films.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})
router.get('/films/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const response = await films.findById(req.params.id)
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})
router.post('/films', async (req, res) => {
    const data = req.body
    try {
        const response = await films.create(data)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})
router.put('/films/:id', async (req, res) => {
    const data = req.body
    const id = req.params.id
    try {
        const response = await films.updateOne({
            where: { id }
        }, data)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})
router.delete('/films/:id', async (req, res) => {
    const id = req.params.id
    try {
        const response = await films.deleteOne({
            where: { id }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router