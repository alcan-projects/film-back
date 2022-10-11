import { Request, Response } from "express";
import films from "../schemas/films";

class FilmController {
    async getAll(req:Request, res:Response) {
        try {
            const response = await films.find()
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getOne(req:Request, res:Response) {
        try {
            const response = await films.findById(req.params.id)
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async Search(req:Request, res:Response) {
        const name = req.query.name
        const expression = new RegExp(`${name}`, 'i') 
        try {
            const response = await films.find({
                name: expression
            })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async Create(req:Request, res:Response) {
        const data = req.body
        try {
            const response = await films.create(data)
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async Update(req:Request, res:Response) {
        const data = req.body
        const id = req.params.id
        try {
            const response = await films.updateOne({
                where: { _id: id }
            }, data)
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async Delete(req:Request, res:Response) {
        const id = req.params.id
        try {
            const response = await films.deleteOne({
                where: { _id: id }
            })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new FilmController