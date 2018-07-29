class Repository {
    constructor() {
        this.fs = require('fs-promise')
    }

    async getData() {
        const data = await this.fs.readFile('data/data.json')
        return JSON.parse(data)
    }

    async update(entity) {

        let JsonData = await this.getData()
        JsonData[0].entities[entity.json_path]=entity;
        this.fs.writeFile('data/data.json', JSON.stringify(JsonData))

    }

    async addEntity(entity) {
        let JsonData = await this.getData();
        JsonData[0].entities[entity.json_path]=entity;
        this.fs.writeFile('data/data.json', JSON.stringify(JsonData));
    }
    async addAttribute(attribute,json_path) {
        let JsonData = await this.getData();
        JsonData[0].entities[json_path]=entity;
        this.fs.writeFile('data/data.json', JSON.stringify(JsonData));
    }

    async getEntity(json_path) {
        const data = await this.getData()
        const entity = data[0].entities[json_path];
        if (entity !== undefined) {
            console.log(entity);
            return entity;
        }
        else {
            throw new Error("No record found")
        }
    }


}

module.exports = new Repository()