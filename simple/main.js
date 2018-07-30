
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

function addTable() {
    let template = Handlebars.compile(ENTITIES_TABLE_TEMPLATE);
    let entity = data.entities;
    cont.innerHTML = template({entity});
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
    addTable();
}

function appendInclude(id) {
    let d = document.getElementById(id);
    d.innerHTML += ENTITIES_TABLE_INCLUDE_ITEM_TEMPLATE('');
}

async function next() {
    switch (step) {
        case 0:
            let t = document.getElementById("entityTable");
            t.innerHTML = ENTITIES_HEADER_TEMPLATE;
            cont = document.getElementById("tableHolder");
            data = await getDescriptor(editor.get()[0], undefined);
            addTable();
            break;
        case 1:
            data = await getDescriptor(undefined, data);
            break;
        case 2:
            break;
    }
    ++step;
}