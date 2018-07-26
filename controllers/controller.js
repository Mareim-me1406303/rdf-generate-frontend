class controller {
    constructor() {
        this.repository = require('./../models/repository')
    }

 async index (req, res) {
     const data = await this.repository.getData();
     console.log(data)
        res.render('layouts/main', {data})

    }


}

module.exports = new controller()