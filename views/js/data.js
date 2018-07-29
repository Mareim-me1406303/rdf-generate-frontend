const EntityFormTemplate = `
    <header class="dialog-header">
        <h1>{{dialogTitle}}</h1>
    </header>
    <form method="post" action="/entities">
            <div class="form-group">
            <label for="json_path">Json path</label>
            <input type="text" class="form-control" id="json_path" name="json_path"
        value="{{entities.json_path}}" required>
        </div>
        <div class="form-group">
            <label for="include">Include</label>
            <input type="text" class="form-control" id="include" name="include"
        value="{{entities.include}}" required>
        </div>
        <div class="form-group">
            <label for="type">Type</label>
            <input type="text" class="form-control" id="type" name="type"
        value="{{entities.type}}" required>
        </div>
        <div class="form-group">
            <label for="iri_template">IRI Template</label>
            <input type="text" class="form-control" id="iri_template" name="iri_template"
        value="{{entities.iri_template}}" required>
        </div>
    
     
        <input type="submit" class="btn btn-primary">
              
        <input type="button" class="btn btn-primary" formnovalidate onclick="closeDialog()" value="Cancel">
    </form>`

const AttributesFormTemplate = `
    <header class="dialog-header">
        <h1>{{dialogTitle}}</h1>
    </header>
    <form method="post" action="/attribute">
        <div class="form-group">
            <label for="include">Include</label>
            <input type="text" class="form-control" id="include" name="include"
        value="{{entities.include}}" required>
        </div>
     
       
        <input type="submit" class="btn btn-primary">
              
        <input type="button" class="btn btn-primary" formnovalidate onclick="closeDialog()" value="Cancel">
    </form>`


async function addEntity() {
    //Convert the form template to a function
    const formTemplate = Handlebars.compile(EntityFormTemplate)

    let dialogTitle = "Add Entity"
    let entityDialog = document.querySelector('#entity-dialog')
    entityDialog.innerHTML = formTemplate({dialogTitle})

    entityDialog.showModal()
}

function closeDialog() {
    document.querySelector('#entity-dialog').close()
}

async function addAttribute(json_path) {
    console.log("json_path", json_path)
    try {
        const entity = await fetchEntity(json_path)

        const formTemplate = Handlebars.compile(AttributesFormTemplate)

        let dialogTitle = "Add Property"
        let entityDialog = document.querySelector('#entity-dialog')
        entityDialog.innerHTML = formTemplate({entity, dialogTitle})

        entityDialog.showModal()
    }
    catch
        (err) {
        console.log(err)
    }
}


async function fetchEntity(json_path) {
    let url = `/api/entities/${json_path}`
    const response = await fetch(url)
    return await response.json()
}

