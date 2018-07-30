
let data;
let editor;
let cont;
let step = 0;

main();

const print = s => console.log(s);

async function main() {
    setupJsonEditor();

}

function setupJsonEditor() {
    let container = document.getElementById("jsoneditor");
    let options = {
        mode: 'code'
    };
    editor = new JSONEditor(container, options);
    editor.set(FAKE_INPUT); // TODO: remove later (just for testing)
}

function addTable(template, headerTemplate, content) {
    document.getElementById("entityTable").innerHTML = headerTemplate;
    cont = document.getElementById("tableHolder");
    cont.innerHTML = Handlebars.compile(template)(content);
}

function addEntitiesTable() {
    addTable(ENTITIES_TABLE_TEMPLATE, ENTITIES_HEADER_TEMPLATE, data.entities);
}

function addPropertiesTable() {
    addTable(PROPERTIES_TABLE_TEMPLATE, PROPERTIES_HEADER_TEMPLATE, data.struct);
}

async function addEntity() {
    const formTemplate = Handlebars.compile(ADD_ENTITY_TEMPLATE);
    let dialogTitle = "Add Entity";
    let entityDialog = document.querySelector('#entity-dialog');
    entityDialog.innerHTML = formTemplate({dialogTitle});
    entityDialog.showModal();
}

function closeEntityDialog() {
    document.querySelector('#entity-dialog').close();
}

function setEntityInput() {
    let json_path = document.getElementById('json_path');
    let include = document.getElementById('include');
    let type = document.getElementById('type');
    let iri_template = document.getElementById('iri_template');
    let inc;
    try {
        inc = JSON.parse(include.value);
        // TODO: check the user input
    } catch (err) {
        inc = [include.value];
    }
    data.entities[json_path.value] = {
        json_path: json_path.value,
        include: inc,
        type: type.value,
        iri_template: iri_template.value
    };
    closeEntityDialog();
    addEntitiesTable();
}

function appendEntityInclude(id) {
    document.getElementById(id).innerHTML
        += ENTITIES_TABLE_INCLUDE_ITEM_TEMPLATE('');
}

async function next() {
    switch (step) {
    case 0:
        data = await getDescriptor(editor.get()[0], undefined);
        addEntitiesTable();
        break;
    case 1:
        data = await getDescriptor(undefined, data);
        addPropertiesTable();
        break;
    case 2:
        break;
    }
    ++step;
}
