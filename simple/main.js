
let des;
let newDes;
let filteredDes;
let out;
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
        mode: 'code',
        theme: 'ace/theme/tomorrow_night_bright'
    };
    editor = new JSONEditor(container, options);
    editor.set(FAKE_INPUT); // TODO: remove later (just for testing)
}

function addTable(template, headerTemplate, content) {
    document.getElementById("entityTable").innerHTML = headerTemplate;
    cont = document.getElementById("tableHolder");
    cont.innerHTML = Handlebars.compile(template)(content);
}

// ENTITIES ----------------------------------------------

function addEntitiesTable(e) {
    addTable(ENTITIES_TABLE_TEMPLATE, ENTITIES_HEADER_TEMPLATE, e);
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

// TODO: entity onchange

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
    if (!newDes) newDes = {};
    if (!newDes.entities) newDes.entities = {};
    newDes.entities[json_path.value] = {
        json_path: json_path.value,
        include: inc,
        type: type.value,
        iri_template: iri_template.value
    };
    closeEntityDialog();
    addEntitiesTable({...des.entities, ...newDes.entities});
}

function appendEntityInclude(id) {
    document.getElementById(id).innerHTML
        += ENTITIES_TABLE_INCLUDE_ITEM_TEMPLATE('');
}

// PROPERIES ---------------------------------------------

function addPropertiesTable() {
    addTable(PROPERTIES_TABLE_TEMPLATE, PROPERTIES_HEADER_TEMPLATE, des.struct);
}

function checkPropObj() {
    if (!filteredDes) filteredDes = {};
    if (!filteredDes.entities) filteredDes.entities = (newDes || des).entities;
    if (!filteredDes.struct) filteredDes.struct = {};
}

function setPropPrefixes() {
    checkPropObj();
    filteredDes.prefixes = {};
    for (let k of Object.keys(filteredDes.struct)) {
        let p = filteredDes.struct[k].suggested_predicates[0];
        filteredDes.prefixes[p.prefix_name] = des.prefixes[p.prefix_name];
    }
}

function onDataTypeChange(path) {
    checkPropObj();
    if (!filteredDes.struct[path])
        filteredDes.struct[path] = {};
    filteredDes.struct[path].data_types = [des.struct[path].data_types[document.getElementById(`${path}_data_types`).value]];
}

function onPredChange(path) {
    checkPropObj();
    if (!filteredDes.struct[path])
        filteredDes.struct[path] = {};
    filteredDes.struct[path].suggested_predicates = [des.struct[path].suggested_predicates[document.getElementById(`${path}_suggested_predicates`).value]];
}

// FINAL -------------------------------------------------

function addFinalContainer() {

}

async function next() {
    switch (step) {
    case 0: // Entities
        des = await getDescriptor(editor.get()[0], undefined);
        addEntitiesTable(des.entities);
        break;
    case 1: // Properties
        des = await getDescriptor(undefined, newDes);
        delete des.struct["$"];
        addPropertiesTable();
        break;
    case 2: // FINAL
        setPropPrefixes();
        out = await getOutput();
        addFinalContainer();
        break;
    case 3: // Reload
        break;
    }
    ++step;
}
