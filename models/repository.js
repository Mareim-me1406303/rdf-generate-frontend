class repository {
    constructor() {
        this.fs = require('fs-promise')
    }
    async getData() {
        const data = await this.fs.readFile('data/data.json')
        return JSON.parse(data)
    }

}

module.exports = new repository()