class controller {
    constructor() {
        this.Repository = require('../models/Repository')

    }

    async index(req, res) {
        const data = await this.Repository.getData();
        res.render('layouts/main', {data})

    }

    async update(req, res) {
        try {
            const data = req.body

            await this.Repository.update(data)
            res.status(200).send("ok")
        }
        catch (err) {
            res.status(500).send(err)
        }
    }

    async postEntity(req, res) {
        try {
            const entity = req.body
            await this.Repository.addEntity(entity)
            res.redirect("/app")

        }
        catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }

    async postAttribute(req, res) {
        try {
            const attribute = req.body
            await this.Repository.addAttribute(attribute)
            res.redirect("/app")

        }
        catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }

    async getEntity (req, res) {
        try {
            const json_path = req.params.json_path
            // console.log('req.params.json_path', json_path)
            const entity = await this.Repository.getEntity(json_path)
            console.log(JSON.stringify(entity, null, 2))
            res.json(entity)
        }
        catch (err) {
            res.status(404).send(err)
        }
    }
}

module.exports = new controller()